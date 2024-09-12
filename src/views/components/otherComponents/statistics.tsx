import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import hookDataUser from "../../../controller/hooks/userPrincipal/hookDataUser";
import url from "../../../controller/hooks/config/config";
import { LineChart, PieChart } from "react-native-gifted-charts";
import styles from "./style/styleStatics";
import data from "../../../controller/data/dataColor";

// Estrucutra de los datos para la gráfica de línea
type lineDataItem = {
  value: number;
  text?: string | undefined; // Update the type to be string | undefined
  color?: string;
  label?: string;
  score?: string;
};

const renderDot = (colorDot: any) => {
  return <View style={[styles.dot, { backgroundColor: colorDot }]} />;
};

const Statistics = () => {
  const [emotions, setEmotion] = useState<
    { score: number; diaryFK: number; name: string; diaryDate: Date }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = hookDataUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/resultDiary?userEmail=${userEmail}`,
        );
        const result = await response.json();
        //console.log(result);
        // Procesar los datos para extraer las emociones principales de cada diario
        const processedEmotions = result.map(
          (diary: {
            resultDiary: string;
            diaryFK: number;
            diaryDate: Date;
          }) => {
            const emotions = JSON.parse(diary.resultDiary);
            const topEmotion = emotions[0]; // Tomar la primera emoción
            return {
              ...topEmotion,
              diaryFK: diary.diaryFK,
              diaryDate: new Date(diary.diaryDate),
            };
          },
        );

        // Ordenar las emociones por fecha de la más antigua a la más reciente
        processedEmotions.sort(
          (a: any, b: any) => a.diaryDate.getTime() - b.diaryDate.getTime(),
        );
        setEmotion(processedEmotions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userEmail]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
  };

  const customLabel = (val: any) => {
    return <Text style={styles.labelLine}>{val}</Text>;
  };

  // Crear la estructura de datos para la gráfica de línea
  const lineData: lineDataItem[] = emotions.map(item => ({
    value: item.score,
    score: `${item.score}%`,
    label: item.name,
    labelComponent: () => customLabel(`${formatDate(item.diaryDate)}`),
  }));
  //console.log(lineData);

  const lineDataScanner: lineDataItem[] = emotions.map((item, index) => ({
    value: item.score,
    color: data[index % data.length].color,
    score: `${item.score}%`,
    label: item.name,
    labelComponent: () => customLabel(`${item.score}%`),
  }));

  const maxScoreItem = lineDataScanner.reduce(
    (prev, current) => (prev.value > current.value ? prev : current),
    { value: 0 },
  );
  //console.log(maxScoreItem);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#213751" />
      ) : (
        <>
          <View style={styles.child}>
            <Text style={styles.textTitle}>
              Emociones detectadas del diario semanalmente:
            </Text>
            {emotions.length > 0 ? (
              <View style={styles.parentLine}>
                <LineChart
                  initialSpacing={30}
                  data={lineData}
                  height={300} // Altura de la gráfica
                  spacing={45} // Espacio entre los puntos
                  color={"#98C0BF"} // Color de la línea
                  thickness={2} // Grosor de la línea
                  dataPointsColor={"#479E9C"} // Color de los puntos
                  isAnimated={true} // Animación de la línea
                  curved={true} // Curva de la línea
                  yAxisTextStyle={styles.textNumber} // Estilo del texto del eje Y
                  backgroundColor="#FFF"
                  maxValue={100}
                  rulesType="solid"
                  yAxisColor="white"
                  xAxisColor="white"
                  yAxisLabelSuffix="%"
                  pointerConfig={{
                    pointerStripHeight: 160,
                    pointerStripUptoDataPoint: true,
                    pointerStripColor: "#213751",
                    pointerStripWidth: 2,
                    strokeDashArray: [2, 5],
                    pointerColor: "#B0CCCA",
                    radius: 6,
                    pointerLabelWidth: 100,
                    activatePointersDelay: 50,
                    pointerLabelHeight: 90,
                    activatePointersOnLongPress: true,
                    pointerLabelComponent: (items: any) => {
                      return (
                        <View style={styles.labelParent}>
                          <Text style={styles.textLabel}>{items[0].label}</Text>
                          <Text style={[styles.textLabel, styles.score]}>
                            {items[0].score}
                          </Text>
                        </View>
                      );
                    },
                  }}
                />
              </View>
            ) : (
              <ActivityIndicator size="small" color="#213751" />
            )}
          </View>
          <View style={styles.child}>
            <Text style={styles.textTitle}>
              Emociones detectadas del scaneo:
            </Text>
            {emotions.length > 0 ? (
              <View style={styles.parentLinePie}>
                <PieChart
                  data={lineDataScanner}
                  donut
                  showValuesAsLabels
                  innerRadius={70}
                  //textSize={15}
                  //showText
                  textBackgroundRadius={26}
                  //onPress={(item: any) => Alert.alert(`Value: ${item.score}`)}
                  //onLabelPress={(item: any) => Alert.alert(item[0].score)}
                  innerCircleColor={"#CACACA"}
                  centerLabelComponent={() => {
                    return (
                      <View
                        style={styles.maxScoreView}
                      >
                        <Text style={styles.textScore}>
                          {maxScoreItem.score}
                        </Text>
                        <Text style={styles.textScoreLabel}>
                          {maxScoreItem.label}
                        </Text>
                      </View>
                    );
                  }}
                />
                <View style={styles.childScores}>
                  {lineDataScanner.slice(0, 7).map((item, index) => (
                    <View
                      key={index}
                      style={styles.parentScore}
                    >
                      <View style={styles.childScore}>
                      {renderDot(item.color)}
                      <Text style={styles.textLabel}>{item.label}: <Text style={styles.textLabel}>{item.score}</Text></Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <ActivityIndicator size="small" color="#213751" />
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default Statistics;

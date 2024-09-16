import React from "react";
import {
  CalendarProvider,
  ExpandableCalendar,
  AgendaList,
} from "react-native-calendars";
import { ActivityIndicator, View } from "react-native";
import styles from "./style/styleCalendar";
import AgendaItem from "./AgentaItem";
import hooksCalendar from "../../../controller/hooks/userPrincipal/hookCalendars";

const Calendary = () => {
  const { combinedResults, loading } = hooksCalendar();

  // Transformar combinedResults en el formato esperado por AgendaList
  const ITEMS = combinedResults.length > 0 ? combinedResults.reduce((acc: any[], result: any) => {
    const dateIndex = acc.findIndex((item) => item.title === result.date);
    if (dateIndex >= 0) {
      acc[dateIndex].data.push(result);
    } else {
      acc.push({ title: result.date, data: [result] });
    }
    return acc.sort((a, b) => new Date(b.title).getTime() - new Date(a.title).getTime());
  }, []) : [{ title: 'No Data', data: [] }];

  if (loading) return <ActivityIndicator style={styles.loading} size="large" color="#479E9C" />; // Si loading es true, se muestra un ActivityIndicator

  return (
    <CalendarProvider
      date={new Date().toISOString().split("T")[0]}
      style={styles.calendary}
    >
      <ExpandableCalendar
        firstDay={1}
        animateScroll
      />
       {ITEMS.length === 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#479E9C" />
        </View>
      ) : (
        <AgendaList
          sections={ITEMS}
          renderItem={({ item }) => <AgendaItem item={item} />}
          //scrollToNextEvent
          sectionStyle={styles.section}
          dayFormat={"d-MM-yyyy"}
        />
      )}
    </CalendarProvider>
  );
};

export default Calendary;
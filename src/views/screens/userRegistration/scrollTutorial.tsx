import React, { useRef, useState } from "react";
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import data from "../../../controller/data/dataScroll";
import RenderItem from "../../components/scrollTutorial/RenderItem";
import CustomButton from "../../components/scrollTutorial/CustomButton";
import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  SkImage,
  makeImageFromView,
} from "@shopify/react-native-skia";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Pagination from "../../components/scrollTutorial/Pagination";
import UserNavigation from "../../../controller/hooks/userNavigation";
import styles from "./style/styleAll";

const Scroll = () => {
  const pd = PixelRatio.get();
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const mask = useSharedValue(0);
  const buttonVal = useSharedValue(0);

  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const { Welcome } = UserNavigation();

  const handlePress = async () => {
    if (currentIndex === data.length - 1 && !active) {
      Welcome();
      return;
    }
    if (!active) {
      setActive(true);

      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);

      setCurrentIndex(prev => prev + 1);
      mask.value = withTiming(SCREEN_HEIGHT, { duration: 1000 });
      buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
      await wait(1000);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };
  return (
    <View style={styles.container}>
      <View ref={ref} collapsable={false}>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={"none"}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={mask}
                  color="black"
                />
              </Group>
            }
          >
            <Image
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
          </Mask>
        </Canvas>
      )}
      <CustomButton handlerPress={handlePress} buttonVal={buttonVal} />
      <Pagination data={data} buttonVal={buttonVal} />
      <Text style={styles.credit}>©Ⓡ TypeByte | Potenciado por Hume AI · 2024
      </Text>
    </View>
  );
};

export default Scroll;

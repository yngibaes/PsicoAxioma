import React from 'react';
import {TouchableWithoutFeedback, useWindowDimensions} from 'react-native';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './style/stylesAll';

type Props = {
  handlerPress: () => void;
  buttonVal: SharedValue<number>;
};

const colors = ['#458281', '#f8dac2', '#5a71a3', '#c1cde0'];

const CustomButton = ({handlerPress, buttonVal}: Props) => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, SCREEN_HEIGHT, 3 * SCREEN_HEIGHT],
      colors,
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    /*Animacion que se le da al boton de scroll para que  este cambie
         posicionamiento */
    return {
      width:
        buttonVal.value === 3 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),

      height:
        buttonVal.value === 3 * SCREEN_HEIGHT
          ? withSpring(80)
          : withSpring(120),
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 3 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            buttonVal.value === 3 * SCREEN_HEIGHT
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 3 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            buttonVal.value === 3 * SCREEN_HEIGHT
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      <Animated.View
        style={[styles.container, animatedColor, buttonAnimationStyle]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          ¡Comencemos!
        </Animated.Text>
        <Animated.Image
          style={arrowAnimationStyle}
          source={require('../../assets/img/scroll/arrowright.png')}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

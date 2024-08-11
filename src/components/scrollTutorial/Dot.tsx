import React from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { interpolate, interpolateColor, SharedValue, useAnimatedStyle, } from 'react-native-reanimated';
import { Extrapolate } from '@shopify/react-native-skia';
import styles from './style/stylesAll';

type Props = {
  index: number
  buttonVal: SharedValue<number>
}

const Dot = ({ index, buttonVal }: Props) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions()

  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [10, 30, 10],
      Extrapolate.CLAMP,
    )

    const opacityAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    )

    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    }
  })

  const colors = ['#458281', '#f8dac2', '#5a71a3', '#c1cde0'] //Se cambian los colores de la paginacion que se da con el cursor del boton de scroll

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, SCREEN_HEIGHT, 3 * SCREEN_HEIGHT], colors,
    )
    return {
      backgroundColor: backgroundColor,
    }
  })
  return <Animated.View style={[styles.dot, animatedColor, animatedDotStyle]} />
}

export default Dot


import * as React from 'react'
import { Image, View, Pressable, Text } from 'react-native'
import styles from './style/stylesAll'

// Definición de las props usando TypeScript
interface propsTopBar {
  goBack: () => void
  text: string
}

// Definición del componente TopBar
const TopBar = (props: propsTopBar) => {
  return (
    <View style={styles.gobackParent}>
      <Pressable style={styles.gobackChildLayout} onPress={props.goBack}>
        <View style={[styles.gobackChild, styles.gobackChildLayout]}>
          <Image
            style={styles.gobackIcon}
            resizeMode="contain"
            source={require('../../assets/img/arrowBack.png')}
          />
        </View>
      </Pressable>
      <Text style={styles.gobackText}>{props.text}</Text>
    </View>
  )
}

export default TopBar

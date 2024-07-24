import * as React from 'react'
import {Text, View} from 'react-native'
import styles from './style/stylesAll'

const TitleWelcome = () => {
  return (
    <View style={styles.divTitle}>
      <Text style={[styles.sizeTitle, styles.title]}>
        ¡Bienvenido a PsicoAxioma!
      </Text>
    </View>
  )
}

export default TitleWelcome

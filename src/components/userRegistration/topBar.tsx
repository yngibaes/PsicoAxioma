import * as React from 'react'
import {StyleSheet, Image, View, Pressable, Text} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

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

// Definición de los estilos
const styles = StyleSheet.create({
  gobackChild: {
    backgroundColor: materialTheme.palettes.secondary[20],
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gobackChildLayout: {
    height: hp('4%'),
    width: wp('8%'),
  },
  gobackIcon: {
    alignSelf: 'center',
    maxHeight: '100%',
    width: wp('6%'),
  },
  gobackParent: {
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('9%'),
    overflow: 'hidden',
    paddingHorizontal: hp('1.1%'),
    paddingVertical: hp('1%'),
    width: wp('90%'),
  },
  gobackText: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterBold',
    fontSize: hp('2.5%'),
    fontWeight: '400',
    marginLeft: '2.5%',
    textAlign: 'center',
  },
})

export default TopBar

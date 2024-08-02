import * as React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'

const Menu = () => {
  return (
    <View style={[styles.frame12Parent, styles.frame12FlexBox]}>
      <Pressable
        style={[styles.frame12, styles.frame12FlexBox]}
        onPress={() => { }}>
        <Image
          style={styles.userIcon}
          resizeMode="cover"
          source={require('../../assets/img/icon.png')}
        />
        <Text style={styles.holaYoongi}>
          <Text style={styles.holaYoongiTxtContainer}>
            <Text style={styles.hola}>¡Hola</Text>
            <Text style={styles.yoongi}>, Yoongi!</Text>
          </Text>
        </Text>
      </Pressable>
      <Pressable style={styles.bell36021231} onPress={() => { }}>
        <Icon
          name="notifications"
          type="ionicon"
          color="#000"
          onPress={() => console.log('ola')}
          size={28}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  frame12FlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    borderRadius: 50,
    width: 57,
    height: 57,
    zIndex: 0,
  },
  hola: {
    fontFamily: 'InterRegular',
  },
  yoongi: {
    fontWeight: '200',
    fontFamily: 'InterBold',
  },
  holaYoongiTxtContainer: {
    width: '100%',
  },
  holaYoongi: {
    position: 'absolute',
    top: 11,
    left: 70,
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    width: 140,
    height: 35,
    zIndex: 1,
    alignItems: 'center',
  },
  frame12: {
    alignItems: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  bell36021231: {
    width: 25,
    height: 25,
  },
  frame12Parent: {
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 5,
    paddingRight: 28,
    paddingBottom: 5,
    minWidth: 360,
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
    /*     borderWidth: 2,
        borderColor: '#000', */
  },
})

export default Menu

import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import hookMenu from '../../hooks/userPrincipal/hookMenu';
import styles from './style/styleMenu';

const gretting = '¡Hola';

const Menu = () => {
  const { displayName, photoURL, navigation } = hookMenu();
  return (
    <View style={[styles.parentAll, styles.layout]}>
      <Pressable
        style={styles.layout}
        onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}>
        {photoURL ? (
          <Image source={{ uri: photoURL }} resizeMode='contain' style={styles.userIcon} />
        ) : null}
        <Text style={styles.textParent}>
          <Text style={styles.hello}>{gretting}</Text>
          <Text style={styles.name}>, {displayName}!</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default Menu;
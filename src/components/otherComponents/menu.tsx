import React, { useEffect, useState } from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { auth } from '../../hooks/config/firebase';
import styles from './style/styleMenu';

const Menu = () => {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL)
    }
  }, []);
  return (
    <View style={[styles.parentAll, styles.layout]}>
      <Pressable
        style={styles.layout}
        onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}>
        {photoURL ? (
          <Image source={{ uri: photoURL }} resizeMode='contain' style={styles.userIcon} />
        ) : null}
        <Text style={styles.textParent}>
            <Text style={styles.hello}>¡Hola</Text>
            <Text style={styles.name}>, {displayName}!</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default Menu;
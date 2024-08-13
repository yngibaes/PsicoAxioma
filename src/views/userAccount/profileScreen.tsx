import React from 'react';
import { View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from '../userPrincipal/style/styleScreen';
import ProfileUser from '../../components/otherComponents/profileUser';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <ProfileUser />
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

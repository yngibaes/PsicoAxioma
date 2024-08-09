import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from '../../components/otherComponents/card';
import NavBar from '../../components/otherComponents/navBar';
import dataCall from '../../data/dataCall';
import styles from './style/styleScreen';
import Menu from '../../components/otherComponents/menu';

const RoutesScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <ScrollView>
        <View>
          {dataCall.map((card, index) => (
            <Card
              key={index}
              imageSource={card.imageSource}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
              phoneNumber={card.phoneNumber}
            />
          ))}
        </View>
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default RoutesScreen

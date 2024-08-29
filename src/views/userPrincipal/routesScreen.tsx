import React from 'react';
import {View, ScrollView} from 'react-native';
import Menu from '../../components/otherComponents/menu';
import Card from '../../components/otherComponents/card';
import dataCall from '../../data/dataCall';
import styles from './style/styleScreen';

const RoutesScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
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
    </View>
  );
};

export default RoutesScreen;

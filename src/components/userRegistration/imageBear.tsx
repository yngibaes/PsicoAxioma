import React from 'react';
import { Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './style/stylesAll';

// Definición de las props usando TypeScript
interface propsImage {
  sizeWidhtI: string
  sizeHeightI: string
  sizeHeightD: string
}

// Definición del componente ImageLogIn
const ImageLogIn = (props: propsImage) => {
  return (
    <View style={[styles.divImage, { height: hp(`${props.sizeHeightD}`) }]}>
      <Image
        style={[
          styles.image,
          {
            height: hp(`${props.sizeHeightI}`),
            width: wp(`${props.sizeWidhtI}`),
          },
        ]}
        resizeMode="contain"
        source={require('../../assets/img/userRegistration/osito.png')}
      />
    </View>
  );
};

export default ImageLogIn;

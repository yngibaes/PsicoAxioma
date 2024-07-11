import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface propsImage {
    sizeWidhtI: string;
    sizeHeightI: string;
    sizeHeightD: string;
  }

const ImageLogIn = (props: propsImage) => {
    return(
        <View style={[styles.divImage, {height: hp(`${props.sizeHeightD}`)}]}>
            <Image style={[styles.image,  {height: hp(`${props.sizeHeightI}`), width: wp(`${props.sizeWidhtI}`)}]} resizeMode="contain" source={require('../assets/img/osito1.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: { // Estilos de la imagen
        alignSelf: "center", // Alineación de la imagen
    },
    divImage: {
        borderRadius: 50, // Radio de las esquinas de la imagen
		width: "100%", // Ancho del contenedor
        overflow: "hidden", // Ocultar elementos que sobresalgan
    },
});

export default ImageLogIn;
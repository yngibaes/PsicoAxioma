import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageLogIn = () => {
    return(
        <View style={styles.divImage}>
            <Image style={styles.divImage} resizeMode="contain" source={require('../assets/img/osito1.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: { // Estilos de la imagen
        width: wp('50%'), // Ancho de la imagen
		height: hp('50%'), // Altura de la imagen
        alignSelf: "center", // Alineación de la imagen
    },
    divImage: {
        borderRadius: 50, // Radio de las esquinas de la imagen
		width: "100%", // Ancho del contenedor
        height: hp('28%'), // Altura del contenedo
        overflow: "hidden", // Ocultar elementos que sobresalgan
    },
});

export default ImageLogIn;
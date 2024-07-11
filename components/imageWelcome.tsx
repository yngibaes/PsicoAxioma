import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageWelcome = () => {
    return(
        <View style={[styles.divImage]}>
			<Image style={styles.image} resizeMode="contain" source={require('../assets/img/osito1.png')} />
		</View>
    )
}

const styles = StyleSheet.create({
    image: { // Estilos de la imagen
		alignSelf: "center", // Alineación de la imagen
		width: wp('80%'), // Ancho de la imagen
		height: hp('42%'), // Altura de la imagen
	},
	divImage: { // Estilos del contenedor de la imagen
		width: "100%", // Ancho del contenedor
        height: hp('45%'), // Altura del contenedor
		overflow: "hidden", // Ocultar elementos que sobresalgan
	},
});

export default ImageWelcome;
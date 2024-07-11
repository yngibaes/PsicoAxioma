import * as React from 'react';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface propsTopBar {
	goBack: () => void,
	text: string
  }

const TopBar = (props: propsTopBar) => {
    return(
        <View style={styles.gobackParent}>
            <Pressable style={styles.gobackChildLayout} onPress={props.goBack}>
                <View style={[styles.gobackChild, styles.gobackChildLayout]}>
                    <Image style={styles.gobackIcon} resizeMode="contain" source={require('../assets/img/arrowBack.png')} />
                </View>
            </Pressable>
            <Text style={styles.gobackText}>{props.text}</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    gobackParent: {
        width: wp("90%"),
        height: hp("9%"),
        paddingHorizontal: hp("1.1%"),
        paddingVertical: hp("1%"),
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    gobackChildLayout: {
        height: hp("4%"),
        width: wp("8%")
    },
    gobackChild: {
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "#233333",
    },
    gobackIcon: {
        maxHeight: "100%",
        width: wp("6%"),
		alignSelf: "center",
    },
	gobackText: {
        fontSize: hp('2.5%'),
        color: "#000",
        textAlign: "center",
        marginLeft: "2.5%",
		fontFamily: "InterBold",
        fontWeight: "400",
    },
});

export default TopBar;
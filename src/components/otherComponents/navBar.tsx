import * as React from "react";
import { Image, View, Pressable } from "react-native";
import styles from './style/styleNavBar'
import UserNavigation from "../../hooks/userNavigation";

const NavBar = () => {
	const { HomeScreen, CalendaryScreen, CameraScreen, DiaryScreen, RoutesScreen } = UserNavigation()
	return (
		<View style={styles.nav}>
			<Pressable style={styles.option} onPress={HomeScreen}>
				<Image style={styles.icon} resizeMode="contain" source={require('../../assets/img/nav/home.png')} />
			</Pressable>
			<Pressable style={styles.option} onPress={CalendaryScreen}>
				<Image style={styles.icon} resizeMode="contain" source={require('../../assets/img/nav/calendary.png')} />
			</Pressable>
			<Pressable style={styles.option} onPress={CameraScreen}>
				<View style={styles.ellipse}>
					<Image style={styles.icon} resizeMode="contain" source={require('../../assets/img/nav/more.png')} />
				</View>
			</Pressable>
			<Pressable style={styles.option} onPress={DiaryScreen}>
				<Image style={styles.icon} resizeMode="contain" source={require('../../assets/img/nav/diary.png')} />
			</Pressable>
			<Pressable style={styles.option} onPress={RoutesScreen}>
				<Image style={styles.icon} resizeMode="contain" source={require('../../assets/img/nav/call.png')} />
			</Pressable>
		</View>);
};

export default NavBar;

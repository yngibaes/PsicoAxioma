import * as React from "react";
import { View } from "react-native";
import styles from './style/styleNavBar'
import UserNavigation from "../../hooks/userNavigation";
import { Icon } from 'react-native-elements'

const NavBar = () => {
	const { HomeScreen, CalendaryScreen, CameraScreen, DiaryScreen, RoutesScreen } = UserNavigation()
	return (
		<View style={styles.nav}>
			<View style={styles.option}>
				<Icon
					underlayColor='white'
					name='home-outline'
					type='ionicon'
					color='#000'
					onPress={HomeScreen}
					size={28} />
			</View>
			<View style={styles.option}>
				<Icon
					underlayColor='white'
					name='calendar-outline'
					type='ionicon'
					color='#000'
					onPress={CalendaryScreen}
					size={28} />
			</View>
			<View style={[styles.ellipse, styles.option]}>
				<Icon
					underlayColor='white'
					name='add-circle-outline'
					type='ionicon'
					color='#000'
					onPress={CameraScreen}
					size={28} />
			</View>
			<View style={styles.option}>
				<Icon
					underlayColor='white'
					name='reader-outline'
					type='ionicon'
					color='#000'
					onPress={DiaryScreen}
					size={28} />
			</View>
			<View style={styles.option}>
				<Icon
					underlayColor='white'
					name='call-outline'
					type='ionicon'
					color='#000'
					onPress={RoutesScreen}
					size={28} />
			</View>
		</View>);
};

export default NavBar;

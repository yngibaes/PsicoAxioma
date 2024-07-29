import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import style from './style/navBar'

const NavBar = () => {
	return (
		<View style={style.nav}>
			<Pressable style={style.option} onPress={() => { }}>
				<Image style={style.icon} resizeMode="contain" source={require('../../assets/img/nav/home.png')} />
			</Pressable>
			<Pressable style={style.option} onPress={() => { }}>
				<Image style={style.icon} resizeMode="contain" source={require('../../assets/img/nav/calendary.png')} />
			</Pressable>
			<Pressable style={style.option} onPress={() => { }}>
				<View style={style.ellipse}>
					<Image style={style.icon} resizeMode="contain" source={require('../../assets/img/nav/more.png')} />
				</View>
			</Pressable>
			<Pressable style={style.option} onPress={() => { }}>
				<Image style={style.icon} resizeMode="contain" source={require('../../assets/img/nav/diary.png')} />
			</Pressable>
			<Pressable style={style.option} onPress={() => { }}>
				<Image style={style.icon} resizeMode="contain" source={require('../../assets/img/nav/call.png')} />
			</Pressable>
		</View>);
};

export default NavBar;

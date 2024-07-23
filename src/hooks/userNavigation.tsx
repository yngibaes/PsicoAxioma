import {useNavigation} from '@react-navigation/native'
import {Alert} from 'react-native'

// Wrap the navigation logic inside a custom hook
function UserNavigation() {
  const navigation = useNavigation()

  const logIn = () => navigation.navigate('LogIn')
  const signUp = () => navigation.navigate('SignUp')
  const forgetPassword = () => navigation.navigate('ForgetPassword')
  const Welcome = () => navigation.navigate('Welcome')
  const goBack = () => {
    navigation.goBack()
  }
  const homeScreen = () => {
    Alert.alert('Fin del recorrido asjdhjas')
  }

  return {logIn, signUp, forgetPassword, goBack, homeScreen, Welcome}
}

export default UserNavigation

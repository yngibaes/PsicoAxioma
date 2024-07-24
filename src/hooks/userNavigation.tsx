import { useNavigation } from '@react-navigation/native'

function UserNavigation() {
  const navigation = useNavigation()
  const logIn = () => navigation.navigate('LogIn')
  const signUp = () => navigation.navigate('SignUp')
  const forgetPassword = () => navigation.navigate('ForgetPassword')
  const Welcome = () => navigation.navigate('Welcome')
  const goBack = () => navigation.goBack()
  return { logIn, signUp, forgetPassword, goBack, Welcome }
}

export default UserNavigation

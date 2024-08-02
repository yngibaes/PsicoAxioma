import { useNavigation } from '@react-navigation/native';

function UserNavigation() {
  const navigation = useNavigation()

  // User Registration
  const Welcome = () => navigation.navigate('Welcome')
  const logIn = () => navigation.navigate('LogIn')
  const signUp = () => navigation.navigate('SignUp')
  const forgetPassword = () => navigation.navigate('ForgetPassword')

  
  // User Navigation - All Screens
  const HomeScreen = () => navigation.navigate('Home')
  const CalendaryScreen = () => navigation.navigate('Calendary')
  const CameraScreen = () => navigation.navigate('Camera')
  const DiaryScreen = () => navigation.navigate('Diary')
  const RoutesScreen = () => navigation.navigate('Routes')

  const goBack = () => navigation.goBack()

  return {
    logIn,
    signUp,
    forgetPassword,
    goBack,
    Welcome,
    HomeScreen,
    CalendaryScreen,
    CameraScreen,
    DiaryScreen,
    RoutesScreen,
  }
}

export default UserNavigation

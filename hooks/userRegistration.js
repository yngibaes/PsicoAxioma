/* import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const url = 'http://192.168.1.5:8000/api';

export const useForm = () => {
  const navigation = useNavigation()

  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userPassword: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: GestureResponderEvent): Promise<void> => {
    event.preventDefault();

    if (form.userPassword !== form.confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      console.log(error)
    } else {
      setError('');
    }
    try {
      const response = await fetch(url + '/insertUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      navigation.navigate('LogIn')
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again later.';
      if (error instanceof TypeError) {
        errorMessage = 'Network request failed. Please check your internet connection and try again.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
      console.error(errorMessage);
    }
  };

  return { form, handleChange, handleSubmit };
}; */

// useFormSignUp.js
import { useState } from 'react';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  userEmail: Yup.string().email('Invalid email').required('Required'),
  userPhone: Yup.string().required('Required'),
  userPassword: Yup.string().min(6, 'Too Short!').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('userPassword'), null], 'Passwords must match').required('Required'),
});

export const useFormSignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userPassword: '',
    confirmPassword: '',
  });

  const handleChange = (fieldName, value) => {
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  // Aquí puedes agregar más lógica relacionada con el formulario

  return { form, handleChange };
};
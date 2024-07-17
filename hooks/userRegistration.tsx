import { useState } from 'react';
import { Alert, GestureResponderEvent } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const url = 'http://localhost:8000/api';

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
      navigation.navigate('LogIn')
      if (form.userPassword !== form.confirmPassword) {
        Alert.alert('Error', 'Las contraseñas no coinciden.');
      }else{
        setError('');
      }
      try {
        const response = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        };
        let res = await fetch(`${url}/ola`, response);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        let data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return { form, handleChange, handleSubmit };
};
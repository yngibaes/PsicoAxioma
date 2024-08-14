import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import url from '../config/config';
import UserNavigation from '../userNavigation';

// En este hook se podrá encontrar la información del usuario, como su nombre, correo y foto de perfil, además de la función para cerrar sesión.
const hookDataUser = () => {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [photoURL, setPhotoURL] = useState<string | null>(null);
    const [userPhone, setUserPhone] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName);
            setUserEmail(user.email);
            setPhotoURL(user.photoURL);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${url}/readPhone?userEmail=${userEmail}`);
            if (!response.ok) {
              throw new Error('Salió mal la conexión');
            }
            const [result] = await response.json();
            setUserPhone(result.userPhone);
            console.log(result.userPhone);
          } catch (error) {
            console.log(error);
          }
        };
    
        if (userEmail) {
          // Asegúrate de que el email esté disponible antes de hacer la consulta
          fetchData();
        }
      }, [userEmail]);

    const handleLogout = async () => {
        await signOut(auth);
    };

    const { UpdateEmailScreen } = UserNavigation();

    return { displayName, userEmail, photoURL, userPhone, handleLogout, navigation, UpdateEmailScreen };
};

export default hookDataUser;

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

// En este hook se podrá encontrar la información del usuario, como su nombre, correo y foto de perfil, además de la función para cerrar sesión.
const hookDataUser = () => {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [photoURL, setPhotoURL] = useState<string | null>(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName);
            setUserEmail(user.email);
            setPhotoURL(user.photoURL)
        }
    }, []);

    const handleLogout = async () => {
        await signOut(auth)
    }

    return { displayName, userEmail, photoURL, handleLogout, navigation };
}

export default hookDataUser;

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';

const hookMenu = () => {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [photoURL, setPhotoURL] = useState<string | null>(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName);
            setPhotoURL(user.photoURL)
        }
    }, []);
    return { displayName, photoURL, navigation };
}

export default hookMenu;
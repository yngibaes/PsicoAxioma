import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const hookSideBar = () => {
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

    return { displayName, userEmail, photoURL, handleLogout };
}

export default hookSideBar;
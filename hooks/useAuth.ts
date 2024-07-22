import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth }  from './config/firebase'

const useAuth = () => {
 const [user, setUser] = useState<any | null>(null);

 useEffect(()=>{
    const unsub = onAuthStateChanged(auth, users =>{
        console.log('Este es el usuario: ', users)
        if(user){
            setUser(users);
        }else{
            setUser(null);
        }
    });
    return unsub
 },[])
 return { user }
}
export default useAuth;
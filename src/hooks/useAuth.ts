import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './config/firebase';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect called');
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        if (user.emailVerified) {
          console.log('Iniciado sesión');
          setUser(user);
          setIsLoggedIn(true);
          console.log(user);
        } else {
          console.log('No se ha iniciado sesión');
          setUser(null);
          setIsLoggedIn(false);
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []); // Array de dependencias vacío para ejecutar el efecto solo una vez

  const login = () => {
    console.log('login called');
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log('logout called');
    setIsLoggedIn(false);
  };

  const userEmail = user?.email || '';

  return {
    user,
    isLoggedIn,
    login,
    logout,
    userEmail,
    loading
  };
};

export default useAuth;
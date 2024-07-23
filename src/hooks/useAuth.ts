import { onAuthStateChanged, User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth }  from './config/firebase';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  // Nuevo estado para controlar si el usuario ha iniciado sesión activamente
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, users => {
      console.log('Este es el usuario: ', users);
      if (users) {
        setUser(users);
        // Aquí podrías verificar si el inicio de sesión es activo antes de actualizar isLoggedIn
        // Esto dependerá de cómo manejes el flujo de inicio de sesión en tu aplicación
      } else {
        setUser(null);
        setIsLoggedIn(false); // Asegúrate de restablecer el estado de inicio de sesión cuando el usuario cierra sesión
      }
    });
    return unsub;
  }, []);

  // Función para actualizar el estado de inicio de sesión, podría ser llamada después de un inicio de sesión exitoso
  const login = () => {
    setIsLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    setIsLoggedIn(false);
    // Aquí deberías implementar el cierre de sesión de Firebase Auth
  };

  return { user, isLoggedIn, login, logout };
};

export default useAuth;
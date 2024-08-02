import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './config/firebase';

const useAuth = () => {
  // Estado para almacenar el usuario actual
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  // Efecto para verificar si el usuario está autenticado
  useEffect(() => {
    // Suscribirse a los cambios de estado de autenticación
    const unsub = onAuthStateChanged(auth, users => {
      console.log('Este es el usuario: ', users)
      if (users) {
        setUser(users)
        setIsLoggedIn(true)
      } else {
        setUser(null)
        setIsLoggedIn(false) // Asegúrate de restablecer el estado de inicio de sesión cuando el usuario cierra sesión
      }
    })
    return unsub
  }, [])

  // Función para actualizar el estado de inicio de sesión, podría ser llamada después de un inicio de sesión exitoso
  const login = () => {
    setIsLoggedIn(true)
  }

  // Función para manejar el cierre de sesión
  const logout = () => {
    setIsLoggedIn(false)
    // Aquí deberías implementar el cierre de sesión de Firebase Auth
  }

  // Obtener el correo electrónico del usuario
  const userEmail = user?.email || ''

  return {
    user,
    isLoggedIn,
    login,
    logout,
    userEmail
  }
}

export default useAuth

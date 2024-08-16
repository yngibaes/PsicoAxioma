import { useEffect, useState } from 'react';
import { DevSettings } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut, updateProfile } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { auth } from '../config/firebase';
import url from '../config/config';
import UserNavigation from '../userNavigation';
import ImagePicker from 'react-native-image-crop-picker';

// En este hook se podrá encontrar la información del usuario, como su nombre, correo y foto de perfil, además de la función para cerrar sesión.
const hookDataUser = () => {
  const navigation = useNavigation();
  const PhotoDefault = 'https://firebasestorage.googleapis.com/v0/b/psicoaxioma.appspot.com/o/user.png?alt=media&token=bf2e35a6-ff00-490b-9750-0242667ab50e';
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

  const storage = getStorage();

  const cropImage = async (uri: string) => {
    try {
      const image = await ImagePicker.openCropper({
        path: uri,
        width: 400, // Puedes ajustar el tamaño según tus necesidades
        height: 400,
        cropping: true,
        cropperCircleOverlay: true, // Opcional: para recorte circular
        mediaType: 'photo',
        compressImageQuality: 1.0, // Ajusta la calidad de la imagen (1.0 es la máxima calidad)
        compressImageMaxWidth: 1000, // Ajusta la resolución máxima de la imagen
        compressImageMaxHeight: 1000, // Ajusta la resolución máxima de la imagen
      });

      return {
        assets: [
          {
            uri: image.path,
            fileName: image.filename,
            type: image.mime,
          },
        ],
      };
    } catch (error) {
      console.error('Error al recortar la imagen:', error);
      throw error;
    }
  };


  const updatePhoto = async (response: any) => {
    console.log(response);
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      const uri = asset.uri;

      if (!uri) {
        console.error('URI no existe');
        return;
      }

      try {
        // Recortar la imagen seleccionada
        const croppedResponse = await cropImage(uri);
        const croppedAsset = croppedResponse.assets[0];
        const croppedUri = croppedAsset.uri;

        // Obtener el blob de la imagen recortada
        const fetchResponse = await fetch(croppedUri);
        const blob = await fetchResponse.blob();

        // Crear una referencia en Firebase Storage
        const storageRef = ref(storage, `userPhoto/${croppedAsset.fileName}`);
        // Subir el blob
        await uploadBytes(storageRef, blob);
        console.log('Se ha subido la imagen');

        // Obtener la URL de descarga de la imagen subida
        const downloadURL = await getDownloadURL(storageRef);
        console.log('URL de descarga:', downloadURL);

        // Actualizar el perfil del usuario con la nueva foto
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            photoURL: downloadURL
          });
          console.log('Foto de perfil actualizada');

          // Recargar la aplicación
          DevSettings.reload();
        }
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const { UpdateEmailScreen } = UserNavigation();

  return { displayName, userEmail, photoURL, userPhone, handleLogout, navigation, UpdateEmailScreen, updatePhoto, PhotoDefault };
};

export default hookDataUser;

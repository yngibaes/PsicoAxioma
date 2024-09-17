import { useEffect, useState } from "react";
import { Alert, DevSettings } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut, updateProfile, deleteUser } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { auth } from "../config/firebase";
import url from "../config/config";
import UserNavigation from "../userNavigation";
import ImagePicker from "react-native-image-crop-picker";

// En este hook se podrá encontrar la información del usuario, como su nombre, correo y foto de perfil, además de la función para cerrar sesión.
const hookDataUser = () => {
  const navigation = useNavigation();
  const PhotoDefault =
    "https://firebasestorage.googleapis.com/v0/b/psicoaxioma.appspot.com/o/user.png?alt=media&token=bf2e35a6-ff00-490b-9750-0242667ab50e";
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const user = auth.currentUser;
      if (user) {
        setDisplayName(user.displayName);
        setUserEmail(user.email);
        setPhotoURL(user.photoURL);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      //if si lo que hay en el userphone esta vacio si no que no lo ejecute.
      try {
        const response = await fetch(
          `${url}/readPhone?userEmail=${userEmail}`,
        );
        if (!response.ok) {
          throw new Error("Salió mal la conexión");
        }
        const [result] = await response.json();
        setUserPhone(result.userPhone);
        console.log(result.userPhone);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userEmail]);

  const cropImage = async (uri: string) => {
    try {
      const image = await ImagePicker.openCropper({
        path: uri,
        width: 400, // Puedes ajustar el tamaño según tus necesidades
        height: 400,
        cropping: true,
        cropperCircleOverlay: true, // Opcional: para recorte circular
        mediaType: "photo",
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
      console.error("Error al recortar la imagen:", error);
      throw error;
    }
  };

  const updatePhoto = async (response: any) => {
    console.log(response);
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      const uri = asset.uri;

      if (!uri) {
        console.error("URI no existe");
        return;
      }

      try {
        // Recortar la imagen seleccionada
        const croppedResponse = await cropImage(uri);
        const croppedAsset = croppedResponse.assets[0];
        const croppedUri = croppedAsset.uri;

        if (!croppedUri) {
          console.error("URI recortada no existe");
          return;
        }

        // Obtener el blob de la imagen recortada
        const fetchResponse = await fetch(croppedUri);
        console.log("Imagen recortada:", croppedUri);

        const blob = await fetchResponse.blob();
        console.log("Blob de la imagen:", blob);

        // Crear una referencia en Firebase Storage
        const storage = getStorage();
        const fileName = croppedAsset.fileName || `userPhoto_${Date.now()}.jpg`;
        const storageRef = ref(storage, `userPhoto/${fileName}`);
        console.log("Referencia de almacenamiento:", storageRef);

        if (auth.currentUser) {
          console.log("Usuario autenticado:", auth.currentUser);
          // Subir el blob
          await uploadBytes(storageRef, blob);
          console.log("Se ha subido la imagen correctamente");

          // Obtener la URL de descarga de la imagen subida
          const downloadURL = await getDownloadURL(storageRef);
          console.log("URL de descarga:", downloadURL);

          // Actualizar el perfil del usuario con la nueva foto
          try {
            // Update the user's profile with the new photo URL
            await updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            });
            console.log("Foto de perfil actualizada");

            DevSettings.reload();
            HomeScreen();
          } catch (error) {
            console.error("Error al actualizar la foto de perfil:", error);
          }
        } else {
          console.error("No hay un usuario autenticado.");
        }
      } catch (error) {
        console.error("Error al subir la imagen:", error);
      }
    } else {
      console.error("No se encontraron activos en la respuesta.");
    }
  };

  const deleteUsers = async () => {
    Alert.alert(
      "Confirmación",
      "¿Estás seguro de que quieres eliminar tu cuenta?, Se descargaran tus datos, y luego se eliminaran de nuestra base de datos.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            functionDelete();
          },
        },
      ],
      { cancelable: false },
    );
  };

  const functionDelete = async () => {
    if (auth.currentUser) {
      deleteUser(auth.currentUser).then(async () => {
        const response = await fetch(
          `${url}/deleteUser?userEmail=${userEmail}`,
          {
            method: "DELETE",
          },
        );
        if (response.status === 200) {
          Alert.alert("Exito", "Cuenta eliminada. Datos guardados.");
          await auth.signOut();
        } else {
          const errorMessage = await response.text();
          Alert.alert(
            "Error",
            `No se pudo eliminar la cuenta: ${errorMessage}`,
          );
        }
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const { UpdateEmailScreen, HomeScreen } = UserNavigation();

  return {
    displayName,
    userEmail,
    photoURL,
    userPhone,
    handleLogout,
    navigation,
    UpdateEmailScreen,
    updatePhoto,
    PhotoDefault,
    deleteUsers,
  };
};

export default hookDataUser;

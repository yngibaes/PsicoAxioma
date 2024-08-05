import { useEffect, useRef, useState } from 'react'
import { Linking } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera'




const hookOpenCamara = async () => {
    const camera = useRef<Camera>(null)
    const devices = useCameraDevices();
    const device = devices.find(device => device.position === 'front');

    const [showCamera, setShowCamera] = useState(false);
    const [imageSource, setImageSource] = useState('');

    useEffect(() => {
        async function getPermission() {
            const cameraPermission = await Camera.requestCameraPermission();
            console.log('Permiso de camara: ', cameraPermission);
            if (cameraPermission === 'denied') {
                await Linking.openSettings();
            }
        }
        getPermission();
    }, [])

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({});
            setImageSource(photo.path);
            setShowCamera(false);
            console.log('Foto tomada: ', photo.path);
        }
    }
    return { camera, device, showCamera, imageSource, capturePhoto, setShowCamera }
}

export default hookOpenCamara
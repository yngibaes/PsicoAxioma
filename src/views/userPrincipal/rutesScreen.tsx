import React from 'react';
import { View, ScrollView } from 'react-native'
import NavBar from '../../components/otherComponents/navBar';
import Card from '../../components/otherComponents/card';
import styles from './style/styleScreen';

// Definición del componente SignUp
const RoutesScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    {/* Renderiza aquí múltiples componentes Card con diferentes props */}
                    <Card
                        imageSource={require('../../assets/img/routesCall/linea106.png'
                        )}
                        cardTitle="Línea de Atención 106"
                        cardText="Atención, ayuda, intervención psicosocial y/o soporte en situaciones de crisis.
          Disponible las 24 horas del día, los 7 días de la semana."
                        phoneNumber="106"
                    />
                    <Card
                        imageSource={require('../../assets/img/routesCall/lineacalma.png')}
                        cardTitle="Línea Calma"
                        cardText="Espacio de escucha y asesoría para manejar situaciones emocionales como ansiedad, depresión,
          entre otros. Lunes a viernes de 7:00 a.m. a 10:30 p.m.,
          sábados 8:00 a.m. a 10:30 p.m. y domingos 2:00 p.m. a 10:30 p.m.."
                        phoneNumber="01 8000 423 614"
                    />
                    <Card
                        imageSource={require('../../assets/img/routesCall/lineapurpura.png')}
                        cardTitle="Línea Púrpura"
                        cardText="Atención psicológica gratuita las 24 horas del día, para mujeres víctimas de violencia."
                        phoneNumber=" 01 8000 112 137"
                    />
                    <Card
                        imageSource={require('../../assets/img/routesCall/linea192.png')}
                        cardTitle="Salud Mental - Opción 4"
                        cardText="Línea 192. Ofrece primeros auxilios psicológicos y orientación en salud mental. Lunes a viernes de 7:00 a.m. a 7:00 p.m."
                        phoneNumber="192"
                    />
                    <Card
                        imageSource={require('../../assets/img/routesCall/Lineapsico.png')}
                        cardTitle="Línea Psicoactiva"
                        cardText="Aborda el consumo de sustancias psicoactivas. Horario de atención: 8:00 a.m. a 12:00 p.m. y 2:00 p.m. a 5:30 p.m.."
                        phoneNumber="01 8000 112 439"
                    />
                    {/* Añade más cartas según sea necesario */}
                </View>
            </ScrollView>
            <NavBar />
        </View>
    );
}

export default RoutesScreen

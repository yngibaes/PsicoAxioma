import {ImageProps} from 'react-native';

export interface OnboardingData {
  id: number;
  imageSource: ImageProps;
  cardTitle: string;
  cardText: string;
  phoneNumber: string;
}

const path = '../assets/img/routesCall/';

// Data para las rutas de llamada de atención
const dataCall: OnboardingData[] = [
  {
    id: 1,
    imageSource: require(`${path}linea106.png`),
    cardTitle: 'Línea de Atención 106',
    cardText:
      'Atención de ayuda, intervención psicosocial y/o soporte en situaciones de crisis. Disponible las 24 horas del día, los 7 días de la semana.',
    phoneNumber: '106',
  },
  {
    id: 2,
    imageSource: require(`${path}/lineacalma.png`),
    cardTitle: 'Línea Calma',
    cardText:
      'Espacio de escucha y asesoría para manejar situaciones emocionales como ansiedad, depresión, entre otros. Lunes a viernes de 7:00 a.m. a 10:30 p.m, sábados 8:00 a.m a 10:30 p.m y domingos 2:00 p.m. a 10:30 p.m.',
    phoneNumber: '01 8000 423 614',
  },
  {
    id: 3,
    imageSource: require(`${path}/lineapurpura.png`),
    cardTitle: 'Línea Púrpura',
    cardText:
      'Atención psicológica gratuita las 24 horas del día para mujeres víctimas de violencia.',
    phoneNumber: '01 8000 112 137',
  },
  {
    id: 4,
    imageSource: require(`${path}/linea192.png`),
    cardTitle: 'Salud Mental - Opción 4',
    cardText:
      'Línea 192. Ofrece primeros auxilios psicológicos y orientación en salud mental. Lunes a viernes de 7:00 a.m. a 7:00 p.m.',
    phoneNumber: '192',
  },
  {
    id: 5,
    imageSource: require(`${path}/Lineapsico.png`),
    cardTitle: 'Línea Psicoactiva',
    cardText:
      'Aborda el consumo de sustancias psicoactivas. Horario de atención: 8:00 a.m a 12:00 p.m y 2:00 p.m a 5:30 p.m.',
    phoneNumber: '01 8000 112 439',
  },
];

export default dataCall;

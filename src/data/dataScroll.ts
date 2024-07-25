import { ImageProps } from 'react-native';


{/*En este apartado de la app se podra encontrar el tema de los slaider con sus respectivos ID esto puesto que el ID es el que se va a mostrar la tarjeta por orden,
   */}


export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../assets/img/call.png'),
    text: 'Bienvenido a PsicoAxioma',
    textColor: '#f8dac2',
    backgroundColor: '#6750A4', //Aca se le pude modificar los colores a cada componente de las paginas 
  },
  {
    id: 2,
    image: require('../assets/img/call.png'),
    text: 'Encontras las lineas de ayuda en salud mental',
    textColor: '#154f40',
    backgroundColor: '#031222',
  },
  {
    id: 3,
    image: require('../assets/img/diary.png'),
    text: 'Sientete con libertad de expresar lo que sientes en tu diario emocional',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
  {
    id: 4,
    image: require('../assets/img/recog.png'),
    text: 'Reconoce tu estado de animo mediante nuestra Inteligencia Artificial',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
];

export default data;
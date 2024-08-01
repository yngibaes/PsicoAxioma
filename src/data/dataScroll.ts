import { ImageProps } from 'react-native';


{/*En este apartado de la app se podra encontrar el tema de los slaider con sus respectivos ID esto puesto que el ID es el que se va a mostrar la tarjeta por orden,
   */}


export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
  margintop: number;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../assets/img/scroll/logo.png'),
    text: '¡Bienvenido a PsicoAxioma!',
    textColor: '#000',
    backgroundColor: '#cce8e8', //Aca se le pude modificar los colores a cada componente de las paginas 
    margintop: 55
  },
  {
    id: 2,
    image: require('../assets/img/scroll/call.jpg'),
    text: 'Encontrarás líneas de atención de salud mental',
    textColor: '#FFF',
    backgroundColor: '#458281',
    margintop: 30
  },
  {
    id: 3,
    image: require('../assets/img/scroll/diary.png'),
    text: 'Con tu diario emocional, podrás expresarte de cualquiera manera',
    textColor: 'black',
    backgroundColor: '#e0c7b4',
    margintop: 1
  },
  {
    id: 4,
    image: require('../assets/img/scroll/recognition.png'),
    text: 'Reconoce tu estado de ánimo con Inteligencia Artificial',
    textColor: '#000',
    backgroundColor: '#c1cde0',
    margintop: 20
  },
];

export default data;
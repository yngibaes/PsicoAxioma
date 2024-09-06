import { ImageProps } from "react-native";

//En este apartado de la app se podra encontrar el tema de los slaider con sus respectivos ID esto puesto que el ID es el que se va a mostrar la tarjeta por orden, la imagen que se va a mostrar, el texto que se va a mostrar, el color del texto, el color de fondo y el margen superior de la tarjeta

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const path = "../../views/assets/img/scroll/";
const textBlack = "#000";
const TextWhite = "#FFF";
const backgroundColor1 = "#cce8e8";
const backgroundColor2 = "#458281";
const backgroundColor3 = "#f8dac2";
const backgroundColor4 = "#c1cde0";

const data: OnboardingData[] = [
  {
    id: 1,
    image: require(`${path}logo.png`),
    text: "¡Bienvenido a PsicoAxioma!",
    textColor: textBlack,
    backgroundColor: backgroundColor1, //Aca se le pude modificar los colores a cada componente de las paginas
  },
  {
    id: 2,
    image: require(`${path}/call.jpg`),
    text: "Encontrarás líneas de atención de salud mental",
    textColor: TextWhite,
    backgroundColor: backgroundColor2,
  },
  {
    id: 3,
    image: require(`${path}/diary.png`),
    text: "Con tu diario emocional, podrás expresarte de cualquiera manera",
    textColor: textBlack,
    backgroundColor: backgroundColor3,
  },
  {
    id: 4,
    image: require(`${path}/recognition.png`),
    text: "Reconoce tu estado de ánimo con Inteligencia Artificial",
    textColor: textBlack,
    backgroundColor: backgroundColor4,
  },
];

export default data;

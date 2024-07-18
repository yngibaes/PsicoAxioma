/* eslint-disable react-native/sort-styles */
import * as React from 'react'
import { Text, TextInput, View, Button, Alert, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import styles from './style/styleFormSignUp' // Ajusta la ruta según tu estructura de archivos
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    userName: yup
        .string()
        .required('Requerido')
        .min(2, 'Must have at least 2 characters'),
    userEmail: yup
        .string()
        .email('Ingrese un email válido')
        .required('Email requerido'),
    userPhone: yup
        .string()
        .max(10, 'El télefono debe tener 10 carácteres').required('Requerido'),
    userPassword: yup
        .string()
        .min(6, 'Muy corta!')
        .required('Requerido'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('userPassword')], 'Las contraseñas no coinciden')
        .required('Requerido'),
    agreeToTermsAndConditions: yup
		.boolean()
		.label('Términos y condiciones')
		.test('is-true', 'Debes estar de acuerdo', value => value === true)

});

// Definición del componente FormSignUp

const FormSignUp = () => {
    return(
        <Formik 
            initialValues={{
                userName: '',
                userEmail: '',
                userPhone: '',
                userPassword: '',
                confirmPassword: '',
                agreeToTermsAndConditions: false
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                console.log(`Nombre: ${values.userName}, Télefono: ${values.userPhone}, Email: ${values.userEmail}, Contraseña: ${values.userPassword}`)
              }}>
           {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{marginTop: "30%"}}>
                    <TextInput
                    placeholder='ola'
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                    />
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Text>ola</Text>
                    </TouchableOpacity>
                </View>
     )}

        </Formik>
    )
}

export default FormSignUp
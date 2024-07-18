/* eslint-disable react-native/sort-styles */
import * as React from 'react'
import { Text, TextInput, View, Pressable, Alert } from 'react-native'
import { Formik } from 'formik';
import styles from './style/styleFormSignUp' // Ajusta la ruta según tu estructura de archivos
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required('Requerido').min(2, 'Must have at least 2 characters'),
  userEmail: Yup.string().email('Ingrese un email válido').required('Email requerido'),
  userPhone: Yup.string().max(10, 'El télefono debe tener 10 carácteres').required('Requerido'),
  userPassword: Yup.string().min(6, 'Muy corta!').required('Requerido'),
  confirmPassword: Yup.string().oneOf([Yup.ref('userPassword')], 'Las contraseñas no coinciden').required('Requerido'),
});

// Definición del componente FormSignUp
const FormSignUp = () => {
  return (
    <Formik
      initialValues={{
        userName: '',
        userEmail: '',
        userPhone: '',
        userPassword: '',
        confirmPassword: '',
      }}
      
      validationSchema={SignupSchema}

      onSubmit={(values) => {
        Alert.alert(`Nombre: ${values.userName}, Télefono: ${values.userPhone}, Email: ${values.userEmail}, Contraseña: ${values.userPassword}`)
      }} // eslint-disable-line no-alert
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.parentForm}>
          <View style={styles.parentInput}>
            <View style={styles.divInput}>
              <Text style={styles.labelForm}>Nombre</Text>
              <View style={[styles.sizeInput, styles.Input]}>
                <TextInput
                  style={styles.label}
                  placeholder="Escriba su nombre"
                  keyboardType="default"
                  placeholderTextColor="#828282"
                  inputMode="text"
                  data-name="userName"
                  autoCapitalize='none'
                  keyboardAppearance='dark'
                  returnKeyType='go'
                  returnKeyLabel='go'
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  errorMessage = 
                />
                {(errors.userName && touched.userName) &&
                  <Text style={styles.errorText}>{errors.userName}</Text>
                }
              </View>
            </View>
            <View style={styles.divInput}>
              <Text style={styles.labelForm}>Email</Text>
              <View style={[styles.sizeInput, styles.Input]}>
                <TextInput
                  style={styles.label}
                  placeholder="Escriba su email"
                  keyboardType="email-address"
                  placeholderTextColor="#828282"
                  inputMode="email"
                  data-name="userEmail"
                  autoCapitalize='none'
                  keyboardAppearance='dark'
                  returnKeyType='go'
                  returnKeyLabel='go'
                  value={values.userEmail}
                  onChangeText={handleChange('userEmail')}
                  onBlur={handleBlur('userEmail')}
                />
              </View>
            </View>
            <View style={styles.divInput}>
              <Text style={styles.labelForm}>Télefono</Text>
              <View style={[styles.sizeInput, styles.Input]}>
                <TextInput
                  style={styles.label}
                  placeholder="Escriba su número de télefono"
                  keyboardType="numeric"
                  placeholderTextColor="#828282"
                  inputMode="numeric"
                  data-name="userPhone"
                  value={values.userPhone}
                  onChangeText={handleChange('userPhone')}
                  onBlur={handleBlur('userPhone')}
                />
              </View>
            </View>
            <View style={styles.divInput}>
              <Text style={styles.labelForm}>Contraseña</Text>
              <View style={[styles.sizeInput, styles.Input]}>
                <TextInput
                  style={styles.label}
                  placeholder="Escriba su contraseña"
                  keyboardType="default"
                  secureTextEntry
                  placeholderTextColor="#828282"
                  inputMode="text"
                  data-name="userPassword"
                  value={values.userPassword}
                  onChangeText={handleChange('userPassword')}
                  onBlur={handleBlur('userPassword')}
                  error
                />
              </View>
            </View>
            <View style={styles.divInput}>
              <Text style={styles.labelForm}>Repetir contraseña</Text>
              <View style={[styles.sizeInput, styles.Input]}>
                <TextInput
                  style={styles.label}
                  placeholder="Repita su contraseña"
                  keyboardType="default"
                  secureTextEntry
                  placeholderTextColor="#828282"
                  inputMode="text"
                  data-name="confirmPassword"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
              </View>
            </View>
            <View style={styles.divButton}>
              <Pressable style={[styles.parentButton]} onPress={() => {handleSubmit()}} isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}>
                <Text style={[ styles.button, styles.title]}>
                  Enviar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default FormSignUp
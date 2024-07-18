/* eslint-disable react-native/sort-styles */
import * as React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Formik, ErrorMessage } from 'formik';
import styles from './style/styleFormSignUp' // Ajusta la ruta según tu estructura de archivos

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  userEmail: Yup.string().email('Invalid email').required('Required'),
  userPhone: Yup.string().required('Required'),
  userPassword: Yup.string().min(6, 'Too Short!').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('userPassword')], 'Passwords must match').required('Required'),
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
        console.log(values);
      }} // eslint-disable-line no-alert
    >
      {({ handleChange, handleBlur, values }) => (
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
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                />
                <ErrorMessage name="userName" component={Text} />
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
          </View>
        </View>
      )}
    </Formik>
  )
}



export default FormSignUp

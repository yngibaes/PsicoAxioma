import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';

export default function Calendary() {
  const today = new Date();
  const startDate = getFormatedDate(new Date(today.setDate(today.getDate() + 1)), 'yyyy-MM-dd');

  const [open, setOpen] = useState(false); // open and closes the modal
  const [date, setDate] = useState('12/12/2024'); // date variable

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate: string) {
    setDate(propDate);
    setOpen(!open);
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <DatePicker
            mode="calendar"
            minimumDate={startDate}
            selected={date}
            onDateChange={handleChange}
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '200%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
    height: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

});
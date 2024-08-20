/* import React, { useState } from "react";
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

}); */

import React from "react";
import { Calendar } from 'react-native-calendars';
import { View } from "react-native";
import { Direction } from "react-native-calendars/src/types";
import Ionicons from 'react-native-vector-icons/Ionicons';




const Calendary = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Calendar
        style={{ width: '100%', height: '100%' }}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2023-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2030-12-31'}
        // Handler which gets executed on day press. Default = undefined

        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction: Direction) => direction === 'left' ?  <Ionicons name='caret-back-outline' size={27} color='#000' /> :  <Ionicons name='caret-forward-outline' size={27} color='#000' />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={0}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        markedDates={{
          
        }}
        displayLoadingIndicator={true}
      />
    </View>
  );
};

export default Calendary;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: 'purple'
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2'
  }
});
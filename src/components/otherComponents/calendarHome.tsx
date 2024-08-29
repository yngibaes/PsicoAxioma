import React from 'react';
import {Calendar} from 'react-native-calendars';
import {Direction} from 'react-native-calendars/src/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style/styleCalendar';

const CalendarHome = () => {
  return (
    <Calendar
      style={styles.calendar}
      minDate={'2023-01-01'}
      maxDate={'2030-12-31'}
      hideExtraDays
      firstDay={0}
      monthFormat={'MMMM yyyy'}
      renderArrow={(direction: Direction) =>
        direction === 'left' ? (
          <Ionicons name="caret-back-outline" size={27} color="#000" />
        ) : (
          <Ionicons name="caret-forward-outline" size={27} color="#000" />
        )
      }
      disableMonthChange={true}
      enableSwipeMonths={true}
      markedDates={{}}
    />
  );
};

export default CalendarHome;

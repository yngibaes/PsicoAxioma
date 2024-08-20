/* /* import React, { useState } from "react";
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

/* import React from "react";
import { CalendarList } from 'react-native-calendars';
import styles from './style/styleCalendary';

const initialDate = new Date().toISOString().split('T')[0];
const RANGE = 12;

const Calendary = () => {
  return (
    <CalendarList
      current={initialDate}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      renderHeader={!horizontalView ? renderCustomHeader : undefined}
      calendarHeight={!horizontalView ? 390 : undefined}
      theme={!horizontalView ? theme : undefined}
      horizontal={horizontalView}
      pagingEnabled={horizontalView}
      staticHeader={horizontalView}
    />
  );
};

export default Calendary;


import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { CalendarList } from 'react-native-calendars';
import styles from './style/styleCalendarHome';

const Calendary = () => {
  const [horizontalView, setHorizontalView] = useState(false);

  const toggleView = () => {
    setHorizontalView(!horizontalView);
  };

  const renderCustomHeader = (date: any) => {
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    const year = new Date(date).getFullYear();
    return (
      <View>
        <Text>{`${month} ${year}`}</Text>
      </View>
    );
  };

  const theme = {
    stylesheet: {
      calendar: {
        header: {
          dayHeader: {
            fontWeight: '600',
            color: '#48BFE3'
          }
        }
      }
    },
    'stylesheet.day.basic': {
      today: {
        borderColor: '#48BFE3',
        borderWidth: 0.8
      },
      todayText: {
        color: '#5390D9',
        fontWeight: '800'
      }
    }

  };

  const initialDate = new Date().toISOString().split('T')[0];
  const RANGE = 12;


  return (
    <View>
      <Button title="Toggle View" onPress={toggleView} />
      <CalendarList
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        renderHeader={!horizontalView ? renderCustomHeader : undefined}
        calendarHeight={!horizontalView ? 390 : undefined}
        theme={!horizontalView ? theme : undefined}
        horizontal={horizontalView}
        pagingEnabled={horizontalView}
        staticHeader={horizontalView}
      />
    </View>
  );
};

export default Calendary; */

import React, {useCallback} from "react";
import { CalendarProvider, ExpandableCalendar, AgendaList } from 'react-native-calendars';
import styles from './style/styleCalendar';
import { agendaItems } from './agendaItem';
import AgentaItem from "./AgentaItem";

const ITEMS: any[] = agendaItems;

const Calendary = () => {

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({ item }: any) => {
    return <AgentaItem item={item} />;
  }, []);

  return (
    <CalendarProvider date={new Date().toISOString().split('T')[0]} style={styles.calendary}>
      <ExpandableCalendar
        // horizontal={false}
        // hideArrows
        // disablePan
        // hideKnob
        initialPosition={ExpandableCalendar.positions.OPEN}
        // calendarStyle={styles.calendar}
        // headerStyle={styles.header} // for horizontal only
        // disableWeekScroll
        // disableAllTouchEventsForDisabledDays
        firstDay={1}
        
        // closeOnDayPress={false} 
        animateScroll
      />
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
       dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
  );
};

export default Calendary;


import React from "react";
import {
  CalendarProvider,
  ExpandableCalendar,
  AgendaList,
} from "react-native-calendars";
import styles from "./style/styleCalendar";
import AgendaItem from "./deletebutnotyet/AgentaItem";
import hooksCalendar from "../../../controller/hooks/userPrincipal/hookCalendars";

const Calendary = () => {
  const { combinedResults } = hooksCalendar();

  // Transformar combinedResults en el formato esperado por AgendaList
  const ITEMS = combinedResults.length > 0 ? combinedResults.reduce((acc: any[], result: any) => {
    const dateIndex = acc.findIndex((item) => item.title === result.date);
    if (dateIndex >= 0) {
      acc[dateIndex].data.push(result);
    } else {
      acc.push({ title: result.date, data: [result] });
    }
    return acc;
  }, []) : [{ title: 'No Data', data: [] }];

  return (
    <CalendarProvider
      date={new Date().toISOString().split("T")[0]}
      style={styles.calendary}
    >
      <ExpandableCalendar
        initialPosition={ExpandableCalendar.positions.OPEN}
        firstDay={1}
        animateScroll
      />
      <AgendaList
        sections={ITEMS}
        renderItem={({ item }) => <AgendaItem item={item} />}
        scrollToNextEvent
        sectionStyle={styles.section}
        dayFormat={"yyyy-MM-d"}
      />
    </CalendarProvider>
  );
};

export default Calendary;
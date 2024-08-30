import React, { useCallback } from "react";
import {
  CalendarProvider,
  ExpandableCalendar,
  AgendaList,
} from "react-native-calendars";
import styles from "./style/styleCalendar";
import { agendaItems } from "./deletebutnotyet/agendaItem";
import AgentaItem from "./deletebutnotyet/AgentaItem";

const ITEMS: any[] = agendaItems;

const Calendary = () => {
  const renderItem = useCallback(({ item }: any) => {
    return <AgentaItem item={item} />;
  }, []);

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
        renderItem={renderItem}
        scrollToNextEvent
        sectionStyle={styles.section}
        dayFormat={"yyyy-MM-d"}
      />
    </CalendarProvider>
  );
};

export default Calendary;

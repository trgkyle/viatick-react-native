import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {Portal, Modal} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {DateData, MarkedDates} from 'react-native-calendars/src/types';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import Icon from 'react-native-vector-icons/Ionicons';
const DateRangePicker = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [range, setRange] = useState<MarkedDates>({});

  const onDayPress = (day: DateData) => {
    if (Object.keys(range).length === 2) {
      // If we already have a range selected, reset it and start over
      setRange({
        [day.dateString]: {
          selected: true,
          marked: true,
          selectedColor: '#DB3B26',
        },
      });
    } else if (Object.keys(range).length === 1) {
      // If we have one day selected, select the range
      const start = Object.keys(range)[0];
      const end = day.dateString;
      const rangeDates: {
        [key: string]: MarkingProps;
      } = {};

      // Generate an object with all the dates in the range
      for (
        let d = new Date(start);
        d <= new Date(end);
        d.setDate(d.getDate() + 1)
      ) {
        const date = new Date(d).toISOString().split('T')[0];
        rangeDates[date] = {
          selected: true,
          marked:
            d.toDateString() === new Date(start).toDateString() ||
            d.toDateString() === new Date(end).toDateString()
              ? true
              : false,
          selectedColor: '#DB3B26',
        };
      }

      // Update the range state with the selected dates
      setRange(rangeDates);
    } else {
      // If we have no dates selected, select the starting day of the range
      setRange({
        [day.dateString]: {
          selected: true,
          marked: true,
          selectedColor: '#DB3B26',
        },
      });
    }
  };

  const onCancel = () => {
    setVisible(false);
    setRange({});
  };

  const onConfirm = () => {
    setVisible(false);
    // Do something with the selected range
  };

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.button}>
          <Text style={styles.buttonSelectText}>Select Date</Text>
          <View style={styles.buttonContent}>
            <Icon name="calendar-sharp" size={25} color={'#000'} />
            <Text style={styles.buttonText}>Today</Text>
            <Icon name="chevron-down" size={25} color={'#000'} />
          </View>
        </View>
      </TouchableOpacity>
      <Portal>
        <Modal visible={visible} onDismiss={onCancel}>
          <View style={styles.modal}>
            <Calendar
              current={new Date().toISOString()}
              markedDates={range}
              onDayPress={onDayPress}
              style={styles.calendar}
            />
            <View style={styles.footer}>
              <TouchableOpacity onPress={onCancel}>
                <Text style={styles.footerButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onConfirm}>
                <Text style={styles.footerButton}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 20,
    height: 60,
    backgroundColor: '#FFFEFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'column',
  },
  buttonSelectText: {
    color: '#212022',
    fontWeight: 'bold',
    fontSize: 12,
  },
  buttonText: {
    color: '#DB3B26',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContent: {
    width: '100%',
    marginTop: -20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerButton: {
    color: '#DB3B26',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default DateRangePicker;

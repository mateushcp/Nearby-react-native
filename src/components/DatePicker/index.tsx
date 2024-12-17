import {Text, TextInput, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {styles} from './styles';
import {useState} from 'react';
import {formatDate} from '../../utils';

interface DatePickerProps {
  label: string;
  value: string;
  setValue: any;
  customStyles?: any;
}

const DatePicker = ({
  label,
  value,
  setValue,
  customStyles,
}: DatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleDatePicker = () => setDatePickerVisibility(prev => !prev);

  const handleConfirm = (date: any) => {
    setValue(formatDate(date));
    toggleDatePicker();
  };
  return (
    <View style={[styles.container, customStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={value}
        placeholder="DD/MM/AAAA"
        onPress={toggleDatePicker}
        readOnly
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={toggleDatePicker}
      />
    </View>
  );
};

export default DatePicker;

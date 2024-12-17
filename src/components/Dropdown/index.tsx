import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {styles} from './styles';
import {useState} from 'react';
import {Dimensions} from 'react-native';

interface DropdownProps {
  label: string;
  selectedOption?: any;
  options: any;
  onSelect: (option: any) => void;
  customStyles?: any;
}

const Dropdown = ({
  label,
  selectedOption,
  options,
  onSelect,
  customStyles,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const heightScreen = Dimensions.get(`screen`).height;

  const toggleOpen = () => setIsOpen(prev => !prev);

  const handleSelect = (option: any) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, customStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={toggleOpen}
        style={styles.dropdown}
        disabled={options && options.length === 0}>
        <Text>{selectedOption ? selectedOption.value : label}</Text>
        <MaterialIcons
          style={styles.icon}
          name={isOpen ? 'expand-less' : 'expand-more'}
        />
      </TouchableOpacity>
      <Modal animationType="fade" visible={isOpen} transparent>
        <View style={[styles.options, {height: heightScreen}]}>
          <ScrollView style={styles.optionsWrapper}>
            {options &&
              options.length > 0 &&
              options.map((option: any) => (
                <TouchableOpacity
                  onPress={() => handleSelect(option)}
                  style={styles.optionItem}
                  key={option.id}>
                  <Text>{option.value}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;

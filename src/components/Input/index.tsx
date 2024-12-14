import React, {useState} from 'react';
import {
  TextInput,
  KeyboardType,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {extract, apply, MaskType} from './utils';
import {styles} from './styles';

export interface InputProps {
  value: string;
  mask?: MaskType;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardType;
  label?: string;
  actionCallback?: () => void;
  actionIcon?: any;
  onBlur?: () => void;
  errorMsg?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input = ({
  value,
  mask,
  onChangeText,
  keyboardType,
  label,
  actionCallback,
  actionIcon,
  onBlur,
  errorMsg,
  placeholder,
  secureTextEntry,
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const getValue = () => apply(value, mask);

  const _onChangeText = (text: string) => {
    onChangeText(extract(text, mask));
  };

  const renderAction = () => {
    if (actionIcon && actionCallback) {
      return (
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.actionStyle}
          onPress={actionCallback}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <MaterialIcons name={actionIcon} style={styles.actionIcon} />
        </TouchableOpacity>
      );
    }
  };

  const renderError = () => <Text style={styles.errorMsg}>{errorMsg}</Text>;

  const handleBlur = () => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, focused && styles.inputFocus]}
        autoCapitalize="none"
        value={getValue()}
        onChangeText={_onChangeText}
        keyboardType={keyboardType}
        placeholder={focused ? '' : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
      />
      {renderError()}
      {renderAction()}
    </View>
  );
};

export default Input;

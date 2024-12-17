import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {COLOR} from '../../theme/constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  iconName?: any;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {iconName && <MaterialIcons name={iconName} style={styles.icon} />}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.black,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    height: 56,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    color: COLOR.white,
    fontSize: 20,
    marginLeft: 8,
  },
});

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../theme/constants';
import {DatePicker, Dropdown} from '../components';
import {useNavigation} from '@react-navigation/native';

const options = [
  {id: 'belohorizonte', value: 'Belo Horizonte'},
  {id: 'lagoasanta', value: 'Lagoa Santa'},
  {id: 'riodejaneiro', value: 'Rio de Janeiro'},
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [date, setDate] = useState('');

  const logoff = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <View style={styles.wrapper}>
          {/* Imagem do Usuário ou Ícone */}
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: COLOR.greyLight,
              borderRadius: 50,
            }}
          />
          <MaterialIcons onPress={logoff} name="logout" size={24} />
        </View>
        <Text style={styles.welcome}>Boas vindas</Text>
        <Text style={styles.username}>Júlio Santana</Text>
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.heading}>Seus Vídeos</Text>
        <View style={styles.addressRow}>
          <Dropdown
            label="Cidade"
            selectedOption={city}
            onSelect={setCity}
            options={options}
          />
          <Dropdown
            label="Estado"
            selectedOption={state}
            onSelect={setState}
            options={options}
          />
        </View>
        <View style={styles.addressRow}>
          <Dropdown
            label="Quadra"
            selectedOption={city}
            onSelect={setCity}
            options={options}
          />
          <Dropdown
            label="Arena"
            selectedOption={state}
            onSelect={setState}
            options={options}
          />
        </View>
        <View style={styles.addressRow}>
          <DatePicker label="Data" value={date} setValue={setDate} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.orange,
  },
  userWrapper: {
    backgroundColor: COLOR.orange,
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    color: COLOR.offWhite,
    fontSize: 16,
    marginTop: 8,
  },
  username: {
    color: COLOR.offWhite,
    fontSize: 20,
  },
  bottomSheet: {
    backgroundColor: COLOR.offWhite,
    flex: 2.5,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
  },
  heading: {
    fontSize: FONT_SIZE.heading,
    fontFamily: FONT_FAMILY.bold,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  addressRow: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});

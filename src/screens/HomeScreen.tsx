import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../theme/constants';
import {Button, DatePicker, Dropdown} from '../components';
import {useNavigation} from '@react-navigation/native';
import {useGetArena} from '../services';
import {convertToArenaOptions, convertToCourtOptions} from '../utils';

const optionsCity = [
  {id: 'belohorizonte', value: 'Belo Horizonte'},
  {id: 'lagoasanta', value: 'Lagoa Santa'},
];

const optionsState = [{id: 'mg', value: 'Minas Gerais'}];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState(optionsCity[0]);
  const [state, setState] = useState(optionsState[0]);
  const [arena, setArena] = useState();
  const [court, setCourt] = useState();
  const [date, setDate] = useState('');
  const [arenaOptions, setArenaOptions] = useState<any>();
  const [courtOptions, setCourtOptions] = useState<any>();

  const logoff = () => {
    navigation.navigate('SignIn');
  };

  const {data: dataArena} = useGetArena(city.value);

  useEffect(() => {
    if (dataArena && dataArena.length > 0) {
      setArenaOptions(convertToArenaOptions(dataArena));
    } else {
      setArenaOptions([]);
      setCourtOptions([]);
    }
  }, [dataArena]);

  useEffect(() => {
    if (arena) {
      const convertedCourts = convertToCourtOptions(arena);
      setCourt(convertedCourts[0]);
      setCourtOptions(convertedCourts);
    }
  }, [arena]);

  useEffect(() => {
    setArena(undefined);
    setCourt(undefined);
  }, [city]);

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
            options={optionsCity}
          />
          <Dropdown
            label="Estado"
            selectedOption={state}
            onSelect={setState}
            options={optionsState}
          />
        </View>
        <View style={styles.addressRow}>
          <Dropdown
            label="Quadra"
            selectedOption={arena}
            onSelect={setArena}
            options={arenaOptions}
          />
          <Dropdown
            label="Arena"
            selectedOption={court}
            onSelect={setCourt}
            options={courtOptions}
          />
        </View>
        <View style={styles.addressRow}>
          <DatePicker label="Data" value={date} setValue={setDate} />
        </View>
        <View style={styles.searchRow}>
          <Button
            title="Buscar vídeos"
            onPress={() => navigation.navigate('Video', {arena})}
            iconName="play-circle"
          />
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
  searchRow: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});

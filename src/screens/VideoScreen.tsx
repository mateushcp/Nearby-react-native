import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../theme/constants';
import {Button, DatePicker, Dropdown} from '../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const VideoScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const [arena, setArena] = useState();
  const [court, setCourt] = useState();
  const [date, setDate] = useState('');

  useEffect(() => {
    if (route && route.params) setArena(route.params.arena);
  }, [route]);

  console.log('ROUTE', route);

  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={32} />
        </TouchableOpacity>
        <Text style={styles.heading}>Seus Vídeos</Text>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.bottomSheet}>
          <Dropdown
            label="Quadra"
            selectedOption={arena}
            onSelect={setArena}
            options={[]}
            customStyles={{paddingVertical: 4}}
          />
          <Dropdown
            label="Arena"
            selectedOption={court}
            onSelect={setCourt}
            options={[]}
            customStyles={{paddingVertical: 4}}
          />
          <DatePicker
            label="Data"
            value={date}
            setValue={setDate}
            customStyles={{paddingVertical: 4}}
          />
          <Button
            title="Buscar vídeos"
            onPress={() => {}}
            iconName="play-circle"
          />
        </View>
        {[...Array(50)].map((_, index) => (
          <Text key={index}>Item {index + 1}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.greyLighter,
  },
  headingRow: {
    flexDirection: 'row',
    backgroundColor: COLOR.offWhite,
    paddingTop: 24,
    paddingBottom: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  bottomSheet: {
    backgroundColor: COLOR.offWhite,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  heading: {
    fontSize: FONT_SIZE.heading,
    fontFamily: FONT_FAMILY.bold,
    paddingLeft: 12,
  },
});

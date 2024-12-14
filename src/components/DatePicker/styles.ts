import {StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorMsg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -30,
    color: COLOR.red,
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.bold,
    textAlign: 'left',
  },
  label: {
    marginBottom: 4,
    fontSize: FONT_SIZE.large,
    color: COLOR.black,
  },
  input: {
    color: COLOR.black,
    fontSize: FONT_SIZE.medium,
    borderColor: COLOR.greyLight,
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  inputFocus: {
    borderWidth: 1,
    borderColor: COLOR.grey,
  },
  actionStyle: {
    width: 32,
    height: 32,
    bottom: 26,
    right: 12,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  actionIcon: {
    color: COLOR.orange,
    fontSize: 28,
  },
});

import {StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  label: {
    fontSize: FONT_SIZE.large,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.black,
    marginBottom: 4,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR.greyLight,
    padding: 16,
  },
  icon: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    fontSize: 32,
    color: COLOR.black,
  },
  options: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  },
  optionsWrapper: {
    position: 'absolute',
    width: '100%',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: COLOR.offWhite,
    padding: 16,
    bottom: 0,
  },
  optionItem: {
    padding: 16,
  },
});

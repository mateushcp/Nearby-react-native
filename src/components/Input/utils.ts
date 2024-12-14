import StringMask from 'string-mask';

export type MaskType = 'phone' | 'birth';

export const apply = (value: string, mask?: MaskType) =>
  call('apply', value, mask);

export const extract = (value: string, mask?: MaskType) =>
  call('extract', value, mask);

interface MaskObject {
  [key: string]: (txt: string) => string;
}

const masks: MaskObject = {};

const call = (method: string, value: string, mask?: MaskType) => {
  if (!mask) {
    return value;
  }

  const nameProperty =
    method + mask.charAt(0).toUpperCase().concat(mask.slice(1).toLowerCase());

  return nameProperty in masks ? masks[nameProperty](value) : value;
};

masks.applyPhone = (value = '') => {
  const formattedValue = new StringMask('(00) 00000-0000');

  return formattedValue.apply(value).replace(/[^0-9]+$/, '');
};

masks.extractPhone = (value = '') => {
  const formattedValue = value.replace(/[^0-9]/g, '');
  return formattedValue.substring(0, 11);
};

masks.applyBirth = (value = '') => {
  const formattedValue = new StringMask('00/00/0000');
  return formattedValue.apply(value).replace(/[^0-9]+$/, '');
};

masks.extractBirth = (value = '') => {
  const formattedValue = value.replace(/[^0-9]/g, '');
  return formattedValue.substring(0, 8);
};

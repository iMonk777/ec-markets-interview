import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { RADIUS_XSMALL, SPACE_MEDIUM, SPACE_SMALL } from '../constants/layout';
import CheckIcon from './../assets/check-icon.png'
import { DARK_BLUE } from '../constants/colors';

interface Props {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

const CheckboxOption: FC<Props> = ({ label, checked, onToggle }) => {
  return (
    <Pressable
      onPress={onToggle}
      style={styles.container}
      hitSlop={{ top: SPACE_SMALL, bottom: SPACE_SMALL, left: SPACE_SMALL, right: SPACE_SMALL }}
    >
      <View
        style={[styles.box, checked && styles.checked]}
      >
        {checked && (
          <Image
            style={styles.checkIcon}
            source={CheckIcon}
          />
        )}
      </View>
      <Text>{label}</Text>
    </Pressable>
  )
}

export default CheckboxOption

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACE_SMALL
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: RADIUS_XSMALL,
    borderColor: DARK_BLUE,
    marginRight: SPACE_MEDIUM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: DARK_BLUE,
  },
  checkIcon: {
    height: 12,
    width: 12,
  },
  label: {
    marginLeft: SPACE_MEDIUM,
  }
})
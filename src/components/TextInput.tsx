import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {TextInput} from 'react-native-paper'
import colors from '../styles/colors'

interface ICTextInput {
  label: string
  value: string
  onChangeText: (text: string) => void
  borderColor?: string
  mode?: 'flat' | 'outlined'
  theme?: {
    colors: {
      primary: string
    }
  }
}

const CustomTextInput: React.FC<ICTextInput> = ({
  label,
  value,
  onChangeText,
  borderColor,
  mode,
}) => {
  return (
    <TextInput
      mode={mode ? mode : 'outlined'}
      label={label}
      value={value}
      onChangeText={onChangeText}
      theme={{colors: {primary: borderColor ? borderColor : colors.blue}}}
      style={styles.mainContainer}
    />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 8,
  },
})

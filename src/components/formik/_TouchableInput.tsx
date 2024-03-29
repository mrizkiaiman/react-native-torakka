import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {useFormikContext} from 'formik'
import {IPTextInput} from '@components/_TextInput'

import {TouchableInput} from '@app/components'
import ErrorMessage from '@app/components/Formik/_ErrorMessage'

export interface IPFormikInput extends IPTextInput {
  name: string
  onPress: () => void
  customValueDisplay?: boolean
}

export default ({name, onPress, customValueDisplay, ...props}: IPFormikInput) => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <TouchableInput
        onPress={onPress}
        {...props}
        onChangeText={value => setFieldValue(name, value)}
        value={customValueDisplay ? values[`${name}ForDisplay`] : values[name]}
      />
      <ErrorMessage visible={touched[name]} text={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})

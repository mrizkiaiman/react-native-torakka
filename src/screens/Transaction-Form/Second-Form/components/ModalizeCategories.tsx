import React from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

import { useCategories } from '@app/services/master/hooks/useCategories'
import { IProps } from '@app/constants/types/_common'
import { COLORS, SCREEN_SIZE } from '@styles/vars'
import { useFormikContext } from 'formik'

import { Text, Button, Loader } from '@components/index'
import { SvgUri } from 'react-native-svg'

interface IPModalizeCategories extends IProps {
  onOpen?: () => void
  onClose?: () => void
  name: string
}

export const ModalizeCategories: React.FunctionComponent<IPModalizeCategories> = props => {
  const { setFieldValue, values, errors, touched, handleSubmit } = useFormikContext<any>()
  const { onOpen, onClose, name } = props

  const { data, isFetching } = useCategories()

  const onSelect = (value: string, valueForDisplay: string) => {
    setTimeout(() => {
      setFieldValue(name, value)
      setFieldValue(`${name}ForDisplay`, valueForDisplay)
    }, 1000)
    onClose && onClose()
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <Loader loading={isFetching} />
        {data?.response.map((category, index) => (
          <TouchableOpacity
            onPress={() => onSelect(category?._id, category?.name)}
            key={category?._id}
            style={[styles.category, values[name] === category?._id && styles.selectedCategory]}>
            <SvgUri width="40" height="40" uri={category?.img || ''} />
            <Text
              type={values[name] === category?._id ? 'bold' : 'default'}
              style={[styles.categoryText, values[name] === category?._id && styles.selectedCategoryText]}>
              {category?.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Submit" />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 32,
    justifyContent: 'center',
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 20,
  },
  selectedCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    marginVertical: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 11,
    marginTop: 12,
    color: COLORS.gray,
  },
  selectedCategoryText: {
    fontSize: 11,
    marginTop: 12,
    color: COLORS.primary,
  },
  submitButton: {
    zIndex: 100,
    position: 'absolute',
    justifyContent: 'flex-end',
    height: '100%',
  },
})

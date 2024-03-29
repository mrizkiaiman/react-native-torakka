import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {AppStackParamList} from '@app/screens/_navigation/types/_params'

import BottomTabs from './bottom-tabs'
import {FirstTransactionForm} from '@app/screens/Transaction-Form/First-Form'
import {SecondTransactionForm} from '@app/screens/Transaction-Form/Second-Form'
import AccountForm from '@app/screens/Account-Form'

const AppStack: React.FunctionComponent = () => {
  const Stack = createStackNavigator<AppStackParamList>()
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={'BOTTOM_TAB'}>
      <Stack.Screen name={'BOTTOM_TAB'} component={BottomTabs} />
      <Stack.Screen name={'TRANSACTION_FORM_FIRST'} component={FirstTransactionForm} />
      <Stack.Screen name={'TRANSACTION_FORM_SECOND'} component={SecondTransactionForm} />
      <Stack.Screen name={'ACCOUNT_FORM'} component={AccountForm} />
    </Stack.Navigator>
  )
}

export default AppStack

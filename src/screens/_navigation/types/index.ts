import {NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack'
import {AuthStackParamList, BottomTabParamList, AppStackParamList} from '@app/screens/_navigation/types/_params'

export type SignInProps = NativeStackScreenProps<AuthStackParamList, 'SIGN_IN'>
export type SignUpProps = NativeStackScreenProps<AuthStackParamList, 'SIGN_UP'>

export type BottomTabProps = NativeStackScreenProps<AppStackParamList, 'BOTTOM_TAB'>
export type BottomTabsComponentProps = NativeStackNavigationProp<AppStackParamList, 'BOTTOM_TAB'>

export type FirstTransactionFormProps = NativeStackScreenProps<AppStackParamList, 'TRANSACTION_FORM_FIRST'>
export type SecondTransactionFormProps = NativeStackScreenProps<AppStackParamList, 'TRANSACTION_FORM_SECOND'>
export type AccountFormProps = NativeStackScreenProps<AppStackParamList, 'ACCOUNT_FORM'>

import {IStdEntity, IOption} from '@app/constants/types/_common/index'

const formatOption = (item: IStdEntity): IOption => ({
  value: item._id,
  label: item.name,
})

export const optionsFormatter = (data: any[]) => {
  return data.map(formatOption)
}
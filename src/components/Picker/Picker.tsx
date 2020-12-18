import React, { FC } from 'react'
import { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import { StyledDatePicker } from './Picker.styled'

registerLocale('ru', ru)

export const Picker: FC<ReactDatePickerProps> = (props) => (
  <StyledDatePicker
    {...props}
  />
)

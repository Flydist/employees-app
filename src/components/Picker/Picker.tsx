import React, { FC } from 'react'
import { ReactDatePickerProps } from 'react-datepicker'

import { StyledDatePicker } from './Picker.styled'

export const Picker: FC<ReactDatePickerProps> = (props) => (
  <StyledDatePicker
    {...props}
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    locale="ru"
    dropdownMode="select"
  />
)

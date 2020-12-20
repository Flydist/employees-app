import { SetValueConfig } from 'react-hook-form'

type ResetFormValuesProps =
  (reset: (values?: Record<string, unknown>, omitResetState?: Record<string, boolean>) => void,
    setAddMode: (value: boolean) => void) => void

export const resetFormValues: ResetFormValuesProps = (reset, setAddMode) => {
  reset()
  setAddMode(true)
}

export const setValuesPack = <T extends Record<string, unknown>>(
  setValue: (name: keyof T, value: unknown, config?: Record<string, unknown>) => void,
  values: Partial<T>,
  options?: SetValueConfig,
): void => {
  Object.keys(values).forEach((key) => {
    setValue(String(key), values[key], options)
  })
}

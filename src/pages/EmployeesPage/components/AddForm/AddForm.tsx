import React, { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { Picker } from '../../../../components/Picker/Picker'
import { Select } from '../../../../components/Select/Select'
import { Input } from '../../../../components/Input/Input'
import { FlexContainer, StyledForm } from './AddForm.styled'
import { fullnameRule } from '../../../../constants/validationRules'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'

enum SexType {
  male = 'male',
  female = 'female',
}

type FormValues = {
  fullname: string
  position: string
  birthday: Date
  sex: SexType
  isFired: boolean
}

type FieldsType = 'fullname' | 'position' | 'birthday' | 'sex' | 'isFired'

const positions = [
  'Консультант',
  'Продавец-консультант',
  'Кассир',
  'Менеджер торгового зала',
  'Мерчендайзер',
  'Администратор',
  'Директор магазина',
]

const AddForm: FC = observer(() => {
  const {
    register, handleSubmit, errors, control, setValue, reset,
  } = useForm<FormValues>()

  const {
    addEmployee,
    editableId,
    employees,
    isAddMode,
    editEmployee,
    setAddMode,
  } = useEmployeesStore()

  const onSubmit = (data: FormValues) => {
    if (isAddMode) addEmployee(data)
    else editEmployee(editableId, data)
    reset()
  }

  useEffect(() => {
    if (!isAddMode) {
      const currentEmployee = employees.filter((item) => item.id === editableId)[0]
      const fields: FieldsType[] = ['fullname', 'position', 'birthday', 'sex', 'isFired']
      fields.forEach((field) => setValue(field, currentEmployee[field]))
    }
  }, [isAddMode])

  return (
    <FlexContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="ФИО"
          placeholder="Введите ФИО"
          name="fullname"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
            pattern: { value: fullnameRule, message: 'Введите полное ФИО' },
          })}
          helperText={errors.fullname?.message ?? ''}
          hasError={Boolean(errors.fullname)}
        />
        <Select
          label="Должность"
          name="position"
          ref={register({ required: true })}
          options={positions}
          helperText="Обязательно для заполнения"
          hasError={Boolean(errors.position)}
        />
        <StyledForm.Group>
          <p>
            <StyledForm.Label>Дата рождения</StyledForm.Label>
          </p>
          <Controller
            render={({ onChange, value }) => <Picker selected={value} onChange={onChange} />}
            control={control}
            name="birthday"
            defaultValue={null}
          />
        </StyledForm.Group>
        <StyledForm.Group>
          <p>
            <StyledForm.Label>Пол</StyledForm.Label>
          </p>
          <StyledForm.Check
            inline
            name="sex"
            type="radio"
            label="Мужской"
            value="male"
            id="default-radio-1"
            ref={register}
          />
          <StyledForm.Check
            inline
            name="sex"
            type="radio"
            label="Женский"
            value="female"
            id="default-radio-2"
            ref={register}
          />
        </StyledForm.Group>
        <StyledForm.Group>
          <p>
            <StyledForm.Label>Уволен</StyledForm.Label>
          </p>
          <StyledForm.Check inline label="Уволен" type="checkbox" name="isFired" ref={register} />
        </StyledForm.Group>
        <Button variant="success" type="submit">
          {isAddMode && 'Добавить'}
          {!isAddMode && 'Редактировать'}
        </Button>
        {' '}
        <Button
          variant="danger"
          type="button"
          onClick={() => {
            reset()
            setAddMode()
          }}
        >
          {isAddMode && 'Очистить'}
          {!isAddMode && 'Отмена'}
        </Button>
      </StyledForm>
    </FlexContainer>
  )
})

export default AddForm

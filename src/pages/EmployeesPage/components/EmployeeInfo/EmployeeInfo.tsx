import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'
import { InfoBlock, FlexContainer } from './EmployeeInfo.styled'

const EmployeeInfo: FC = observer(() => {
  const {
    selectedEmployee,
    employees,
    deleteEmployee,
    setEditableId,
    isAddMode,
  } = useEmployeesStore()
  const currentEmployee = employees.filter((item) => item.id === selectedEmployee)[0]
  const {
    fullname, position, birthday, sex, isFired,
  } = currentEmployee
  return (
    <>
      <FlexContainer>
        <InfoBlock>
          <h5>Информация о сотруднике:</h5>
          <p>
            Фио -
            {fullname}
          </p>
          <p>
            Должность -
            {position}
          </p>
          <p>
            День рождения -
            {birthday !== null ? format(new Date(birthday), 'dd.MM.yyyy') : 'Не указан'}
          </p>
          <p>
            Пол -
            {sex !== '' ? sex : 'Не указан'}
          </p>
          <p>
            Уволен -
            {isFired ? 'Да' : 'Нет'}
          </p>
          <Button variant="primary" type="button" onClick={() => setEditableId(currentEmployee.id)}>
            Изменить
          </Button>
          {' '}
          <Button
            variant="danger"
            type="button"
            onClick={() => deleteEmployee(currentEmployee.id)}
            disabled={!isAddMode}
          >
            Удалить
          </Button>
        </InfoBlock>
      </FlexContainer>
    </>
  )
})

export default EmployeeInfo

import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import { StyledTable, ButtonsBlock } from './EmployeesList.styled'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'

const EmployeesList: FC = observer(() => {
  const {
    employees,
    showEmployeeInfo,
    isAddMode,
    saveEmployeesToLocalStorage,
    loadEmployeesFromLocalStorage,
  } = useEmployeesStore()

  return (
    <>
      <StyledTable bordered hover isaddmode={isAddMode.toString()} hidden={!employees.length}>
        <thead>
          <tr>
            <th>Полное имя</th>
            <th>Должность</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={`${employee.fullname + employee.id}`}
              onClick={() => isAddMode && showEmployeeInfo(employee.id)}
            >
              <td>{employee.fullname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ButtonsBlock>
        <Button
          variant="primary"
          type="button"
          onClick={() => saveEmployeesToLocalStorage(employees, 'employees')}
          disabled={!isAddMode}
          className="mt-4 mx-auto"
        >
          Сохранить изменения
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => loadEmployeesFromLocalStorage('employees')}
          disabled={!isAddMode}
          className="mt-4 mx-auto"
        >
          Обновить данные (из сохранения)
        </Button>
      </ButtonsBlock>
    </>
  )
})

export default EmployeesList

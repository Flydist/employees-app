import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { StyledTable, StyledButton } from './EmployeesList.styled'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'

const EmployeesList: FC = observer(() => {
  const {
    employees,
    showEmployeeInfo,
    isAddMode,
    saveEmployeesToLocalStorage,
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
      <StyledButton
        variant="primary"
        type="button"
        onClick={() => saveEmployeesToLocalStorage(employees, 'employees')}
        disabled={!isAddMode}
        className="mt-4 mx-auto"
      >
        Сохранить изменения
      </StyledButton>
    </>
  )
})

export default EmployeesList

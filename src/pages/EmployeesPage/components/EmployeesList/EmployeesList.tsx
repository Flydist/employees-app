import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { StyledTable } from './EmployeesList.styled'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'

const EmployeesList: FC = observer(() => {
  const { employees, showEmployeeInfo, isAddMode } = useEmployeesStore()

  return (
    <StyledTable bordered hover isaddmode={isAddMode.toString()}>
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
  )
})

export default EmployeesList

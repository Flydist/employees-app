import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { StyledTable } from './EmployeesList.styled'
import { useEmployeesStore } from '../../../../hooks/useEmployeesStore'

const EmployeesList: FC = observer(() => {
  const { employees, showEmployeeInfo } = useEmployeesStore()

  return (
    <StyledTable bordered hover>
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
            onClick={() => showEmployeeInfo(employee.id)}
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

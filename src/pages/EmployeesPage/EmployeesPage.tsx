import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { useEmployeesStore } from '../../hooks/useEmployeesStore'
import AddForm from './components/AddForm/AddForm'
import EmployeeInfo from './components/EmployeeInfo/EmployeeInfo'
import EmployeesList from './components/EmployeesList/EmployeesList'

export const EmployeesPage: FC = observer(() => {
  const { selectedEmployee } = useEmployeesStore()
  return (
    <>
      <Row>
        <Col md={{ span: 6, order: 'first' }} xs={{ span: 12, order: 'last' }}>
          <EmployeesList />
        </Col>
        <Col md={{ span: 6, order: 'last' }} xs={{ span: 12, order: 'first' }}>
          <AddForm />
          {Boolean(selectedEmployee) && <EmployeeInfo />}
        </Col>
      </Row>
    </>
  )
})

import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddForm from './components/AddForm/AddForm'

export const EmployeesPage: FC = () => (
  <>
    <Row>
      <Col md={6}>
        {/* <EmployeesList /> */}
      </Col>
      <Col md={6}>
        <AddForm />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        {/* <EmployeeInfo /> */}
      </Col>
    </Row>
  </>
)

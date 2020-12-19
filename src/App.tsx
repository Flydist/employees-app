import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Routes } from './pages/Routes'
import { EmployeesContext } from './store/context'
import { employeesStore } from './store/EmployeesStore'

const App: FC = () => (
  <EmployeesContext.Provider value={employeesStore}>
    <Container>
      <Routes />
    </Container>
  </EmployeesContext.Provider>
)

export default App

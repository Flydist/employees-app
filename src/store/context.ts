import { createContext } from 'react'
import { Employees, employeesStore } from './EmployeesStore'

export const EmployeesContext = createContext<Employees>(employeesStore)

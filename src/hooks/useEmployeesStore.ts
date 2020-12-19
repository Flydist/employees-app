import { useContext } from 'react'
import { EmployeesContext } from '../store/context'
import { Employees } from '../store/EmployeesStore'

export const useEmployeesStore = (): Employees => useContext(EmployeesContext)

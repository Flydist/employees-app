import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { saveState, loadState } from '../localStorage/localStorage'
import { FormValues, SexType } from '../types/types'

export type Employee = {
  id: string
  fullname: string
  position: string
  birthday: Date
  sex: SexType
  isFired: boolean
}

export class Employees {
  employees: Employee[] = []

  selectedEmployee = ''

  editableId = ''

  isAddMode = true

  showEmployeeInfo = (id: string): void => {
    this.selectedEmployee = id
  }

  setAddMode = (value: boolean): void => {
    this.isAddMode = value
  }

  setEditableId = (id: string): void => {
    this.editableId = id
    this.isAddMode = false
  }

  addEmployee = (employee: FormValues): void => {
    const newId = uuidv4()
    const newEmployee = {
      id: newId,
      ...employee,
    }
    this.employees.push(newEmployee)
  }

  editEmployee = (id: string, data: FormValues): void => {
    this.employees = this.employees.map((emp) => (emp.id === id ? { id: emp.id, ...data } : emp))
    this.isAddMode = true
    this.setAddMode(true)
  }

  deleteEmployee = (id: string): void => {
    this.selectedEmployee = ''
    this.employees = this.employees.filter((item) => item.id !== id)
  }

  saveEmployeesToLocalStorage = (state: Employee[], itemName: string): void => {
    saveState(state, itemName)
  }

  loadEmployeesFromLocalStorage = (itemName: string): void => {
    const persistedState = loadState<Employee[]>(itemName)
    if (persistedState) this.employees = persistedState
    else this.employees = []
  }

  constructor() {
    makeAutoObservable(this)
    this.loadEmployeesFromLocalStorage('employees')
  }
}

export const employeesStore = new Employees()

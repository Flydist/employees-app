import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { FormValues, SexType } from '../types/types'

type Employee = {
  id: string
  fullname: string
  position: string
  birthday: Date
  sex: SexType | ''
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
    this.employees = this.employees.map(
      (employee) => (employee.id === id ? { id: employee.id, ...data } : employee),
    )
    this.isAddMode = true
    this.setAddMode(true)
  }

  deleteEmployee = (id: string): void => {
    this.selectedEmployee = ''
    this.employees = this.employees.filter((item) => item.id !== id)
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export const employeesStore = new Employees()

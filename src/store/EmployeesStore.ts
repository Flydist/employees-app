import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

enum SexType {
  male = 'male',
  female = 'female',
  unknown = '',
}

type Employee = {
  id: string
  fullname: string
  position: string
  birthday: Date
  sex: SexType
  isFired: boolean
}

type FormValues = {
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

  setAddMode = (): void => {
    this.isAddMode = true
  }

  setEditableId = (id: string): void => {
    this.editableId = id
    this.isAddMode = false
  }

  deleteEmployee = (id: string): void => {
    this.selectedEmployee = ''
    this.employees = this.employees.filter((item) => item.id !== id)
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
    // eslint-disable-next-line max-len
    this.employees = this.employees.map((employee) => (employee.id === id ? { id: employee.id, ...data } : employee))
    this.isAddMode = true
    this.setAddMode()
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export const employeesStore = new Employees()

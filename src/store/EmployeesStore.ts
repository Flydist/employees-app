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

  selectedEmployee = '0'

  showEmployeeInfo = (id: string): void => {
    this.selectedEmployee = id
  }

  deleteEmployee = (id: string): void => {
    this.selectedEmployee = '0'
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

  constructor() {
    makeAutoObservable(this)
  }
}

export const employeesStore = new Employees()

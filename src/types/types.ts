export enum SexType {
  male = 'Мужской',
  female = 'Женский',
}

export type FormValues = {
  fullname: string
  position: string
  birthday: Date
  sex: SexType | ''
  isFired: boolean
}

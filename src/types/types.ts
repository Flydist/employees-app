export enum SexType {
  male = 'Мужской',
  female = 'Женский',
  unknown = '',
}

export type FormValues = {
  fullname: string
  position: string
  birthday: Date
  sex: SexType
  isFired: boolean
}

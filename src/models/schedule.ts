export const SCHEDULES_KEY = "schedules"

export interface Schedule {
  id: string
  customer: string
  date: Date
  time: number
}

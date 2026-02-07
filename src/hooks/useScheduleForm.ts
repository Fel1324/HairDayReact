import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";

export function useScheduleForm() {
  const [schedules, setSchedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, [])

  function createSchedule(data: Schedule) {
    const { customer, datetime } = data

    if(!customer) {
      return alert("Nome do cliente não foi definido!")
    }

    if(!datetime) {
      return alert("Data do agendamento não foi definida!")
    }

    setSchedules([...schedules, data])
  }

  return {
    schedules,
    createSchedule
  }
}

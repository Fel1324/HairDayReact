import { InputDate } from "../input-date";
import { Label } from "../label";
import { Text } from "../text";
import { OPENING_HOURS } from "../../utils/opening-hours";
import { TimeSelect } from "../time-select";
import { InputText } from "../input-text";

import CustomerIcon from "../../assets/icons/user.svg?react"
import CalendarIcon from "../../assets/icons/calendar.svg?react"
import { Button } from "../button";

export function ScheduleForm() {
  return (
    <form>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="schedule-date" className="text-gray-200">Data</Label>
          <InputDate icon={CalendarIcon} id="schedule-date" />
        </div>

        <div>
          <Label className="text-gray-200">Horários</Label>

          <div className="mt-2">
            <Text as="small" variant={"text-sm"} className="text-gray-300">Manhã</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {OPENING_HOURS.map((hours) => hours <= "12:00" && (
                <li key={hours}>
                  <TimeSelect id={hours} label={hours} />
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            <Text as="small" variant={"text-sm"} className="text-gray-300">Tarde</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {OPENING_HOURS.map((hours) => hours > "12:00" && hours <= "18:00" && (
                <li key={hours}>
                  <TimeSelect id={hours} label={hours} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text as="small" variant={"text-sm"} className="text-gray-300">Noite</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {OPENING_HOURS.map((hours) => hours > "18:00" && hours <= "21:00" && (
                <li key={hours}>
                  <TimeSelect id={hours} label={hours} />
                </li>
              ))}
            </ul>
          </div>        
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="schedule-customer" className="text-gray-200">Cliente</Label>
          <InputText icon={CustomerIcon} id="schedule-customer" />
        </div>
      </div>

      <Button className="w-full">Agendar</Button>
    </form>
  )
}

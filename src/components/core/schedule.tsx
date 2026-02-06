import type { Schedule } from "../../models/schedule"
import { ButtonIcon } from "../button-icon"
import { Text } from "../text"

import TrashIcon from "../../assets/icons/trash.svg?react"

interface ScheduleProps {
  schedule?: Schedule
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <li className="py-2 flex items-center gap-5">
      <Text as="strong" variant={"title-md"} className="text-gray-200">11:00</Text>
      <Text as="span" className="flex-1 text-gray-200">Rafael</Text>
      <ButtonIcon icon={TrashIcon} />
    </li>
  )
}

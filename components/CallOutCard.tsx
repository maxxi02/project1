'use client'

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Callout } from "@tremor/react";
import { FaCheckCircle, FaExclamationCircle  } from "react-icons/fa";


type Props =
{
    message: string,
    warning?: boolean,
}


export function CallOutCard({message, warning}: Props) {
  return (
    <Callout
        className="mt-4"
        title={message}
        icon={warning ? FaExclamationCircle : CheckCircleIcon}
        color={warning ? "rose" : "teal"}
    />
  )
}

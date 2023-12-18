'use client'
import { Callout } from "@tremor/react";
import { FaExclamationCircle  } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";


type Props =
{
    message: string,
    warning?: boolean,
}


export function CallOutCard({message, warning}: Props) {
  return (
    <Callout
        className="w-full"
        title={message}
        icon={warning ? FaExclamationCircle : FcAbout}
        color={warning ? "rose" : "teal"}
    />
  )
}

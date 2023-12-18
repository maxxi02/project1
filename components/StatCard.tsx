'use client';
import { Button, Card, Color, Metric, Text } from "@tremor/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


import Link from "next/link";

type Props =
{

    title: string,
    metric: string,
    color?: Color,
}

function StatCard({title, metric, color}: Props) {
  return (
    <Card 
    decorationColor={color} 
    decoration="bottom" 
    className="flex justify-between items-center">
      <div className="flex flex-col items-start gap-2">
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
      </div>
      <Button  size="sm">
        <Link href={"/learningpage"}>
          <div className="flex items-center text-md gap-1">
          <p>Learn</p>
          <FaArrowUpRightFromSquare className="text-md"/>
          </div>
        </Link>
      </Button>
    </Card>
  )
}

export default StatCard
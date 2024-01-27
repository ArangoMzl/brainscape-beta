import * as React from "react";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-6 px-3">
      <Card className="w-[500px] h-48 bg-[#ee78c7]/30 shadow-lg flex flex-col justify-between overflow-hidden">
        <CardHeader className="mb-auto">
          <CardTitle className="text-white font-bold text-2xl">
            Tareas Restantes
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="font-bold text-8xl text-[#4d0a2f] h-full">6</span>
          <Image
            src="/ilustration_calendar.png"
            alt=""
            width={220}
            height={130}
            className="flex relative -top-16 left-14 -rotate-12"
          />
        </CardContent>
      </Card>
      <Card className="flex w-[61%] h-48 bg-white/30 border border-[#ee78c7]/50 shadow-lg items-center ">
        <CardContent className="flex w-full px-16 justify-between py-8">
          <div className="">
            <FaCheckCircle size={50} className="text-[#09E19E]" />
            <span className="flex justify-center font-bold">Hecho</span>
            <span className="flex font-bold text-3xl text-[#09E19E] justify-center">
              12
            </span>
          </div>
          <div className="">
            <IoIosTime size={50} className="text-[#B978FF]" />
            <span className="flex justify-center font-bold">En curso</span>
            <span className="flex font-bold text-3xl text-[#B978FF] mx-2">
              12
            </span>
          </div>
          <div className="">
            <IoCopy size={50} className="text-[#FE9D53]" />
            <span className="flex justify-center font-bold">En fila</span>
            <span className="flex font-bold text-3xl text-[#FE9D53] justify-center">
              12
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[500px] h-96"></Card>
    </div>
  );
}

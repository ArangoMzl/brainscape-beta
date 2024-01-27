import React from "react";
import { GiBurningBook } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="py-2 backdrop-blur-md bg-white/30 rounded-full my-2">
      <div className="flex flex-row justify-between px-6">
        <div className="flex gap-2 text-[#E344AA] items-center">
          <GiBurningBook size={32} className="cursor-pointer hover:size-10" />
          <h1 className="text-3xl font-bold ">
            <span className="text-white text-4xl">B</span>RAINDSCAPE
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <IoMdNotificationsOutline
            size={24}
            className="hover:size-7 hover:text-[#E344AA] cursor-pointer"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Mzl</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Cuenta ArangoMzl</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="focus:bg-[#E344AA] focus:text-white focus:font-bold duration-0">
                  Perfil
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#E344AA] focus:text-white focus:font-bold duration-0">
                  Ajustes
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#E344AA] focus:text-white focus:font-bold duration-0">
                  GitHub
                  <DropdownMenuShortcut>⌘G</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-red-500/90 focus:text-white focus:font-bold duration-0">
                Salir
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="braindscape" className="gap-1.5">
            <FaPlus />
            Crear Nueva Tarea
          </Button>
        </div>
      </div>
    </header>
  );
}

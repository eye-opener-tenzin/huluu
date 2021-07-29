import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex h-32 items-center justify-between mx-20">
      <div className="flex space-x-16">
        <HomeIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
        <LightningBoltIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
        <BadgeCheckIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
        <CollectionIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
        <SearchIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
        <UserIcon className="h-10 w-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white" />
      </div>
      <Image src="/huluLogo.svg" height="70" width="100" alt="huluu logo" />
    </header>
  );
}

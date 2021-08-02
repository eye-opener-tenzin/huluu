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
        <HomeIcon className="header-icon" />
        <LightningBoltIcon className="header-icon" />
        <BadgeCheckIcon className="header-icon" />
        <CollectionIcon className="header-icon" />
        <SearchIcon className="header-icon" />
        <UserIcon className="header-icon" />
      </div>
      <Image src="/huluLogo.svg" height="70" width="100" alt="huluu logo" />
    </header>
  );
}

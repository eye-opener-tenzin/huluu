import React from "react";
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
    <header>
      <div className="flex">
        <HomeIcon className="h-10 w-10" />
        <LightningBoltIcon className="h-10 w-10" />
        <BadgeCheckIcon className="h-10 w-10" />
        <CollectionIcon className="h-10 w-10" />
        <SearchIcon className="h-10 w-10" />
        <UserIcon className="h-10 w-10" />
      </div>
    </header>
  );
}

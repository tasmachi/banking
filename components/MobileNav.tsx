"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            alt="menu"
            className="cursor-pointer"
            height={30}
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <Link
            href="/"
            className=" flex cursor-pointer px-4 gap-1 items-center"
          >
            <Image
              src="/icons/logo.svg"
              alt="Home logo"
              width={34}
              height={34}
            />
            <h1 className="text-26 font-bold text-black-1 font-ibm-plex-serif">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col gap-6 pt-16 text-white h-full">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                        href={item.route}
                        key={item.label}
                      >
                        <Image
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            <Footer type="mobile" user={user} />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

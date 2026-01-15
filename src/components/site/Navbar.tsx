"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
//  import Logo from "../../../"
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="size-8 rounded-lg bg-primary" /> */}
             <img src={'/worldradiance.jpeg'}
            className="h-6 rounded-lg bg-primary"
            alt="" />
          <img src={'/logo.jpeg'}
            className="size-8 rounded-lg bg-primary"
            alt="" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Kenya Youth Unity in Diversity
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary">
                    About WRI (Our Origins)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/programs" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary">
                    KYUID Program
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary">
                    Our Impact (The Gen Z Awakening)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm">
            <Link href="/join" className="inline-flex items-center gap-1">
              Get Involved <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-3 pt-10">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium">
                  About WRI (Our Origins)
                </Link>
                <Link href="/programs" className="text-sm font-medium">
                  KYUID Program
                </Link>
                <Link href="/contact" className="text-sm font-medium">
                  Our Impact (The Gen Z Awakening)
                </Link>

                <Button asChild className="mt-4">
                  <Link href="/join" className="inline-flex items-center gap-1">
                    Get Involved <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

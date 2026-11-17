"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { menuList } from "@/lib/menuList";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";

export interface MenuItem {
  url: string;
  name: string;
}

const NavbarComponent = () => {
  return (
    <section>
      <div className="container"> 
        {/* display desktop screen */}
        <DesktopNavbarComponent/>
        {/* display mobile screen */}
        <MobileNavbarComponent/>
        <nav className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <a href={"/"} className="flex items-center gap-2 justify-self-start">
            <Image
              src={
                "https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"
              }
              className="max-h-8 dark:invert"
              alt={"logo"}
              width={200}
              height={200}
            />
          </a>
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList>
              {menuList.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 justify-self-end">
            <Button
              variant="outline"
              size="sm"
              render={<a href={"/login"} />}
              nativeButton={false}
            >
              {" "}
              Login
            </Button>
            <Button
              size="sm"
              render={<a href={"/register"} />}
              nativeButton={false}
            >
              Register
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.name}>
      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-popover text-popover-foreground">
        {menuList.map((subItem) => (
          <NavigationMenuLink
            key={subItem.name}
            className="w-80"
            render={<SubMenuLink item={subItem} />}
          ></NavigationMenuLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};


const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.name}</div>
      <div>
        <div className="text-sm font-semibold">{item.name}</div>
        {item.name && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.name}
          </p>
        )}
      </div>
    </a>
  );
};

export { NavbarComponent };

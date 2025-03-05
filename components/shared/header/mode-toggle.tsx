"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  type ThemeOption = {
    theme: string;
    name: string;
    icon: JSX.Element;
  };
  const themeIcons: ThemeOption[] = [
    {
      theme: "light",
      name: "Light",
      icon: <SunIcon />,
    },
    {
      theme: "dark",
      name: "Dark",
      icon: <MoonIcon />,
    },
  ];
  const dropDownItems = (): JSX.Element[] =>
    themeIcons.map((item) => {
      return (
        <DropdownMenuCheckboxItem
          key={item.name}
          checked={theme === item.theme}
          onClick={() => setTheme(item.theme)}
        >
          {item.name}
        </DropdownMenuCheckboxItem>
      );
    });
  if (!mounted) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          variant="ghost"
        >
          {themeIcons.find((item) => item.theme === theme)?.icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropDownItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;

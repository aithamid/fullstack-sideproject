"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ModeToggle"
import {useTranslations} from 'next-intl'
import LanguageToggle from "./LanguageToggle"


export function NavigationMenuDemo() {
  const t = useTranslations('Navbar');

  return (
    <div className={cn(
      "flex items-center justify-center py-2",
    )}>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('dashboard')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t('tasks')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t('sleep')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t('account')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
              <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
              <LanguageToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
      </NavigationMenu>
    </div>
    
  )
}


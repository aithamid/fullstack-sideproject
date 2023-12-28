import Link from "next/link"

import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const t = useTranslations('Navbar');

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {t('dashboard')}
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {t('tasks')}
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {t('sleep')}
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {t('settings')}
      </Link>
    </nav>
  )
}

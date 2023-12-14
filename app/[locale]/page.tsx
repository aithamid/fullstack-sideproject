import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import { NavigationMenuDemo } from "@/components/NavBar"
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      <ModeToggle /> <br />
      <Link href="/fr" locale="fr">
        Français
      </Link>
      {" | "}
      <Link href="/en" locale="en">
        English
      </Link>
      <h1>{t('title')}</h1>
    </div>
  )
}

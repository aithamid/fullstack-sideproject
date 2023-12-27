// components/LanguageToggle.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { useRouter,  usePathname } from 'next/navigation';

export function LanguageToggle() {
    // Fonction pour changer de langue
    const pathname = usePathname();
    const router = useRouter();

    const setLanguage = (language: string) => {
    // Logique de changement de langue
    console.log(`Language set to ${language} in pathname : ${pathname}`);
    // Ici, vous pouvez intégrer la logique de changement de langue, comme i18n
    router.push(pathname);
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Icône ou texte pour le bouton de changement de langue */}
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Changer de langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        {/* Ajoutez d'autres langues ici si nécessaire */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageToggle;

import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Home, Gavel, PanelLeft, Search, House, Contact} from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"; 
import { Input } from "../ui/input";
import { Button } from "../ui/button"; 
import { DarkModeSwitch} from 'react-toggle-dark-mode';
import { useTheme } from "../ui/theme-provider";

type Menu = {
  label: string
  name: string
  icon: React.ReactNode,
  href: string
}

export default function SidebarMenu() {
  const menus: Menu[] = [
    {
      label: "Início",
      name: "Home",
      icon: <House size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Simulador",
      name: "Simulador",
      icon: <Gavel size={15} className="mr-2" />,
      href: "/simulator",
    },
    {
      label: "Sobre",
      name: "About",
      icon: <Contact size={15} className="mr-2" />,
      href: "/about",
    },
];

  const {theme, setTheme} = useTheme();

  const onDarkModeToggle = (e: boolean) => {
      setTheme(e ? 'dark' : 'light');
  }

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip key="home">
            <TooltipTrigger>
            <Link
              to="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Calculajá</span>
            </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Início</TooltipContent>
          </Tooltip>
        
          {menus.slice(1).map((menu) => (
            <Tooltip key={menu.name}>
              <TooltipTrigger asChild>
                <Link
                  to={menu.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {menu.icon}
                  <span className="sr-only">{menu.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{menu.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[360px] max-w-full flex flex-col justify-content">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Opções</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-6 text-sm md:text-lg font-medium mt-2">
                {menus.map((menu) => (
                  <Link
                    key={menu.name}
                    to={menu.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {menu.icon}
                    {menu.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              disabled
              type="search"
              placeholder="Pesquisar..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DarkModeSwitch
                    className='mr-2 w-7 h-7 sm:block'
                    checked={theme === 'dark'}
                    onChange={onDarkModeToggle}
                    size={20} />
        </header>
      </div>
    </>
  );
}
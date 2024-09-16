
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ScrollArea } from "../components/ui/scroll-area";
import { cn } from "../lib/utils";
import { Home, Menu, Handshake, PartyPopper, CalendarClock, CalendarPlus, Calendar, MoonStar, ChartLine, ChartNoAxesColumnIcon, CalendarDays, Earth, CalendarSearch, BadgeDollarSign, Receipt, Gavel, Utensils } from "lucide-react";
import * as React from "react";

type Menu = {
  label: string
  name: string
  icon: React.ReactNode
  submenu?: Submenu[]
  href: string
}

type Submenu = {
  name: string
  icon: React.ReactNode
  href: string
}

export default function SidebarMenu() {

  const menus: Menu[] = [
    {
        label: "Tipos de calculo",
        name: "Início",
        icon: <Home size={15} className="mr-2" />,
        href: "/",
    },
    {
        label: "Leilão Extrajudicial",
        name: "Calculadora - compra a vista",
        icon: <Gavel size={15} className="mr-2" />,
        href: "/calcula-compra-imovel",
    },
    {
        label: "Leilão Extrajudicial",
        name: "Calculadora - compra financiada",
        icon: <Gavel size={15} className="mr-2" />,
        href: "/",
    },
    {
        label: "Trabalhistas",
        name: "Calculadora de 13°",
        icon: <BadgeDollarSign size={15} className="mr-2" />,
        href: "/calculo-datas",
    },
    {
        label: "Trabalhistas",
        name: "Calculadora de Férias",
        icon: <PartyPopper size={15} className="mr-2" />,
        href: "/",
    },
    {
      label: "Trabalhistas",
      name: "Calculadora de FGTS",
      icon: <CalendarClock size={15} className="mr-2" />,
      href: "/",
  },
  {
    label: "Trabalhistas",
    name: "Calculadora de recisão CLT",
    icon: <Handshake size={15} className="mr-2" />,
    href: "/",
},
{
    label: "Financeiras",
    name: "Juros Compostos",
    icon: <ChartLine size={15} className="mr-2" />,
    href: "/",
},
{
    label: "Financeiras",
    name: "Simulador de imposto de renda",
    icon: <Receipt size={15} className="mr-2" />,
    href: "/",
},
{
    label: "Financeiras",
    name: "Simulador juros PRICE",
    icon: <ChartNoAxesColumnIcon size={15} className="mr-2" />,
    href: "/",
},
{
    label: "Financeiras",
    name: "Simulador juros SAC",
    icon: <ChartLine size={15} className="mr-2" />,
    href: "/",
  },
  {
    label: "Datas",
    name: "Calculadoras",
    icon: <CalendarPlus size={15} className="mr-2" />,
    href: "/home/playlist",
    submenu: [
        {
            name: "Dias entre datas",
            icon: <Calendar size={15} className="mr-2" />,
            href: "/home/",
        },
        {
            name: "Melhor dia de compra do cartão",
            icon: <CalendarClock size={15} className="mr-2" />,
            href: "/home/",
        },
        {
            name: "Dias úteis",
            icon: <CalendarDays size={15} className="mr-2" />,
            href: "/home/",
        },
        {
          name: "Feriados móveis",
          icon: <CalendarSearch size={15} className="mr-2" />,
          href: "/home/",
      },
    ],
  },
  {
    label: "Relógio mundial",
    name: "Horario no mundo",
    icon: <Earth size={15} className="mr-2" />,
    href: "/",
  },
  {
    label: "Fases da lua",
    name: "Lua hoje",
    icon: <MoonStar size={15} className="mr-2" />,
    href: "/",
  },
  {
    label: "Caloria dos alimentos",
    name: "Quantidade de caloria",
    icon: <Utensils size={15} className="mr-2" />,
    href: "/",
  },
];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  return (
    <ScrollArea className="h-screen sm:w-64 fixed rounded-md">
        <div className="md:px-2 sm:p-0 mt-4">
            {uniqueLabels.map((label, index) => (
                <React.Fragment key={label}>
                    {label && (
                        <p className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-900 dark:text-slate-100 ${index > 0 ? 'mt-10' : ''}`}>
                            {label}
                        </p>
                    )}
                    {menus
                        .filter((menu) => menu.label === label)
                        .map((menu) => (
                            <React.Fragment key={menu.name}>
                                {menu.submenu && menu.submenu.length > 0 ? (
                                    <Accordion
                                        key={menu.name}
                                        type="single"
                                        className="mt-[-10px] mb-[-10px] p-0 font-normal"
                                        collapsible
                                    >
                                        <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                                            <AccordionTrigger>
                                                <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md">
                                                    <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                                        <div className="flex">
                                                            <div className="h-4 w-6 shrink-0 text-muted-foreground transition-transform duration-200">{menu.icon}</div>
                                                            {menu.name}
                                                        </div>
                                                    </div>
                                                </a>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {menu.submenu.map((submenu) => (
                                                    <Link key={submenu.name} to={submenu.href} className="text-gray-500 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                                        <div className="w-6">{submenu.icon}</div>
                                                        {submenu.name}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <div key={menu.name}>
                                        <Link to={menu.href} className="flex text-xs h-10 bg-white dark:bg-background dark:text-slate-300 my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                                            <div className="w-6">{menu.icon}</div>
                                            {menu.name}
                                        </Link>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                </React.Fragment>
            ))}
        </div>
    </ScrollArea>
  );
}

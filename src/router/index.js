import About from "../pages/About"
import CommanderIdPage from "../pages/CommanderIdPage"
import Commanders from "../pages/Commanders"
import Calculators from "../pages/Calculators"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Resources from "../pages/Calculator/Resources"

export const routerLinks = [
  { to: "/commanders", title: "Командиры" },
  { to: "/calculators", title: "Калькулятор" },
  { to: "/about", title: "О нас" },
  { to: "/contact", title: "Контакт" },
]

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/commanders", component: Commanders, exact: true },
  { path: "/commanders/:id", component: CommanderIdPage, exact: true },
  { path: "/calculators", component: Calculators, exact: true },
  { path: "/resources-calculator", component: Resources, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/contact", component: Contact, exact: true },
]

export const routerLinksCalculators = [
  { to: "/resources-calculator", title: "Ресурсы" },
  { to: "/acceleration-calculator", title: "Ускорения" },
  { to: "/tomes-of-knowledge-calculator", title: "Фолианты знания" },
  { to: "/treatments-calculator", title: "Лечения" },
  { to: "/troop-training-calculator", title: "Обучение войск" },
  { to: "/equipment-calculator", title: "Снаряжение" },
  { to: "/commanders-calculator", title: "Командиры" },
  { to: "/gems-calculator", title: "Самоцветы" },
  { to: "/action-points-calculator", title: "Очки действия" },
  { to: "/building-calculator", title: "Строительство" },
  { to: "/technologies-calculator", title: "Технологии" },
  { to: "/vip-level-calculator", title: "Уровень VIP" },
]

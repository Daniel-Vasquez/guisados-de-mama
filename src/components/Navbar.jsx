import { DropdownMenu } from "@/components/DropdownMenu";
import { ROUTES } from "@/constants/routes";
import logo from "@/images/los-guisados-de-mama.png";
import { LogoHome } from "@/components/icons/LogoHome";
import { LogoEmail } from "@/components/icons/LogoEmail";
import { LogoStews } from "@/components/icons/LogoStews";

const LOGOSSVG = [
  {
    svg: <LogoHome className="w-9 text-golden"/>,
    title: "Inicio",
  },
  {
    svg: <LogoStews className="w-9 text-golden" />,
    title: "Guisados",
  },
  {
    svg: <LogoEmail className="w-9 text-golden" />,
    title: "Contactanos",
  },
];

export const Navbar = () => {
  return (
    <header
      id="header"
      className="bg-blue w-full h-28 border-2 border-t-0 border-border rounded-b-2xl fixed top-0 left-0 transition-colors duration-500 z-10 lg:left-5 lg:w-auto lg:h-96"
    >
      <div className="mx-auto">
        <div className="flex flex-row items-center justify-between h-auto p-2 lg:flex-col lg:h-96">
          <a href="/">
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={logo.src} alt="Los guisados de Mamá" className=" w-16" />
            </div>
          </a>
          <nav className="hidden lg:block">
            <ul className="sm:flex flex-col justify-around h-60 gap-3">
              {ROUTES.map(({ href, label }, index) => (
                <li key={index} className="bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-950">
                  <a
                    href={href}
                    className="flex justify-center flex-col items-center gap-1 p-3 text-white text-center"
                  >
                    {LOGOSSVG.find((logo) => logo.title === label)?.svg || label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="block lg:hidden">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

import { DropdownMenu } from "@/components/DropdownMenu";
import { ROUTES } from "@/constants/routes";
import logo from "@/images/los-guisados-de-mama.png";
import { LogoHome } from "@/components/icons/LogoHome";
import { LogoBox } from "@/components/icons/LogoBox";
import { LogoStews } from "@/components/icons/LogoStews";

const LOGOSSVG = [
  {
    svg: <LogoHome className="w-9" />,
    title: "Inicio",
  },
  {
    svg: <LogoStews className="w-9" />,
    title: "Guisados",
  },
  {
    svg: <LogoBox className="w-9" />,
    title: "Paquetes",
  },
];

export const Navbar = () => {
  return (
    <header
      id="header"
      className="bg-blue w-full h-28 border-2 border-t-0 border-border rounded-b-2xl fixed top-0 right-0 transition-colors duration-500 z-10 lg:right-20 lg:w-20 lg:h-96"
    >
      <div className="mx-auto">
        <div className="flex flex-row items-center justify-between h-auto p-3 lg:flex-col lg:h-96">
          <a href="/">
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={logo.src} alt="Los guisados de Mamá" className=" w-20" />
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

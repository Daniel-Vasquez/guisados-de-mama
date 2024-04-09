import { getImage } from "@/utils";
import { LogoFacebook } from "@/components/icons/LogoFacebook";
import { LogoInstagram } from "@/components/icons/LogoInstagram";
import { LogoWhatsapp } from "@/components/icons/LogoWhatsapp";

const PUBLIC_MY_PHONE_NUMBER = import.meta.env.PUBLIC_MY_PHONE_NUMBER;
const PUBLIC_FACEBOOK_LINK = import.meta.env.PUBLIC_FACEBOOK_LINK;
const PUBLIC_INSTAGRAM_LINK = import.meta.env.PUBLIC_INSTAGRAM_LINK;
const DEFAULT_TEXT = "Hola%20Lic.%20Salinas,%20me%20gustaría%20que%20me%20asesorara%20con"

export function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${getImage("form.jpeg")})` }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-4 text-4xl font-bold text-white">Contactanos</h1>
        <p className="mb-8 text-sm text-center text-white">
          ¿Tienes alguna duda? ¡Escríbenos!
        </p>
      </div>

      <div className="bg-blue rounded-md border border-grey hover:bg-blue-medium ">
        <a
          className="flex justify-center items-center gap-4 w-72 min-h-36 text-white text-2xl font-bold sm:min-w-96"
          href={`https://wa.me/${PUBLIC_MY_PHONE_NUMBER}?text=${DEFAULT_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Via Whatsapp
          <LogoWhatsapp className="text-green-500 w-11" />
        </a>
      </div>

      <div className="flex flex-col gap-2 mt-7">
        <h2 className="text-white text-xl font-semibold text-center">
          Siguenos en nuestras redes sociales
        </h2>
        <div className="flex justify-center gap-3">
          <a
            className=" transition-all  hover:scale-90"
            href={PUBLIC_FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoFacebook className="text-golden w-10" />
          </a>

          <a
            className=" transition-all  hover:scale-90"
            href={PUBLIC_INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram className="text-golden w-10" />
          </a>
        </div>
      </div>
    </div >
  );
}
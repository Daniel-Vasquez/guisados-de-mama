import { LogoWhatsapp } from "@/components/icons/LogoWhatsapp";
const PUBLIC_MY_PHONE_NUMBER = import.meta.env.PUBLIC_MY_PHONE_NUMBER;
const DEFAULT_TEXT =
  "Hola,%20*Guisados%20de%20mamá*,%20me%20gustaría%20ordenar%20un%20guisado,%20¿podrían%20ayudarme?";

export const ContactButton = ({ text, classButton }) => {
  return (
    <a
      className={classButton}
      href={`https://wa.me/${PUBLIC_MY_PHONE_NUMBER}?text=${DEFAULT_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <LogoWhatsapp className="text-green-500 w-11" />
    </a>
  );
};

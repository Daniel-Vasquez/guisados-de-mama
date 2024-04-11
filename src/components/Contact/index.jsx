import contactImg from "@/images/contact-img.jpeg";
import { ContactButton } from "@/components/ContactButton";

export function Contact() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${contactImg.src})` }}
    >
      <div className="bg-orange flex flex-col max-w-xl w-full mx-3 rounded-xl px-4 py-14">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="mb-4 text-5xl font-bold text-blue">Contactanos</h1>
          <p className="mb-8 text-lg text-center text-blue">
            ¿Tegustaría ordenar un guisado? ¡Contáctanos!
          </p>
        </div>

        <div className="bg-blue w-64 m-auto rounded-md hover:bg-blue-light">
          <ContactButton 
            text="Via Whatsapp" 
            classButton="flex justify-center items-center gap-4 w-full h-24 text-white text-2xl font-bold"
          />
        </div>
      </div>
    </div>
  );
}

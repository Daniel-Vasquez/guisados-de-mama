import contactImg from "@/images/contact-img.png";
import { ContactButton } from "@/components/ContactButton";

export function Contact() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${contactImg.src})` }}
    >
      <div className="bg-blue flex flex-col max-w-xl w-full mx-3 rounded-2xl px-4 py-14 border-2 border-border">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Contactanos
          </h1>
          <p className="mb-2 text-lg text-center text-white">
            ¿Te gustaría hacer un pedido?
          </p>
          <p className="mb-2 text-lg text-center text-white">
            Ordena por
          </p>
        </div>

        <div className="bg-gray-600 w-64 m-auto rounded-md hover:bg-blue-light">
          <ContactButton 
            text="Via Whatsapp" 
            classButton="flex justify-center items-center gap-4 w-full h-20 text-white text-2xl font-bold"
          />
        </div>

        <p className="text-gray-500 text-center mt-5 font-medium">
          Tiempo de entrega entre: 30-45 min.
        </p>
      </div>
    </div>
  );
}

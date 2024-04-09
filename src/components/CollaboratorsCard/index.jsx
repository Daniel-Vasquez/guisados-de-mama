import { COLLABORATORS } from "@/constants/Collaborators";

export const CollaboratorsCard = () => {
  return (
    <ul class="flex flex-wrap justify-center gap-7">
      {COLLABORATORS.map(({ name, phone, services }) => (
        <li class="w-96 relative flex flex-col mt-6 text-white bg-blue-light shadow-md bg-clip-border rounded-xl">
          <div class="p-7">
            <h2 class="block mb-1 text-lg font-semibold leading-snug tracking-normal">
              {name.toUpperCase()}
            </h2>
            <span>Tel. <strong>{phone}</strong></span>
            <div class="my-2">
              <p class="block text-base font-bold leading-relaxed text-golden">
                SERVICIOS ESPECIALIZADOS:
              </p>
              <ul class="list-disc list-inside">
                {services.map((service) => (
                  <li>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

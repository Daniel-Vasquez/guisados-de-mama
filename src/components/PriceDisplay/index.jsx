import { formatCurrency } from "@/utils";

const PriceCard = ({ quantity, price }) => {
  return (
    <div class="bg-blue flex flex-col items-center w-64 m-auto px-5 py-3 rounded-lg">
      <div class="flex gap-2 items-center text-white text-xl">
        Precio
        <span class="text-3xl font-semibold text-golden">
          {quantity}
        </span>
        kg:
      </div>
      <span class="text-3xl font-semibold text-orange">
        {price}
      </span>
    </div>
  );
};

export const PriceDisplay = ({
  priceKilogram,
  priceHalfKilogram,
  priceQuarterKilogram,
}) => {
  return (
    <div class="flex flex-col justify-center gap-11 sm:flex-row">
      {priceKilogram && (
        <PriceCard quantity="1 kg" price={formatCurrency(priceKilogram ?? 0)} />
      )}
      {priceHalfKilogram && (
        <PriceCard
          quantity="1/2 kg"
          price={formatCurrency(priceHalfKilogram ?? 0)}
        />
      )}
      {priceQuarterKilogram && (
        <PriceCard
          quantity="1/4 kg"
          price={formatCurrency(priceQuarterKilogram ?? 0)}
        />
      )}
    </div>
  );
};

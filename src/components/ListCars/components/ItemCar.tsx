import Image from "next/image";
import { FC } from "react";

interface ItemCarProps {
  imgSrc: string;
  imgAlt: string;
  mark_id: string;
  folder_id: string;
  price: string;
}

const ItemCar: FC<ItemCarProps> = ({
  imgSrc,
  imgAlt,
  mark_id,
  folder_id,
  price,
}) => {
  return (
    <div className="flex max-w-[400px] min-w-[180px] shrink grow basis-[180px] flex-col gap-[8px] overflow-hidden rounded-[10px] bg-white md:min-w-[225px] md:basis-[225px]">
      <Image src={imgSrc} width={400} height={300} alt={imgAlt} priority />

      <div className="flex max-h-[98px] grow flex-col p-[10px_16px_16px_16px]">
        <p className="mb-[8px] text-[12px] sm:text-[14px]">
          {mark_id} {folder_id}
        </p>
        <div className="mt-auto flex justify-between text-[12px] sm:text-[14px]">
          <p className="">
            {price} {"\u20BD"}
          </p>
          <button className="grow-0 cursor-pointer rounded-[8px] bg-blue-500 px-3 text-white">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCar;

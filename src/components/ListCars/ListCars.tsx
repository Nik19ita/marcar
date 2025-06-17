"use client";
import CarType from "@/types/CarType";
import { FC } from "react";
import ItemCar from "./components";

interface ListCarsProps {
  data?: CarType[];
}

const ListCars: FC<ListCarsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-[15px] sm:gap-[20px]">
      {data?.map((el: CarType) => (
        <ItemCar
          imgSrc={el?.images?.image[0]}
          imgAlt={el.mark_id}
          mark_id={el.mark_id}
          folder_id={el.folder_id}
          price={el.price}
          key={el.unique_id}
        />
      ))}
    </div>
  );
};

export default ListCars;

"use client";

import getNewSearchParamsForSelect from "@/helpers/getNewSearchParamsForSelect";
import SelectType from "@/types/SelectType";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const SelectSort = ({ selected }: { selected: SelectType }) => {
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const { replace } = useRouter();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    replace("?" + getNewSearchParamsForSelect(search, e.target.value));
  };
  return (
    <div className="w-full bg-white h-[50px] rounded-[10px] p-[12px]">
      <select
        name="sort"
        className="outline-none"
        onChange={handleSelect}
        defaultValue={selected}
      >
        <option value="default">Сортировка не выбрана</option>
        <option value="asc">Сортировка по возрастанию</option>
        <option value="desc">Сортировка по убыванию</option>
      </select>
    </div>
  );
};

export default SelectSort;

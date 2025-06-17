import SelectType from "@/types/SelectType";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function getData(
  URL: string,
  page: string,
  order: SelectType
): Promise<any> {
  const data = await fetch(
    `${URL}/cars?_limit=12&_page=${page}${order !== "default" ? `&_sort=price&_order=${order}` : ""}`
  );
  return data.json();
}

import ListCars from "@/components/ListCars";
import PaginationComponent from "@/components/PaginationComponent";
import SelectSort from "@/components/SelectSort";
import checkTypePage from "@/helpers/checkTypePage";
import checkTypeOrder from "@/helpers/checktypeSelect";
import getData from "@/server/getData";
import DataType from "@/types/DataType";
import { redirect } from "next/navigation";
import process from "process";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const { _page: page, _order: order } = searchParamsObj;

  if (!page) {
    redirect("/?_limit=12&_page=1");
  }

  const data: DataType = await getData(
    process.env.NEXT_PUBLIC_API_URL,
    checkTypePage(page),
    checkTypeOrder(order),
  );

  return (
    <main className="mx-auto flex max-w-[1240px] flex-col gap-[24px] p-[50px_20px_50px_20px]">
      <SelectSort selected={checkTypeOrder(order)} />
      <ListCars data={data?.data} />
      <PaginationComponent
        activePage={data?.meta?.page}
        countPages={data?.meta?.last_page}
      />
    </main>
  );
}

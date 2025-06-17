"use client";

import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface ListProps {
  countPages?: number;
  activePage?: number;
}

const PaginationComponent: FC<ListProps> = ({ countPages, activePage }) => {
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const { replace } = useRouter();
  return (
    <Pagination
      className="flex justify-center"
      count={countPages || 1}
      siblingCount={0}
      boundaryCount={1}
      variant="outlined"
      color="primary"
      page={activePage || 1}
      onChange={(_, value) => {
        const newValue = search
          .split("&")
          .map((el) => {
            if (el.includes("_page")) return `_page=${value}`;
            return el;
          })
          .join("&");
        replace("?" + newValue);
      }}
    />
  );
};

export default PaginationComponent;

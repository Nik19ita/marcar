export default function checkTypePage(page: string | string[] | undefined) {
  if (typeof page === "string") return page;
  return "";
}

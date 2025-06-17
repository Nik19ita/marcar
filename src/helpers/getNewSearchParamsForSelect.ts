export default function getNewSearchParamsForSelect(str: string, newValue: string) {
  if (str.includes("_order") && (newValue === "asc" || newValue === "desc")) {
    return str.split("&").reduce((acc, curr) => {
      if (curr.includes("_order")) {
        return acc + `_order=${newValue}`;
      } else {
        return acc + curr + "&";
      }
    }, "");
  } else if (
    !str.includes("_order") &&
    (newValue === "asc" || newValue === "desc")
  ) {
    return str.split("&").reduce((acc, curr, index, arr) => {
      if (arr.length === index + 1)
        return acc + curr + `&_sort=price&_order=${newValue}`;
      return acc + curr + "&";
    }, "");
  }

  return str.split("&_sort")[0];
}

import SelectType from "@/types/SelectType";

export default function checkTypeOrder(
  str: string | string[] | undefined
): SelectType {
  if (str == "asc" || str == "desc") return str;
  return "default";
}

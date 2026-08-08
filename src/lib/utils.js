import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn 约定的类名合并工具 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

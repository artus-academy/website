import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

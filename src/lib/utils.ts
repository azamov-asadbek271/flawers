import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getFormData (form:any) {
 const data:any = new FormData(form)
 const obj = {}
 for(const [key,value] of data.entries()) {
  obj[key] = value
  
 }
 return obj
 
}
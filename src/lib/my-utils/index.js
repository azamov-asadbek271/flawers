export function getFormData (form) {
 const data = new FormData(form)
 const obj = {}
 for(const [key,value] of data.entries()) {
  obj[key] = value
  
 }
 return obj
 
}

export function collectItem (array,item) {
  const result = []
  for(const obj of array) {
    result.push(obj[item])
  }
  return Array.from(new Set(result));
}

export const BASE_URl = "https://json-api.uz/api/project/flawers"
export const allowImageSize = 5_242_880;
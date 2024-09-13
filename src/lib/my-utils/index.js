export function getFormData (form) {
 const data = new FormData(form)
 const obj = {}
 for(const [key,value] of data.entries()) {
  obj[key] = value
  
 }
 return obj
 
}

export function collectCategory (categories) {
  const result = []
  for(const {category} of categories) {
    result.push(category)
  }
  return new Set(result)
}

export const BASE_URl = "https://json-api.uz/api/project/flawers"
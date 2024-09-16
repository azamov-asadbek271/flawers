import { BASE_URl } from "../lib/my-utils";

export async function refreshToken(token) {
  const res = await fetch(BASE_URl + "/auth/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  if (res.status === 200 || res.status === 201) return await res.json();
  if (res.status === 400) throw new Error("xatolik");
  else throw new Error(" nimadur xatolik boldi");
}

export async function login(data) {
  const res = await fetch(BASE_URl + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status === 200 || res.status === 201) return await res.json();
  if (res.status === 400)
    throw new Error("foydalanuvchini paroli va ismi xato kiritildi");
  else throw new Error("xatolik");
}

export async function getFlowers(token) {
  const res = await fetch(BASE_URl + "/flawers", {
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${token}`,
    },
  });
  if (res.status === 403) throw new Error(403);
  if (res.status === 200 || res.status === 201) return await res.json();
  else throw new Error("xatolik");
}
export async function uploadImage (img) {
  const formData = new FormData();
  formData.append("file",img)
  const res = await fetch(BASE_URl + "/upload", {
    method: "POST",
    body: formData,
  });
  if (res.status === 200 || res.status === 201) return res.text();
  else throw new Error("xatolik");
}

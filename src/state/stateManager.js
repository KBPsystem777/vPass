import { atom } from "jotai"

export const loginState = atom({
  email: "",
  password: "",
})

export const currentDate = atom(new Date().toJSON())

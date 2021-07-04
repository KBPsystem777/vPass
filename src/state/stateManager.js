import { atom } from "jotai"
import { v4 as uuidv4 } from "uuid"

export const loginState = atom({
  email: "",
  password: "",
})

export const userId = atom(uuidv4())

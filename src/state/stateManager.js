import { atom } from "jotai"
import { v4 as uuidv4 } from "uuid"

// Login Page
export const loginEmail = atom("")
export const loginPassword = atom("")

// User ID
export const userId = atom(uuidv4())

import { jwtDecode } from "jwt-decode"

export const Veifytoken = (token: string) => {
    return jwtDecode(token)
}
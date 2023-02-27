import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const isLoggedIn = () => {
    let session = JSON.parse(localStorage.getItem("session"));
    if (session?.access && session?.refresh) {
        return true
}

    return false
}
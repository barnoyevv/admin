import http from "./config"

const auth = {
	sign_up: (data)=> http.post(/auth/register, data)
}
export default auth
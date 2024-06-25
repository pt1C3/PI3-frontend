import axios from "axios";

const baseURL = 'http://localhost:3000';
class AuthService {
    login(email, password) {
        return axios
            .post(baseURL + "/user/login", { email, password })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            }, reason => { throw new Error('Utilizador Inválido'); });
    }
    logout() { localStorage.removeItem("user"); }
    getCurrentUser() { return JSON.parse(localStorage.getItem('user')); }
}
export default new AuthService();

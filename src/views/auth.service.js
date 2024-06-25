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
            }, reason => { throw new Error('Invalid User'); });
    }

    logout() { 
        localStorage.removeItem("user"); 
    }

    getCurrentUser() { 
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user).data : null; 
    }
}

export default new AuthService();

import axios from 'axios';

const API_URL = "http://127.0.0.1:5000";

const register = async (username: string, password: string) => {
    return await axios.post(`${API_URL}/register`, { username, password });
};

const login = async (username: string, password: string) => {
    return await axios.post(`${API_URL}/login`, { username, password });
};

const getProtectedData = async (token: string) => {
    return await axios.get(`${API_URL}/protected`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export default { register, login, getProtectedData };

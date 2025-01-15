import axios, { AxiosError } from "axios";

const API_URL = "http://127.0.0.1:5000";

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    const token = response.data.access_token;
    localStorage.setItem("token", token);

    return { status: 200 };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Registration failed:", axiosError.response?.status);
    } else {
      console.error("An unexpected error occurred:", error);
    }

    return { status: 401 };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data.access_token;
    localStorage.setItem("token", token);

    return { status: 200 };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Login failed:", axiosError.response?.status);
    } else {
      console.error("An unexpected error occurred:", error);
    }

    return { status: 401 };
  }
};

export const getProtectedData = (token: string) => {
  return axios.get(`${API_URL}/protected`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

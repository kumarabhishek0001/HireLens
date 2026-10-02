import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const loginAPI = async ({ email, password }) => {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log("Error at loginAPI", error);
  }
};

const registerAPI = async ({ username, email, password }) => {
  try {
    const response = await api.post("/api/auth/register", {
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Error at registerAPI", error);
  }
};

const logoutAPI = async() => {
    try {
        const response = await api.get("/api/auth/logout")
        return response.data
    } catch (error) {
        console.log("Error at logoutAPI", error)
    }
};
const getUserInfoAPI = async() => {
    try {
        const response = await api.get("/api/auth/get-me")
        return response.data
    } catch (error) {
        console.log("Error at getUserInfoAPI", error)
    }
};

export {registerAPI, loginAPI, logoutAPI, getUserInfoAPI}
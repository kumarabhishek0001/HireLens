import axios from "axios";
import logger from "../../../utils/logger";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

async function registerAPI({ username, email, password }) {
  try {
    const registerResponse = await api.post("/register", {
      email,
      password,
      username,
    });

    return registerResponse.data;
  } catch (error) {
    //! How to handle the error in the frontend
    logger.error("Error at registerAPI", error)
    throw error
  }
}

async function loginAPI({ email, password }) {
  try {
    const loginResponse = await api.post("/login", {
      email,
      password,
    });

    return loginResponse.data;
  } catch (error) {
    logger.error("Error at loginAPI", error)
    throw error
  }
}

async function logoutAPI(){
    try {
        const logoutResponse = await api.get("/logout")

        return logoutResponse.data
    } catch (error) {
        console.log("error at logoutAPI", error)
    }
}

async function getUserDetailsAPI(){
    try {
        const getUserDetailResponse = await api.get("/get-me")
        return getUserDetailResponse.data
    } catch (error) {
        console.log("Error at getUserDetailsAPI", error)
    }
}

export { registerAPI, loginAPI, logoutAPI, getUserDetailsAPI };

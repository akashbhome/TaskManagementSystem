import axios from 'axios';

const server = "http://localhost:3000";

export const loginUser = async (email, password) => {
  try {
    let res = await axios.post(`${server}/login`, { email, password });

    const token = res.data.token;

    if (token) {
      localStorage.setItem("token", token);   // 🔐 store token
    }

    console.log(res.data);
    return res.data;

  } catch (err) {
    console.error("Login error:", err);
    return null;
  }
};



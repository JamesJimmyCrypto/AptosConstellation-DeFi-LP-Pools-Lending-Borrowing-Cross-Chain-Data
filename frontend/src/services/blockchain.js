import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const createPool = async (tokenA, tokenB) => {
  try {
    const response = await axios.post(`${API_URL}/liquidity/create`, {
      tokenA,
      tokenB,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating pool:", error);
  }
};

export const addLiquidity = async (amountA, amountB) => {
  try {
    const response = await axios.post(`${API_URL}/liquidity/add`, {
      amountA,
      amountB,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding liquidity:", error);
  }
};

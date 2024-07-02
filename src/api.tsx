import axios from "axios";
const BASE_URL = "https://api.collectapi.com/economy";

const Hisse = async () => {
  const response = await axios.get(`${BASE_URL}/hisseSenedi`, {
    headers: {
      Authorization: "apikey 4EgGAM8sCfcjGmtPrgB0GB:6bPqLykR2r7GaTvjQfW7kM",
      "Content-Type": "application/json",
    },
  });
  return response.data.result;
};

const AllCurrency = async () => {
  const response = await axios.get(`${BASE_URL}/allCurrency`, {
    headers: {
      Authorization: "apikey 4EgGAM8sCfcjGmtPrgB0GB:6bPqLykR2r7GaTvjQfW7kM",
      "Content-Type": "application/json",
    },
  });
  return response.data.result;
};

const GoldPrice = async () => {
  const response = await axios.get(`${BASE_URL}/goldPrice`, {
    headers: {
      Authorization: "apikey 4EgGAM8sCfcjGmtPrgB0GB:6bPqLykR2r7GaTvjQfW7kM",
      "Content-Type": "application/json",
    },
  });
  return response.data.result;
};

const Cripto = async () => {
  const response = await axios.get(`${BASE_URL}/cripto`, {
    headers: {
      Authorization: "apikey 4EgGAM8sCfcjGmtPrgB0GB:6bPqLykR2r7GaTvjQfW7kM",
      "Content-Type": "application/json",
    },
  });
  return response.data.result;
};

export { Hisse, AllCurrency, GoldPrice, Cripto };

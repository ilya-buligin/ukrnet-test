import axios from "axios";

export const getCarInfo = carNumber =>
  axios(`${process.env.VUE_APP_API_URL}/car-info/${carNumber}`);

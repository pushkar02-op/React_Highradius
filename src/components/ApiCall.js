import axios from "axios";

const API_URL = "http://localhost:4000/cms/tovo/v1/getUserCallWorkBook.do";

const getData = async () => {
  const response = await axios(API_URL);
  console.log(response.data);
  return response.data;
};
export default getData;

import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const { API_END_POINT, API_KEY } = process.env;

const axiosInstance = axios.create({
  baseURL: API_END_POINT,
  params: { apikey: API_KEY },
});

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  //requset.body => post요청을 했을 때, request.qurey => get요청을 했을 떄
  // const { data } = await axios(API_END_POINT as string, {
  //   params: { apikey: API_KEY, ...request.body },
  // });

  const { data } = await axiosInstance({
    params: { ...request.body },
  });

  response.status(200).json(data);
}

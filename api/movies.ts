import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const { path } = JSON.parse(request.body);
  const res = await fetch(`${process.env.VUE_APP_MOVIE_AND_API}${path}`);
  return response.status(200).json(res);
}

// export default function (req: VercelRequest, res: VercelResponse) {
//   console.log(req.body);

//   res.status(200).json({
//     name: "jihj",
//     age: 88,
//     isValid: true,
//   });
// }

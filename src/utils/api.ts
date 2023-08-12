import { MOVIE_AND_API } from "~/utils/private_api_keys";

// export const request = async (url: string, options: RequestInit = {}) => {
//   try {
//     const res = await fetch(`${MOVIE_AND_API}${url}`, {
//       method: "POST",
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (!res.ok) {
//       throw new Error("API 호출 오류");
//     }
//     return await res.json();
//   } catch (error) {
//     if (error instanceof Error) {
//       alert(error.message);
//     }
//   }
// };

export const request = async (url: string) => {
  try {
    const res = await fetch(`${MOVIE_AND_API}${url}`);
    if (!res.ok) {
      throw new Error("API 호출 오류");
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};

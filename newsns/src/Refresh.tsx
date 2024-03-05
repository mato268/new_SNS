import { useToken } from "./LogIn";

const apiPath = process.env.REACT_APP_API_PATH || "";

export const Refresh = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const headers: HeadersInit = {};
  if (accessToken) {
    headers.Authorization = accessToken;
  }

  const getNewRefreshToken = async () => {
    try {
      const response = await fetch(apiPath + "access-token", {
        method: "POST",
        headers,
        body: refreshToken,
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("제출 실패");
      }

      if (data.success) {
        console.log("성공");
      } else {
        console.log("실패");
      }
      return data;
    } catch (error) {
      console.error("실패:", error);
    }
  };

  return getNewRefreshToken();
};

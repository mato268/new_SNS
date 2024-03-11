import { Refresh } from "./Refresh";
import { TokenForm } from "./hook/useTokenContext";

const apiPath = process.env.REACT_APP_API_PATH || "";

export const myInfo = async (accessToken: TokenForm) => {
  const headers: HeadersInit = {
    Authorization: accessToken ? `${accessToken}` : "",
  };

  try {
    const response = await fetch(apiPath + "my", {
      method: "GET",
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("제출 실패");
    }

    if (data.success) {
      console.log("성공");
      console.log(data);
    } else {
      console.log(data);
      console.log(`${data.message}`);
    }
    return data;
  } catch (error: any) {
    console.error("실패:", error);
    if (error.response.status === 401) {
      const { accessToken } = await Refresh();
      const updateHeaders = {
        ...headers,
        Authorization: accessToken,
      };
      return await fetch(apiPath + "my", {
        method: "GET",
        headers: updateHeaders.Authorization,
      });
    }
  }

  return myInfo;
};

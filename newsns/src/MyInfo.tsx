const apiPath = process.env.REACT_APP_API_PATH || "";

export const MyInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const headers: HeadersInit = {};
    if (accessToken) {
      headers.Authorization = accessToken;
    }

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
      console.log(`${data.message}`);
    }
    return data
  } catch (error) {
    console.error("실패:", error);
  }

  return MyInfo;
};

const apiPath = process.env.REACT_APP_API_PATH || "";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const headers: HeadersInit = {};
  if (accessToken) {
    headers.Authorization = accessToken;
  }

  const response = await fetch(apiPath + "access-token", {
    method: "POST",
    headers,
    body: refreshToken,
  });

  const data = await response.json();
  console.log(data)

  return data
};

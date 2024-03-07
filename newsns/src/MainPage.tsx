import { useEffect, useState } from "react";
import { myInfo } from "./MyInfo";
import { useToken } from "./hook/useTokenContext";

interface Info {
  nickname: string;
  id: string;
  email: string;
}

export const MainPage = () => {
  const [info, setInfo] = useState<Info | undefined>(undefined);
  const { accessToken } = useToken();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await myInfo(accessToken);
        setInfo(data);
      } catch (error) {
        console.error("실패", error);
      }
    };

    fetchInfo();
  }, );

  return (
    <div className="bg-deepdark w-full gap-6 h-full flex justify-center flex-col">
      <div>{info?.nickname}</div>
      <div>{info?.id}</div>
      <div>{info?.email}</div>
    </div>
  );
};

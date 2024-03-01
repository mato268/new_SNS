import { useEffect, useState } from "react";
import { MyInfo } from "./MyInfo";

interface Info {
  nickname: string;
  id: string;
  email: string;
}

export const MainPage = () => {
  const [info, setInfo] = useState<Info>();
  useEffect(() => {
    MyInfo().then(res => {
      setInfo(res);
    });
  }, []);

  return (
    <div className="bg-deepdark w-full gap-6 h-full flex justify-center flex-col">
      <div>{info?.nickname}</div>
      <div>{info?.id}</div>
      <div>{info?.email}</div>
    </div>
  );
};

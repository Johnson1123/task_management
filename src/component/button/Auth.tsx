import { useRouter } from "next/navigation";
import React from "react";

const Auth = () => {
  const route = useRouter();
  const handleRoute = () => {
    route.push("/login");
  };
  return (
    <button
      onClick={handleRoute}
      className="w-[180px] bg-blue-600 h-[45px] flex justify-center items-center rounded-md text-white"
    >
      Login
    </button>
  );
};

export default Auth;

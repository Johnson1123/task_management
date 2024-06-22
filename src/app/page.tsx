"use client";
import Auth from "@/component/button/Auth";
import useFetchHooks from "./hooks/useFetchHooks";

export default function Home() {
  const userId = window.localStorage.getItem("users");
  let user: number = 0;

  if (userId) {
    const userObj = JSON.parse(userId);

    user = userObj.UserID;
  }
  const task = useFetchHooks(user);

  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      {task?.lenght > 0 ? "work" : <Auth />}
    </main>
  );
}

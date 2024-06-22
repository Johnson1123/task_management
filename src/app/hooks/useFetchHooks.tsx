import React from "react";

type Props = {
  userId: number;
};

const useFetchHooks = (props: Props) => {
  const userTask = window.localStorage.getItem("task");
  if (!userTask) {
    return;
  }
  let tasks = JSON.parse(userTask);
  const task = tasks.filter((task: any) => task.userId == props.userId);
  return task;
};

export default useFetchHooks;

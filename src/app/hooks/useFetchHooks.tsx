const useFetchHooks = (userId: number) => {
  const userTask = window.localStorage.getItem("task");
  if (!userTask) {
    return;
  }
  let tasks = JSON.parse(userTask);
  const task = tasks.filter((task: any) => task.userId == userId);
  return task;
};

export default useFetchHooks;

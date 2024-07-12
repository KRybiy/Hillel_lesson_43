export const getTasksLeftMessage = (tasksLeft: number): string => {
  if (tasksLeft === 0) {
    return '0 tasks left. Great job!';
  }
  if (tasksLeft === 1) {
    return '1 task left';
  }
  return `${tasksLeft} tasks left`;
};

export const getTasksCompletedMessage = (tasksCompleted: number): string => {
  if (tasksCompleted === 0) {
    return '0 tasks completed. Keep going!';
  }
  if (tasksCompleted === 1) {
    return '1 task completed';
  }
  return `${tasksCompleted} tasks completed`;
};
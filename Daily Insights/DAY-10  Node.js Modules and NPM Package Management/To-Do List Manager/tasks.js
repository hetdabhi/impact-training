import fs from "fs-extra";
import chalk from "chalk";

const dataPath = "./data/tasks.json";

const loadTasks = () => {
  try {
    return fs.readJSONSync(dataPath);
  } catch {
    return [];
  }
};

const saveTasks = (tasks) => {
  fs.writeJSONSync(dataPath, tasks);
};

export const addTask = (title, description = "") => {
  const tasks = loadTasks();
  tasks.push({ id: tasks.length + 1, title, description, completed: false });
  saveTasks(tasks);
  console.log(chalk.green("Task added successfully!"));
};

export const listTasks = () => {
  const tasks = loadTasks();
  console.log(chalk.blue("Your Tasks:"));
  tasks.forEach((task) =>
    console.log(
      `${chalk.yellow(`ID: ${task.id}`)} - ${chalk.bold(task.title)} [${
        task.completed ? chalk.green("Completed") : chalk.red("Pending")
      }]`
    )
  );
};

export const deleteTask = (id) => {
  let tasks = loadTasks();
  const filteredTasks = tasks.filter((task) => task.id !== id);
  if (filteredTasks.length === tasks.length) {
    console.log(chalk.red("Task not found!"));
    return;
  }
  saveTasks(filteredTasks);
  console.log(chalk.red("Task deleted successfully!"));
};

export const markTaskComplete = (id) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    saveTasks(tasks);
    console.log(chalk.green("Task marked as completed!"));
  } else {
    console.log(chalk.red("Task not found!"));
  }
};

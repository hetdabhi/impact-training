import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import { addTask, listTasks, deleteTask, markTaskComplete } from "./tasks.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a new task",
    builder: {
      title: { describe: "Task title", demandOption: true, type: "string" },
      description: { describe: "Task description", type: "string" },
    },
    handler(argv) {
      addTask(argv.title, argv.description);
    },
  })
  .command({
    command: "list",
    describe: "List all tasks",
    handler() {
      listTasks();
    },
  })
  .command({
    command: "delete",
    describe: "Delete a task by ID",
    builder: {
      id: { describe: "Task ID", demandOption: true, type: "number" },
    },
    handler(argv) {
      deleteTask(argv.id);
    },
  })
  .command({
    command: "complete",
    describe: "Mark a task as completed",
    builder: {
      id: { describe: "Task ID", demandOption: true, type: "number" },
    },
    handler(argv) {
      markTaskComplete(argv.id);
    },
  })
  .parse();

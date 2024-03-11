type TaskTypes = {
    id: number,
    name: string
  }

  type FormTypes = {
    handleInputUpdate:(e: React.ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void,
    inputValue: string
}

type TaskListTypes = {
  tasks: TaskTypes[],
  deleteTask: (taskId: number) => void
};

export type {TaskTypes, FormTypes, TaskListTypes}
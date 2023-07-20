/* eslint-disable react/prop-types */
import { TextInput } from '@mantine/core';

const Task = ({ task, onEditTask }) => {
  return (
    <TextInput
      maw={150}
      value={task.name}
      onChange={(e) => onEditTask(task.id, e.currentTarget.value)}
    />
  );
};

export default Task;

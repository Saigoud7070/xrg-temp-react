/* eslint-disable react/prop-types */
import { TextInput,Button } from '@mantine/core';

const Task = ({ task, onEditTask,onDeleteTask }) => {
  return (
    <div>
        <TextInput
          maw={150}
          value={task.name}
          mb={4}
          onChange={(e) => onEditTask(task.id, e.currentTarget.value)}
        />
        <Button  onClick={()=>onDeleteTask(task.id)}>Delete</Button>
    </div>
  );
};

export default Task;

import { useState } from 'react';
import { Container, Flex } from '@mantine/core';
import AddTask from './AddTask';
import Task from './Task';
import NoTasks from './NoTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (value) => {
    setTasks((prev) => [...prev, { id: Date.now(), name: value }]);
  };

  const onEditTask = (id, name) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, name } : task)),
    );
  };

  return (
    <Container mt={10}>
      <AddTask onAddTask={onAddTask} />
      {tasks.length === 0 && <NoTasks />}
      <Flex
        mt={10}
        gap="sm"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        {tasks.map((task) => (
          <Task key={task.id} task={task} onEditTask={onEditTask} />
        ))}
      </Flex>
    </Container>
  );
};

export default App;

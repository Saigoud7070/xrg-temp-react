/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { Button, Flex, TextInput } from '@mantine/core';

const AddTask = ({ onAddTask }) => {
  const [value, setValue] = useState('');
  const addTaskRef = useRef(null);

  const handleAddTask = () => {
    if (!value) return;
    onAddTask(value);
    setValue('');
    addTaskRef.current.focus();
  };

  return (
    <Flex gap="sm" justify="center" align="center" direction="row" wrap="wrap">
      <TextInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Task Name"
        radius="xs"
        ref={addTaskRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask();
          }
        }}
      />
      <Button disabled={!value} onClick={handleAddTask}>
        +
      </Button>
    </Flex>
  );
};

export default AddTask;

import { Flex, Text } from '@mantine/core';

const NoTasks = () => {
  return (
    <Flex
      mt={10}
      gap="sm"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Text fw={700}>No Tasks Added Yet</Text>
    </Flex>
  );
};

export default NoTasks;

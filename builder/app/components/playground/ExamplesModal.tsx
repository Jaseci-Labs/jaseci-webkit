import { Button, Divider, Group, Modal, Space, Title } from "@mantine/core";
import React from "react";
import chatbox from "~/data/examples/chatbox.json";
import counter from "~/data/examples/counter.json";
import operationsBasic from "~/data/examples/operations-basic.json";

const ExamplesModal = ({ opened, setOpened, onRunExample }: any) => {
  return (
    <div>
      <Modal
        opened={opened}
        title="View Examples"
        withCloseButton
        transition="rotate-left"
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Divider></Divider>
        <Space h="md"></Space>
        <Group>
          <Title order={5}>Chatbox Example</Title>
          <Button size="xs" onClick={() => onRunExample(chatbox)}>
            Play Example
          </Button>
        </Group>
        <Space h="md"></Space>
        <Divider></Divider>

        <Space h="xl"></Space>

        <Divider></Divider>
        <Space h="md"></Space>
        <Group>
          <Title order={5}>Counter Example</Title>
          <Button size="xs" onClick={() => onRunExample(counter)}>
            Play Example
          </Button>
        </Group>
        <Space h="md"></Space>
        <Divider></Divider>

        <Space h="xl"></Space>

        <Divider></Divider>
        <Space h="md"></Space>
        <Group>
          <Title order={5}>Operations Example</Title>
          <Button size="xs" onClick={() => onRunExample(operationsBasic)}>
            Play Example
          </Button>
        </Group>
        <Space h="md"></Space>
        <Divider></Divider>
      </Modal>
    </div>
  );
};

export default ExamplesModal;

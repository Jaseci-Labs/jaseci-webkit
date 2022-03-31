import {
  Button,
  Group,
  Modal,
  Select,
  Space,
  TextInput,
  Title,
} from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { jaseciComps } from "../data/jsc-comps";
import { jaseciEvents } from "../data/jsc-events";

const AddComponentModal = ({ opened, setOpened, onInsertComponent }) => {
  const [component, setComponent] = useState<{
    component: string;
    props: Record<string, string>;
    events: {};
  }>({ component: "", props: {}, events: {} });

  const [newEvent, setNewEvent] = useState({ name: "", data: {} });

  const setComponentType = (componentType: string) => {
    setComponent((currentComp) => ({
      ...currentComp,
      component: componentType,
    }));
  };

  const setProperty = (e: ChangeEvent<HTMLInputElement>) => {
    setComponent((currentComp) => ({
      ...currentComp,
      props: {
        ...currentComp?.props,
        [e.target?.name]: e?.target?.value,
      },
    }));
  };

  return (
    <div>
      <Modal
        opened={opened}
        title="Add Component"
        withCloseButton
        transition="rotate-left"
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Group>
          {Object.keys(jaseciComps).map((componentType, index) => (
            <Button onClick={() => setComponentType(componentType)} key={index}>
              {componentType}
            </Button>
          ))}
        </Group>

        {JSON.stringify(component)}
        {JSON.stringify(newEvent)}

        {component?.component && (
          <div>
            <Title order={3}>Properties</Title>
            {jaseciComps[component?.component].props?.map(
              (prop: any, index: number) => (
                <TextInput
                  key={index}
                  name={prop.name}
                  label={prop.label}
                  onChange={setProperty}
                ></TextInput>
              )
            )}

            <Space h="lg"></Space>

            <Title order={3}>Events</Title>
            <Select
              label="Choose a Trigger"
              placeholder="Pick one"
              onChange={(value) => {
                setNewEvent((newEventBody) => ({
                  ...newEventBody,
                  name: value,
                }));
              }}
              data={[
                ...Object.keys(jaseciEvents).map((eventName) => ({
                  value: eventName,
                  label: eventName,
                })),
              ]}
            />

            {jaseciEvents[newEvent.name]?.fields?.map((field, index) => (
              <>
                {field.type === "input" && (
                  <TextInput
                    name={field.name}
                    label={field.label}
                    key={index}
                  ></TextInput>
                )}

                {field.type === "select" && (
                  <Select
                    name={field.name}
                    label={field.label}
                    data={field.data}
                    // creatable={field.createable}
                    searchable
                    // getCreateLabel={(query) =>
                    //   `+ Use JavaScript Function '${query}'`
                    // }
                    key={index}
                  ></Select>
                )}
              </>
            ))}

            <Space h="md"></Space>
            <Button variant="outline">Add Event</Button>
          </div>
        )}

        <Space h="lg"></Space>
        <Button onClick={() => onInsertComponent(component)} color="indigo">
          Insert
        </Button>
      </Modal>
    </div>
  );
};

export default AddComponentModal;

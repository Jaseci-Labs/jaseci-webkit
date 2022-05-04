import {
  Button,
  Group,
  InputWrapper,
  Modal,
  Select,
  Space,
  Text,
  TextInput,
  JsonInput,
  Title,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import React, { useCallback, useState } from "react";
import { jaseciComps } from "~/data/jsc-comps";
import { actions, jaseciEvents } from "~/data/jsc-events";

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const AddComponentModal = ({ opened, setOpened, onInsertComponent }: any) => {
  const [component, setComponent] = useState<{
    component: string;
    props: Record<string, string>;
    events: {};
  }>({ component: "", props: {}, events: {} });
const [css, setCSS] = useState("")
  const [newEvent, setNewEvent] = useState<any>({
    name: "",
    data: {},
    args: [],
  });

  const setComponentType = (componentType: string) => {
    setComponent((currentComp) => ({
      component: componentType,
      events: {},
      props: {},
    }));
  };

  const setComponentCSS = (css: string) => {
    setComponent((currentComp) => ({
      ...currentComp,
      css: JSON.parse(css)
    }));
  }

  const setProperty = (name: string, value: string) => {
    setComponent((currentComp) => ({
      ...currentComp,
      props: {
        ...currentComp?.props,
        [name]: value,
      },
    }));
  };

  const onAddEvent = useCallback(() => {
    if (newEvent.name) {
      setComponent((currentComponentValue: any) => {
        let events = currentComponentValue?.events
          ? { ...currentComponentValue.events }
          : {};

        events = {
          ...events,
          [newEvent.name]: [
            Array.isArray(currentComponentValue?.events?.[newEvent.name]) && [
              ...currentComponentValue?.events?.[newEvent.name],
            ],
            { ...newEvent.data },
          ]
            .flat()
            .filter((item) => Object.keys(item).length > 0),
        };

        const updatedComp = {
          ...currentComponentValue,
          events,
        };

        return updatedComp;
      });

      setNewEvent({ name: "", data: {}, args: [] });
    }
  }, [newEvent]);

  const setNewEventArgs = (index: number, value: number | string) => {
    setNewEvent((currentNewEventValue: any) => {
      const args = [...currentNewEventValue?.args];
      args[index] = value;

      return {
        ...currentNewEventValue,
        data: { ...currentNewEventValue.data, args },
        args,
      };
    });
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
        <InputWrapper label="Choose Component Type">
          <Group>
            {Object.keys(jaseciComps).map((componentType) => (
              <Button
                variant="outline"
                onClick={() => setComponentType(componentType)}
                key={componentType}
              >
                {componentType}
              </Button>
            ))}
          </Group>
        </InputWrapper>
        <Space h="md"></Space>
        <Text>Preview:</Text>
        <Prism language="json" sx={{ maxHeight: "200px", overflow: "auto" }}>
          {JSON.stringify(component, null, 2)}
        </Prism>


        {component?.component && (
          <div>
            <Title order={3}>Properties</Title>
            {jaseciComps[component?.component].props?.map(
              (prop: any, index: number) => (
                <div key={prop.name}>
                  {prop.type === "input" && (
                    <>
                      <TextInput
                        key={index}
                        name={prop.name}
                        label={prop.label}
                        onChange={(e) => setProperty(prop.name, e.target.value)}
                      ></TextInput>
                    </>
                  )}

                  {prop.type === "select" && (
                    <>
                      <Select
                        name={prop.name}
                        label={prop.label}
                        data={prop.data}
                        searchable
                        onChange={(value: any) => setProperty(prop.name, value)}
                      ></Select>
                    </>
                  )}
                </div>
              )
            )}

            <Space h="lg"></Space>

            <Title order={3}>Events</Title>
            <Select
              label="Choose a Trigger"
              placeholder="Pick one"
              onChange={(value) => {
                setNewEvent((newEventBody: any) => ({
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

            {jaseciEvents[newEvent.name]?.fields?.map((field: any) => (
              <div key={field.name}>
                {field.type === "input" && (
                  <TextInput
                    name={field.name}
                    label={field.label}
                    onChange={(e) => {
                      alert(e?.target?.value);
                      setNewEvent((currentNewEventValue: any) => ({
                        ...currentNewEventValue,
                        data: {
                          ...currentNewEventValue?.data,
                          [e.target?.name]: e.target?.value,
                        },
                      }));
                    }}
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
                    onChange={(value) => {
                      setNewEvent((currentNewEventValue: any) => ({
                        ...currentNewEventValue,
                        data: {
                          ...currentNewEventValue?.data,
                          [field.name]: value,
                        },
                      }));
                    }}
                  ></Select>
                )}
              </div>
            ))}

            {newEvent?.data?.["fn"] && (
              <>
                {actions &&
                  actions
                    .filter(
                      (action: any) => action.value === newEvent?.data?.["fn"]
                    )
                    .pop()
                    ?.args?.map((arg: any, index: any) => (
                      <div key={arg.name}>
                        <TextInput
                          label={arg.label}
                          onChange={(e) =>
                            setNewEventArgs(index, e.target?.value)
                          }
                          name={arg.name}
                        ></TextInput>
                      </div>
                    ))}
              </>
            )}

            <Space h="md"></Space>
            <Button variant="outline" onClick={onAddEvent}>
              Add Event
            </Button>


        <Space h="md"></Space>
        <Title order={3}>Styles</Title>
        <JsonInput label="Styles (JSON)" placeholder="Enter styles object" formatOnBlur minRows={4} 
          value={css} onChange={value => {
              setCSS(value)

              if(isJsonString(value)) {
                setComponentCSS(value)
              }
            }} />
          </div>
        )}

        

        <Space h="lg"></Space>
        <Button onClick={() => onInsertComponent(component)}>Insert</Button>
      </Modal>
    </div>
  );
};

export default AddComponentModal;

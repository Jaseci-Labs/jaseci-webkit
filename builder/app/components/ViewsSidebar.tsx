import {
  Button,
  Box,
  Stack,
  Modal,
  SegmentedControl,
  TextInput,
  Group,
} from "@mantine/core";
import type { TabFile } from "@prisma/client";
import React from "react";
import { Form } from "remix";
import { BrandHtml5, Plus, VectorTriangle } from "tabler-icons-react";

const ViewsSidebar = ({ tabFiles }: { tabFiles: TabFile[] }) => {
  const [showNewItemModal, setShowNewItemModal] = React.useState(false);
  return (
    <Box
      sx={{
        background: "#202327",
        height: "100%",
        borderLeft: "1px solid #484f567d",
      }}
    >
      <Stack
        align="left"
        px="md"
        py="md"
        sx={{ color: "#9c9692" }}
        spacing="xs"
      >
        <Button
          size="xs"
          variant="subtle"
          color="gray"
          leftIcon={<Plus></Plus>}
          compact
          sx={{ fontFamily: "sans-serif" }}
          onClick={() => setShowNewItemModal(true)}
        >
          New
        </Button>
        {tabFiles.map((tabFile) => (
          <Box key={tabFile.id} sx={{ width: "100%" }}>
            <Form method="post" style={{ width: "100%" }}>
              <input hidden name="tabFileId" value={tabFile.id}></input>
              <Button
                size="xs"
                variant="subtle"
                color="gray"
                leftIcon={
                  tabFile.ext === "jac" ? (
                    <VectorTriangle></VectorTriangle>
                  ) : (
                    <BrandHtml5></BrandHtml5>
                  )
                }
                compact
                type="submit"
                name="_action"
                value="openTabItem"
                sx={{ fontFamily: "sans-serif" }}
                fullWidth
              >
                {tabFile.ext === "jac" ? tabFile.name + ".jac" : tabFile.name}
              </Button>
            </Form>
          </Box>
        ))}
      </Stack>
      <NewItemModal
        opened={showNewItemModal}
        onClose={() => setShowNewItemModal(false)}
      ></NewItemModal>
    </Box>
  );
};

const NewItemModal = ({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) => {
  const [tabFileType, setTabFileType] = React.useState("View");

  return (
    <Modal title="Add Item" opened={opened} onClose={onClose}>
      <SegmentedControl
        mb="lg"
        value={tabFileType}
        onChange={setTabFileType}
        data={[
          { label: "View", value: "View" },
          { label: "Jac File", value: "Jac" },
        ]}
      />
      {tabFileType === "View" && (
        <Form method="post">
          <TextInput name="name" label="Name"></TextInput>

          <input name="type" value={tabFileType} hidden></input>
          <input name="ext" value="json" hidden></input>
          <input name="content" value="" hidden></input>

          <Group position="right" mt="lg">
            <Button name="_action" value="createTabItem" type="submit">
              Create View
            </Button>
          </Group>
        </Form>
      )}

      {tabFileType === "Jac" && (
        <Form method="post">
          <TextInput name="name" label="Name"></TextInput>

          <input name="type" value={tabFileType} hidden></input>
          <input name="ext" value="jac" hidden></input>
          <input name="content" value="" hidden></input>

          <Group position="right" mt="lg">
            <Button name="_action" value="createTabItem" type="submit">
              Create Jac File
            </Button>
          </Group>
        </Form>
      )}
    </Modal>
  );
};

export default ViewsSidebar;

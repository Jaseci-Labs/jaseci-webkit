import {
  Button,
  Box,
  Stack,
  Modal,
  SegmentedControl,
  TextInput,
  Group,
  Menu,
} from "@mantine/core";
import { useClickOutside, useDisclosure, useHotkeys } from "@mantine/hooks";
import type { TabFile } from "@prisma/client";
import type { ReactElement } from "react";
import React from "react";
import { Form, useActionData } from "@remix-run/react";
import {
  BrandHtml5,
  File,
  Plus,
  Star,
  Trash,
  VectorTriangle,
} from "tabler-icons-react";

const ViewsSidebar = ({
  tabFiles,
  homepage,
}: {
  tabFiles: TabFile[];
  homepage: TabFile | null | undefined;
}) => {
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
          <FileItem
            isHomepage={tabFile.id === homepage?.id}
            tabFile={tabFile}
            key={tabFile.id}
          ></FileItem>
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
  const actionData = useActionData();

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
      <Form method="post">
        <TextInput
          name="name"
          label="Name"
          error={actionData?.errors?.name?.message}
        ></TextInput>

        <input name="type" value={tabFileType} hidden></input>
        <input
          name="ext"
          value={tabFileType === "View" ? "json" : "jac"}
          hidden
        ></input>
        <input name="content" value="" hidden></input>

        <Group position="right" mt="lg">
          <Button name="_action" value="createTabItem" type="submit">
            Create View
          </Button>
        </Group>
      </Form>
    </Modal>
  );
};

const FileMenu = ({
  control,
  opened,
  tabFileId,
  onClose,
  tabFileName,
}: {
  control: ReactElement<any, any>;
  opened: boolean;
  onClose: () => void;
  tabFileId: string;
  tabFileName: string;
}) => {
  const [showRenameFileItemDialog, renameDialogHandlers] = useDisclosure(false);
  const [showDeleteFileItemDialog, deleteDialogHandlers] = useDisclosure(false);
  const ref = useClickOutside(() => onClose());

  useHotkeys([["Escape", () => onClose()]]);

  return (
    <>
      <Menu
        ref={ref}
        closeOnScroll={true}
        opened={opened}
        control={control}
        position="right"
      >
        <Menu.Item
          onClick={() => {
            onClose();
            renameDialogHandlers.open();
          }}
          icon={<File size={14} />}
        >
          Rename
        </Menu.Item>
        <Menu.Item
          name="_action"
          value="deleteTabItem"
          icon={<Trash size={14} />}
          onClick={() => {
            onClose();
            deleteDialogHandlers.open();
          }}
        >
          Delete
        </Menu.Item>
      </Menu>

      <RenameFileItemDialog
        onClose={renameDialogHandlers.close}
        opened={showRenameFileItemDialog}
        tabFileName={tabFileName}
        tabFileId={tabFileId}
      />

      <DeleteFileItemDialog
        onClose={deleteDialogHandlers.close}
        opened={showDeleteFileItemDialog}
        tabFileId={tabFileId}
      />
    </>
  );
};

const FileItem = ({
  tabFile,
  isHomepage,
}: {
  tabFile: TabFile;
  isHomepage: boolean;
}) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <Box key={tabFile.id} sx={{ width: "100%" }}>
      <Form method="post" style={{ width: "100%" }}>
        <input hidden name="tabFileId" value={tabFile.id}></input>
        <FileMenu
          tabFileId={tabFile.id}
          opened={opened}
          onClose={handlers.close}
          tabFileName={tabFile.name}
          control={
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
              rightIcon={isHomepage ? <Star size={14}></Star> : undefined}
              compact
              type="submit"
              name="_action"
              styles={(theme) => ({
                rightIcon: { marginLeft: 6, color: theme.colors.orange[8] },
              })}
              value="openTabItem"
              sx={{ fontFamily: "sans-serif" }}
              fullWidth
              onContextMenu={(e: any) => {
                e.preventDefault();
                handlers.toggle();
              }}
            >
              {tabFile.ext === "jac" ? tabFile.name + ".jac" : tabFile.name}
            </Button>
          }
        ></FileMenu>
      </Form>
    </Box>
  );
};

const RenameFileItemDialog = ({
  opened,
  onClose,
  tabFileName,
  tabFileId,
}: {
  opened: boolean;
  onClose: () => void;
  tabFileName: string;
  tabFileId: string;
}) => {
  const actionData = useActionData();
  return (
    <Modal title="Rename File" onClose={onClose} opened={opened}>
      <Form method="post">
        <input hidden name="tabFileId" value={tabFileId}></input>
        <TextInput
          defaultValue={tabFileName}
          name="name"
          label="Name"
          error={actionData?.errors?.name?.message}
        ></TextInput>
        <Button mt="lg" type="submit" name="_action" value="renameTabItem">
          Change Name
        </Button>
      </Form>
    </Modal>
  );
};

const DeleteFileItemDialog = ({
  opened,
  onClose,
  tabFileId,
}: {
  opened: boolean;
  onClose: () => void;
  tabFileId: string;
}) => {
  return (
    <Modal
      title="Are you sure you want to delete this file?"
      onClose={onClose}
      opened={opened}
    >
      <Form method="post">
        <input hidden name="tabFileId" value={tabFileId}></input>

        <Group position="apart">
          <Button color="teal" onClick={onClose}>
            No
          </Button>
          <Button
            color="red"
            type="submit"
            mt="lg"
            name="_action"
            value="deleteTabItem"
          >
            Yes
          </Button>
        </Group>
      </Form>
    </Modal>
  );
};

export default ViewsSidebar;

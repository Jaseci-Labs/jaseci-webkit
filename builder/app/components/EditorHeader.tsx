import {
  ActionIcon,
  Box,
  Group,
  Kbd,
  Menu,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure, useHotkeys, useHover } from "@mantine/hooks";
import type { TabFile } from "@prisma/client";
import React from "react";
import { Form, Link, useNavigate, useParams } from "@remix-run/react";

import {
  Braces,
  BrandHtml5,
  InfoSquare,
  LayoutColumns,
  Menu as MenuIcon,
  NewSection,
  PlayerPlay,
  VectorTriangle,
  X,
  File,
  DeviceFloppy,
} from "tabler-icons-react";
import AddComponentModal from "./playground/AddComponentModal";
import ExamplesModal from "./playground/ExamplesModal";
import ImportExportModal from "./playground/ImportExportModal";

const EditorHeader = ({
  openTabs,
  onClickRun,
  onClickSave,
  onClickFormat,
  onTogglePreview,
  onInsertComponent,
  onRunExample,
}: {
  openTabs: TabFile[];
  onClickRun: () => void;
  onClickSave: () => void;
  onRunExample: (example: Record<any, any>) => void;
  onClickFormat: () => void;
  onTogglePreview: () => void;
  onInsertComponent: (component: Record<any, any>) => void;
}) => {
  const { projectId } = useParams();
  const { tabId } = useParams();
  const navigate = useNavigate();
  const [showNewComponentDialog, newComponentDialogHandlers] =
    useDisclosure(false);
  const [showExamplesDialog, examplesDialogHandlers] = useDisclosure(false);
  const [showImportExportDialog, importExportDialogHandlers] =
    useDisclosure(false);

  // useHotkeys([["alt+N", () => newComponentDialogHandlers.open()]]);

  return (
    <>
      <ExamplesModal
        onClose={examplesDialogHandlers.close}
        onRunExample={(example) => onRunExample(example)}
        opened={showExamplesDialog}
      ></ExamplesModal>

      <AddComponentModal
        opened={showNewComponentDialog}
        onInsertComponent={(component) => {
          newComponentDialogHandlers.close();
          onInsertComponent(component);
        }}
        onClose={() => newComponentDialogHandlers.close()}
      ></AddComponentModal>

      <Group
        position="apart"
        sx={{
          height: "40px",
          width: "100%",
          background: "#202327",
          borderBottom: "1px solid #484f567d",
        }}
      >
        <Group sx={{ height: "100%", gap: 0, maxWidth: "80%" }}>
          {openTabs.map((tab) => (
            <EditorTab
              key={tab.id}
              ext={tab.ext || ""}
              active={tabId == tab.id}
              title={tab.name}
              onClick={() => {
                navigate(`/studio/${projectId}/editor/tab/${tab.id}`);
              }}
              id={tab.id}
            />
          ))}
        </Group>
        {/* Action Icons */}
        <Group px="md" spacing={2}>
          <Group px="md" spacing={1}>
            <ActionIcon onClick={onClickRun} color="teal" variant="filled">
              <PlayerPlay size={16}></PlayerPlay>
            </ActionIcon>
          </Group>

          <ActionIcon onClick={onClickSave} color="teal" variant="filled">
            <DeviceFloppy size={16}></DeviceFloppy>
          </ActionIcon>

          <ActionIcon color="indigo" onClick={onTogglePreview} variant="filled">
            <LayoutColumns size={16}></LayoutColumns>
          </ActionIcon>
          <Tooltip
            label={
              <Text>
                Format <Kbd ml="xs">CTRL</Kbd> + <Kbd>SHIFT</Kbd> + <Kbd>F</Kbd>
              </Text>
            }
            position="bottom"
            withArrow
          >
            <ActionIcon onClick={onClickFormat}>
              <Braces size={16} color={"#9ba9b8"}></Braces>
            </ActionIcon>
          </Tooltip>

          <Menu
            color={"red"}
            control={
              <Tooltip
                label={
                  <Text>
                    More Actions <Kbd ml="xs">CTRL</Kbd> + <Kbd>M</Kbd>
                  </Text>
                }
                position="bottom"
                withArrow
              >
                <ActionIcon>
                  <MenuIcon size={16} color={"#9ba9b8"}></MenuIcon>
                </ActionIcon>
              </Tooltip>
            }
          >
            <Menu.Label>Actions</Menu.Label>
            <Menu.Item
              onClick={newComponentDialogHandlers.open}
              icon={<NewSection></NewSection>}
            >
              Add a Component
              <Box mt="xs">
                <Kbd my="md">CTRL</Kbd> + <Kbd my="md">N</Kbd>
              </Box>
            </Menu.Item>
            <Menu.Item
              onClick={examplesDialogHandlers.open}
              icon={<InfoSquare></InfoSquare>}
            >
              Examples
              <Box mt="xs">
                <Kbd my="md">CTRL</Kbd> + <Kbd my="md">E</Kbd>
              </Box>
            </Menu.Item>

            <Menu.Item component={Link} icon={<File></File>} to="port">
              Import/Export
              <Box mt="xs">
                <Kbd my="md">CTRL</Kbd> + <Kbd my="md">E</Kbd>
              </Box>
            </Menu.Item>
          </Menu>
        </Group>
      </Group>
    </>
  );
};

type EditorTabProps = {
  title: string;
  ext: string;
  active?: boolean;
  onClick?: () => void;
  id: string;
};

function EditorTab({ title, active, onClick, ext, id }: EditorTabProps) {
  const { hovered, ref } = useHover();

  return (
    <Box
      ref={ref}
      onClick={onClick}
      sx={{
        background: active ? "#1E1E1E" : "transparent",
        height: "100%",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        cursor: "pointer",
      }}
      px="md"
    >
      {ext === "jac" ? (
        <VectorTriangle></VectorTriangle>
      ) : (
        <BrandHtml5></BrandHtml5>
      )}
      <Text sx={{ marginLeft: "4px" }}>
        {ext === "jac" ? title + ".jac" : title}
      </Text>
      <Form method="post">
        <input name="tabFileId" value={id} hidden></input>
        <input name="_action" value="closeTabItem" hidden></input>
        <ActionIcon
          type="submit"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
          }}
          sx={{
            opacity: hovered || active ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
          ml="xs"
          size="sm"
        >
          <X size={14}></X>
        </ActionIcon>
      </Form>
    </Box>
  );
}
export default EditorHeader;

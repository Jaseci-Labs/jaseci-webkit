import {
  ActionIcon,
  Box,
  Group,
  Kbd,
  Menu,
  Text,
  Tooltip,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { TabFile } from "@prisma/client";
import React from "react";
import { Form, Link, useNavigate, useParams, useSearchParams } from "remix";

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
} from "tabler-icons-react";

const EditorHeader = ({
  openTabs,
  onClickRun,
  onClickFormat,
  onTogglePreview,
}: {
  openTabs: TabFile[];
  onClickRun: () => void;
  onClickFormat: () => void;
  onTogglePreview: () => void;
}) => {
  const { projectId } = useParams();
  const { tabId } = useParams();
  const navigate = useNavigate();

  return (
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
            ext={tab.ext}
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
          <Menu.Item icon={<NewSection></NewSection>}>
            Add Component
            <Box mt="xs">
              <Kbd my="md">CTRL</Kbd> + <Kbd my="md">N</Kbd>
            </Box>
          </Menu.Item>
          <Menu.Item icon={<InfoSquare></InfoSquare>}>
            Examples
            <Box mt="xs">
              <Kbd my="md">CTRL</Kbd> + <Kbd my="md">E</Kbd>
            </Box>
          </Menu.Item>
        </Menu>
      </Group>
    </Group>
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

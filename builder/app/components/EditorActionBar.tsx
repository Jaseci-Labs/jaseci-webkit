import { ActionIcon, Box, Stack, Tooltip, Text, Kbd } from "@mantine/core";
import React from "react";
import { Link, useParams, useSearchParams } from "remix";
import { Browser, Home, VectorTriangle } from "tabler-icons-react";

const EditorActionBar = () => {
  const { projectId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Box sx={{ background: "#202327", width: 48 }}>
      <Stack align="center" py="md" sx={{ color: "#9c9692" }}>
        <Tooltip
          label={
            <Text>
              Overview <Kbd ml="xs">gH</Kbd>
            </Text>
          }
          position="right"
          withArrow
        >
          <Link to={`/studio/${projectId}`}>
            <ActionIcon>
              <Home size={32}></Home>
            </ActionIcon>
          </Link>
        </Tooltip>

        <Tooltip
          label={
            <Text>
              Views <Kbd ml="xs">gV</Kbd>
            </Text>
          }
          position="right"
          withArrow
        >
          <Link to={`/studio/${projectId}/editor/tab/blank`}>
            <ActionIcon
              onClick={() => {
                if (!searchParams.get("showViews")) {
                  searchParams.append("showViews", "true");
                } else {
                  searchParams.delete("showViews");
                }
                setSearchParams(searchParams);
              }}
            >
              <Browser size={32}></Browser>
            </ActionIcon>
          </Link>
        </Tooltip>

        {/* graphs */}
        <Tooltip
          label={
            <Text>
              Graphs <Kbd ml="xs">gG</Kbd>
            </Text>
          }
          position="right"
          withArrow
        >
          <Link to={`/studio/${projectId}/graphs`}>
            <ActionIcon>
              <VectorTriangle size={32}></VectorTriangle>
            </ActionIcon>
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default EditorActionBar;

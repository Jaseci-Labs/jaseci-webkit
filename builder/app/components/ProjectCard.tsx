import {
  ActionIcon,
  Button,
  createStyles,
  Group,
  Menu,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconBriefcase, IconMenu2 } from "@tabler/icons";
import { Project } from "@prisma/client";
import { Link } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.xs,
      transform: "scale(1.015)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 4,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));

export function ProjectCard({ project }: { project: Partial<Project> }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Group position="right">
        <ProjectMenu projectId={project.id || ""}></ProjectMenu>
      </Group>
      <Group position={"apart"} spacing={"xs"} align={"center"}>
        <Group>
          <ThemeIcon size="lg" radius="md" variant="light">
            <IconBriefcase size={21} stroke={1.5} />
          </ThemeIcon>

          <Text size="lg" my={"sm"} weight={500}>
            {project.title}
          </Text>
        </Group>
      </Group>

      <Group position={"right"}>
        <Button.Group>
          <Button
            variant={"default"}
            component={Link}
            to={`/studio/${project.id}/editor/tab/blank`}
          >
            Editor
          </Button>
          <Button
            variant={"default"}
            component={Link}
            to={`/studio/${project.id}/page-builder`}
          >
            Builder
          </Button>
        </Button.Group>
      </Group>
    </Paper>
  );
}

const ProjectMenu = ({ projectId }: { projectId: string }) => {
  return (
    <Menu width={200} styles={{ dropdown: { zIndex: 100 } }}>
      <Menu.Target>
        <ActionIcon variant={"light"} size={"xs"}>
          <IconMenu2></IconMenu2>
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown sx={{ zIndex: 100 }}>
        <Menu.Item component={Link} to={`${projectId}/edit`}>
          Edit
        </Menu.Item>
        <Menu.Item component={Link} to={`${projectId}/delete`}>
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

import { ActionIcon, Group, Table } from "@mantine/core";
import type { Project } from "@prisma/client";
import { useNavigate } from "@remix-run/react";
import { Edit, Trash, View360 } from "tabler-icons-react";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  const rows = projects.map((project) => (
    <tr
      key={project.id}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/studio/${project.id}/editor/tab/blank`)}
    >
      <td>{project.id}</td>
      <td>{project.title}</td>
      <td onClick={(e) => e.stopPropagation()}>
        <Group>
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              navigate(`/projects/${project.id}/edit`);
            }}
          >
            <Edit></Edit>
          </ActionIcon>
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              navigate(`/site/${project.id}`);
            }}
          >
            <View360></View360>
          </ActionIcon>
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              navigate(`/projects/${project.id}/delete`);
            }}
          >
            <Trash></Trash>
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

import { ActionIcon, Group, Switch, Table } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import type { Project } from "@prisma/client";
import { useEffect } from "react";
import { useFetcher, useNavigate } from "remix";
import { Check, Edit, View360 } from "tabler-icons-react";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const publishProjectFetcher = useFetcher();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      publishProjectFetcher.state === "loading" &&
      publishProjectFetcher.type === "actionRedirect"
    ) {
      showNotification({
        icon: <Check></Check>,
        color: "green",
        title: "Site updated",
        message:
          publishProjectFetcher?.submission?.formData?.get("published") ===
          "true"
            ? "Your site is now live"
            : "Your site is now hidden from others",
      });
    }
  }, [
    publishProjectFetcher?.type,
    publishProjectFetcher?.state,
    publishProjectFetcher?.submission,
  ]);

  const rows = projects.map((project) => (
    <tr
      key={project.id}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/playground/${project.slug}`)}
    >
      <td>{project.id}</td>
      <td>{project.title}</td>
      <td>{project.slug}</td>
      <td onClick={(e) => e.stopPropagation()}>
        <Switch
          onLabel="Yes"
          offLabel="No"
          size="md"
          name=""
          defaultChecked={project.published}
          onChange={(e) => {
            const formData = new FormData();
            formData.set("published", e.target.checked ? "true" : "false");
            publishProjectFetcher.submit(formData, {
              method: "post",
              action: `/projects/${project.id}/edit`,
              replace: true,
            });
          }}
        ></Switch>
      </td>
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
              navigate(`/projects/${project.id}/edit`);
            }}
          >
            <View360></View360>
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
          <th>Project Slug</th>
          <th>Published</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

import { Table } from "@mantine/core";
import type { Project } from "@prisma/client";
import { useNavigate } from "remix";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  const rows = projects.map((project) => (
    <tr
      key={project.id}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/playground/${project.slug}`)}
    >
      <td>{project.id}</td>
      <td>{project.title}</td>
      <td>{project.slug}</td>
      <td>{project.published ? "Published" : "Unpublished"}</td>
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
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

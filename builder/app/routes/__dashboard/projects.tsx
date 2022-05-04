import { Button, Group, Input, Title } from "@mantine/core";
import React from "react";
import type { LoaderFunction } from "remix";
import { json, Link, Outlet, useLoaderData } from "remix";
import { Hammer } from "tabler-icons-react";
import { ProjectsTable } from "~/components/ProjectsTable";
import { getProjects } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const projects = await getProjects({ userId });

  return json({ projects });
};

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjects>>;
};

const ProjectsPage = () => {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <div>
      <Title>Projects</Title>
      <Group position="apart" py={20}>
        <Input placeholder="Search Projects"></Input>
        <Button component={Link} to="/playground" leftIcon={<Hammer></Hammer>}>
          New Project
        </Button>
      </Group>
      <ProjectsTable projects={loaderData.projects}></ProjectsTable>
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectsPage;

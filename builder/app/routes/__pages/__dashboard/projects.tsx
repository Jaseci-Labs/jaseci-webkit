import { Button, Grid, Group, Input, Title } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Hammer } from "tabler-icons-react";
import { getProjects } from "~/models/project.server";
import { ProjectCard } from "~/components/ProjectCard";
import { authenticator } from "~/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const projects = await getProjects({ userId: user.id });

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
        <Button component={Link} to="new-project" leftIcon={<Hammer></Hammer>}>
          New Project
        </Button>
      </Group>

      <Grid columns={12} gutter={"xl"}>
        {loaderData.projects.map((project) => (
          <Grid.Col span={4} xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard project={project}></ProjectCard>
          </Grid.Col>
        ))}
      </Grid>
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectsPage;

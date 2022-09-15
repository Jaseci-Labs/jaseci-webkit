import { Button, Group, Modal, Text } from "@mantine/core";
import React from "react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useNavigate } from "@remix-run/react";
import { deleteProject } from "~/models/project.server";
import { authenticator } from "~/auth.server";

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request);
  const { projectId } = params;

  await deleteProject({ projectId: projectId as string, userId: user?.id });

  return redirect("/projects");
};

const DeleteProjectPage = () => {
  const navigate = useNavigate();

  return (
    <Modal opened={true} onClose={() => navigate("..")} title="Delete Project">
      <Text>Are you sure you want to delete this project?</Text>

      <Group my="lg" position="right">
        <Button color="teal" component={Link} to="..">
          No
        </Button>
        <Form method="post">
          <Button type="submit" color="red">
            Yes
          </Button>
        </Form>
      </Group>
    </Modal>
  );
};

export default DeleteProjectPage;

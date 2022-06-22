import { Button, Group, Modal, TextInput } from "@mantine/core";
import React from "react";
import type { ActionFunction } from "remix";
import { useActionData } from "remix";
import { Form, redirect, useNavigate } from "remix";
import { createProject } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");

  try {
    // create the project
    await createProject({ title, userId });

    return redirect("/projects");
  } catch (err) {
    if (err instanceof Response && err.statusText === "ValidationError") {
      return err;
    }
  }
};

const NewProjectPage = () => {
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <Modal title="New Project" onClose={() => navigate("..")} opened={true}>
      <Form method="post">
        <TextInput
          name="title"
          label="Name"
          placeholder="Enter project name"
          // required
          error={actionData?.errors?.title?.message}
        ></TextInput>
        <Group position="right" my="lg">
          <Button type="submit">Create Project</Button>
        </Group>
      </Form>
    </Modal>
  );
};

export default NewProjectPage;

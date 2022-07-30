import { Button, Group, Modal, Text } from "@mantine/core";
import React from "react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useNavigate } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { deleteProjectSite } from "~/models/projectSite.server";
// import invariant from "tiny-invariant";

const DeleteSitePage = () => {
  const navigate = useNavigate();

  return (
    <Modal opened={true} onClose={() => navigate("..")} title="Delete Project">
      <Text>Are you sure you want to delete this site?</Text>

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

export const action: ActionFunction = async ({ request, params }) => {
  const { projectId, siteId } = params;
  if (!projectId) throw redirect("/projects");
  const userId = await requireUserId(request);

  // invariant(typeof siteId === "string");

  await deleteProjectSite({
    siteId: siteId as string,
    userId,
  });

  return redirect(`/projects/${projectId}`);
};

export default DeleteSitePage;

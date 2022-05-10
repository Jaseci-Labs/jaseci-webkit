import { Button, Group, Modal, Text } from '@mantine/core';
import React from 'react';
import type { ActionFunction } from 'remix';
import { Form, Link, redirect, useNavigate } from 'remix';
import invariant from 'tiny-invariant';
import { deleteProject } from '~/models/project.server';
import { requireUserId } from '~/session.server';

export const action: ActionFunction = async ({ request, params }) => {
    const userId = await requireUserId(request)
    const { projectId } = params

    invariant(typeof projectId === "string", "projectId must be a string")

    await deleteProject({ projectId, userId })

    return redirect("/projects")
}

const DeleteProjectPage = () => {
    const navigate = useNavigate()

    return (
        <Modal opened={true} onClose={() => navigate("..")} title="Delete Project">
            <Text>Are you sure you want to delete this project?</Text>

            <Group my="lg" position="right">
                <Button color="teal" component={Link} to=".." >No</Button>
                <Form method="post">
                    <Button type="submit" color="red">Yes</Button>
                </Form>
            </Group>

        </Modal>
    )
}

export default DeleteProjectPage

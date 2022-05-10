import { Button, Group, Modal, TextInput } from '@mantine/core';
import React from 'react';
import type { ActionFunction } from 'remix';
import { Form, redirect, useNavigate } from 'remix';
import invariant from 'tiny-invariant';
import { createProject } from '~/models/project.server';
import { requireUserId } from '~/session.server';

export const action: ActionFunction = async ({ request }) => {
    const userId = await requireUserId(request)
    const formData = await request.formData()
    const title = formData.get("title")

    invariant(typeof title === "string", "title must be a string")

    // create the project
    await createProject({ title, userId })

    return redirect("/projects")
}

const NewProjectPage = () => {
    const navigate = useNavigate()

    return (
        <Modal title="New Project" onClose={() => navigate("..")} opened={true}>
            <Form method="post">
                <TextInput name="title" label="Name" placeholder="Enter project name"></TextInput>
                <Group position='right' my="lg">
                    <Button type="submit">Create Project</Button>
                </Group>
            </Form>
        </Modal>
    )
}

export default NewProjectPage
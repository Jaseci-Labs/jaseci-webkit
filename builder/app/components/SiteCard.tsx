import { ActionIcon, Card, Divider, Group, Image, Text } from "@mantine/core";
import type { ProjectSite } from "@prisma/client";
import React from "react";
import { useNavigate } from "@remix-run/react";
import { Edit, ExternalLink, Trash } from "tabler-icons-react";

const SiteCard = ({ site }: { site: Partial<ProjectSite> }) => {
  const navigate = useNavigate()

  return (
    <Card shadow="xs">
      <Card.Section>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
          height={150}
        />
      </Card.Section>
      <Text weight={500} size="lg" my="xs">
        Hey
      </Text>

      <Card.Section>
        <Divider variant="dashed" size="xs"></Divider>
        <Group position="right" my="xs">
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              // navigate(`/projects/${project.id}/edit`);
            }}
            color="blue"
          >
            <Edit></Edit>
          </ActionIcon>
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              // navigate(`/projects/${project.id}/edit`);
            }}
            color="orange"
          >
            <ExternalLink></ExternalLink>
          </ActionIcon>
          <ActionIcon
            variant="hover"
            size="sm"
            onClick={() => {
              navigate(`site/${site.id}/delete`);
            }}
            color="red"
          >
            <Trash></Trash>
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default SiteCard;

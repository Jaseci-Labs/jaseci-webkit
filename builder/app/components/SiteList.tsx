import { Grid } from "@mantine/core";
import type { ProjectSite } from "@prisma/client";
import React from "react";
import SiteCard from "./SiteCard";

type SiteListProps = {
  sites: ProjectSite[];
};

const SiteList = ({ sites }: SiteListProps) => {
  return (
    <Grid>
      {sites.map(site =>
        <Grid.Col key={site.id} span={3}>
          <SiteCard site={site}></SiteCard>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default SiteList;

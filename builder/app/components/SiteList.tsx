import { Grid } from "@mantine/core";
import React from "react";
import SiteCard from "./SiteCard";

const SiteList = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <SiteCard></SiteCard>
      </Grid.Col>

      <Grid.Col span={3}>
        <SiteCard></SiteCard>
      </Grid.Col>

      <Grid.Col span={3}>
        <SiteCard></SiteCard>
      </Grid.Col>

      <Grid.Col span={3}>
        <SiteCard></SiteCard>
      </Grid.Col>
    </Grid>
  );
};

export default SiteList;

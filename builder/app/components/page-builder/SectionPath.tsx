import React from "react";
import type { BuilderPath } from "~/machines/builder.machine";
import { Breadcrumbs, Anchor } from "@mantine/core";

const SectionPath = ({
  path,
  onClickPath,
}: {
  path: BuilderPath[];
  onClickPath: (pathId: string) => void;
}) => {
  const items = path.map((p) => (
    <Anchor href={"#"} onClick={() => onClickPath(p.id)} key={p.id}>
      {p.id}
    </Anchor>
  ));

  return (
    <div>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </div>
  );
};

export default SectionPath;

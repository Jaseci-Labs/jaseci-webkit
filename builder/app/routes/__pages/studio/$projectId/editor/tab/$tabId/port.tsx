import { Alert } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import type { ReactNode } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "remix";
import ImportExportModal from "~/components/playground/ImportExportModal";

const ImportExportProjectPage = ({ error }: { error?: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <ImportExportModal
      onClose={() => navigate("..")}
      opened={true}
    ></ImportExportModal>
  );
};

export const CatchBoundary: CatchBoundaryComponent = () => {
  const navigate = useNavigate();
  const notifications = useNotifications();

  useEffect(() => {
    if (notifications.notifications.length) {
      notifications.clean();
    }
    // console.log("change");
  }, [notifications.notifications.length]);

  return (
    <>
      <ImportExportModal
        onClose={() => navigate("..")}
        opened={true}
        error={
          <Alert color="red" my="md" variant="filled">
            Unable to import project.
          </Alert>
        }
      ></ImportExportModal>
    </>
  );
};

export default ImportExportProjectPage;

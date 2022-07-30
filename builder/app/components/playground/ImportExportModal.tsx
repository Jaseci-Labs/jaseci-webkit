import { Button, Divider, Text, Modal, Space, Title } from "@mantine/core";
import type { DropzoneStatus } from "@mantine/dropzone";
import { MIME_TYPES } from "@mantine/dropzone";
import { Dropzone } from "@mantine/dropzone";
import { useNotifications } from "@mantine/notifications";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { useFetcher, useParams } from "@remix-run/react";
import { Check } from "tabler-icons-react";

const DropZoneComp = ({
  status,
  file,
}: {
  status: DropzoneStatus;
  file: File | null;
}) => {
  return (
    <>
      {!status.accepted && <p>Click or drag and drop project here</p>}
      {status.rejected && (
        <div>
          <Text>Click or drag and drop project here</Text>
          <Text color="red">File not allowed! It must be a zip file.</Text>
        </div>
      )}

      {file?.name && (
        <Text>
          <Text component="span" weight="bold">
            Selected:
          </Text>{" "}
          {file?.name}{" "}
        </Text>
      )}
    </>
  );
};

const ImportExportModal = ({
  onClose,
  opened,
  error,
}: {
  opened: boolean;
  onClose: () => void;
  error?: ReactNode;
}) => {
  const notification = useNotifications();
  const fetcher = useFetcher();
  const { projectId } = useParams();
  const [file, setFile] = useState<File | null>(null);

  const updateNotificationCallback = useCallback(async (id: string) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    notification.updateNotification("importProject", {
      title: "Import Project",
      message: "Project imported successfully!",
      color: "teal",
      icon: <Check></Check>,
      loading: false,
      autoClose: true,
    });
  }, []);

  useEffect(() => {
    if (fetcher.type === "actionSubmission" && fetcher.state === "submitting") {
      notification.showNotification({
        id: "importProject",
        title: "Import Project",
        message: "Importing project...",
        color: "orange",
        loading: fetcher.state === "submitting",
        autoClose: false,
      });
    }

    if (fetcher.type === "actionRedirect") {
      // await new Promise()
      updateNotificationCallback("importProject");
      //   notification.hideNotification("importProject");
    }
  }, [fetcher.type, fetcher.state, fetcher.data]);

  return (
    <Modal onClose={onClose} opened={opened} title="Import/Export Project">
      {error}
      <Title order={4}>Import Project</Title>
      <Divider my="md"></Divider>

      <fetcher.Form
        method="post"
        action={`/api/importProject?projectId=${projectId}`}
        encType="multipart/form-data"
      >
        <Dropzone
          name="project"
          mb="md"
          accept={[MIME_TYPES.zip]}
          onDrop={(files) => {
            setFile(files[0]);
          }}
          //   maxSize={1024 * 1024 * 2}
          onReject={(files) => {
            console.log("rejected files ", files);
          }}
        >
          {(status) => <DropZoneComp status={status} file={file} />}
        </Dropzone>

        <Button
          loading={fetcher.state === "loading"}
          type="submit"
          color="teal"
        >
          Import Project
        </Button>
      </fetcher.Form>

      <Space h="xl"></Space>

      <Title order={4}>Export</Title>
      <Divider my="md"></Divider>
      <Button download component="a" href={`/api/exportProject/${projectId}`}>
        Export Project
      </Button>
    </Modal>
  );
};

export default ImportExportModal;

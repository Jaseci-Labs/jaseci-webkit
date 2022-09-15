import { Button, Card, Grid, TextInput, Title } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { getUser, requireUser } from "~/session.server";
import { Clipboard } from "tabler-icons-react";
import { resetAPIKey } from "~/models/user.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const action = formData.get("_action");

  if (action === "resetApiKey") {
    await resetAPIKey({ userId: user.id });
  }

  return json({});
};

const Settings = () => {
  const loaderData = useLoaderData();
  const { copy, copied } = useClipboard();
  const resetFetcher = useFetcher();

  return (
    <div>
      <Title pb="md">Settings</Title>

      <Card shadow={"xs"} px="xl">
        <Grid columns={12}>
          <Grid.Col span={6}>
            <TextInput
              label="API Key"
              rightSection={
                <Button.Group>
                  <Button
                    variant="light"
                    translate="no"
                    color={copied ? "green" : undefined}
                    onClick={() => copy(loaderData.user.apiKey)}
                    leftIcon={<Clipboard></Clipboard>}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <resetFetcher.Form method="post">
                    <Button
                      name="_action"
                      value="resetApiKey"
                      type="submit"
                      loading={
                        resetFetcher.state === "loading" ||
                        resetFetcher.state === "submitting"
                      }
                    >
                      Reset
                    </Button>
                  </resetFetcher.Form>
                </Button.Group>
              }
              placeholder="API Key"
              value={loaderData.user.apiKey}
            ></TextInput>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
};

export default Settings;

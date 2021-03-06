import {
  Avatar,
  Burger,
  Container,
  createStyles,
  Divider,
  Group,
  Menu,
  Tabs,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { Form, Link, useNavigate } from "remix";
import {
  ChevronDown,
  Heart,
  Logout,
  Message,
  PlayerPause,
  Settings,
  Star,
  SwitchHorizontal,
  Trash,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
    marginBottom: 40,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },

  tabControlActive: {
    color: `${
      theme.colorScheme === "dark" ? theme.white : theme.black
    } !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: { label: string; to: string }[];
}

export function Header({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [activeTab, setActiveTab] = useState<number | undefined>();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const navigate = useNavigate();

  const renderTabs = tabs.map((tab) => (
    <Tabs.Tab key={tab.label} tabKey={tab.to} label={tab.label} />
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          {/* <MantineLogo variant="white" /> */}
          <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
            <Title order={3} sx={{ color: "#fff" }}>
              Jaseci Studio
            </Title>
          </Link>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />

          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />
                  <Text
                    weight={500}
                    size="sm"
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Label>Danger zone</Menu.Label>

            <Form action="/logout" method="post">
              <Menu.Item<"button">
                color="red"
                component="button"
                type="submit"
                icon={<Trash size={14} />}
              >
                Logout
              </Menu.Item>
            </Form>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
          active={activeTab}
          onTabChange={(activeTab, tabKey) => {
            setActiveTab(activeTab);
            navigate(tabKey || "#");
          }}
        >
          {renderTabs}
        </Tabs>
      </Container>
    </div>
  );
}

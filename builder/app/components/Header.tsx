import { useState } from "react";
import {
  createStyles,
  Header as MantineHeader,
  Box,
  Group,
  Burger,
  Title,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Form, Link } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 200px",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { to: string; label: string }[];
}

export function Header({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].to);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Button
      key={link.label}
      component={Link}
      to={link.to}
      variant="light"
      size="xs"
      // className={cx(classes.link, {
      //   [classes.linkActive]: active === link.to,
      // })}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.to);
      // }}
    >
      {link.label}
    </Button>
  ));

  return (
    <MantineHeader height={60} mb={60}>
      <Box className={classes.header}>
        <Link to={"/"} style={{ all: "unset", cursor: "pointer" }}>
          <Title
            order={3}
            sx={(theme) => ({ color: theme.colors[theme.primaryColor][6] })}
          >
            Jaseci Studio
          </Title>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
          <Button
            type={"submit"}
            component={Link}
            to="/settings"
            color={"grape"}
            variant={"light"}
            size={"xs"}
          >
            Settings
          </Button>
          <Form method={"post"} action={"/logout"}>
            <Button type={"submit"} color={"red"} variant={"light"} size={"xs"}>
              Logout
            </Button>
          </Form>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Box>
    </MantineHeader>
  );
}

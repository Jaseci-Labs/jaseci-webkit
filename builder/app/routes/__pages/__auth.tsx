import { Anchor, createStyles, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { Link, Outlet, useLocation } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const guidanceLinkMessage = {
  login: "Don't have an account?",
  signup: "Already have an account?",
};

export default function AuthenticationLayout() {
  const { classes } = useStyles();
  const { pathname } = useLocation();

  const renderGuidanceLink = () => (
    <Text align="center" mt="md">
      {pathname.includes("login") ? (
        <> {guidanceLinkMessage["login"]}</>
      ) : (
        <>{guidanceLinkMessage["signup"]}</>
      )}
      <Anchor
        to={pathname.includes("login") ? "/join" : "/login"}
        component={Link}
        weight={700}
      >
        {pathname.includes("login") ? "Register" : "Login"}
      </Anchor>
    </Text>
  );

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          {pathname.includes("login") ? (
            <>Welcome back!</>
          ) : (
            <>Create an account</>
          )}
        </Title>

        <Outlet></Outlet>
        {renderGuidanceLink()}
      </Paper>
    </div>
  );
}

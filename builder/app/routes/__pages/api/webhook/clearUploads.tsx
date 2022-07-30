import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import fs from "fs";

export const loader: LoaderFunction = async ({ request }) => {
  const files = fs.readdirSync("uploads/");
  files.forEach((file) => {
    fs.unlinkSync("uploads/" + file);
  });

  return json({});
};

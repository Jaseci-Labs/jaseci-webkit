import type { LoaderFunction } from "remix";
import { json } from "remix";
import fs from "fs";

export const loader: LoaderFunction = async ({ request }) => {
  const files = fs.readdirSync("uploads/");
  files.forEach((file) => {
    fs.unlinkSync("uploads/" + file);
  });

  return json({});
};

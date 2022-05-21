/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare var AMD: any;
declare var require: any;

export const JacLanguage = {
  id: "jac",
  extensions: [".jac"],
  aliases: ["Jac", "jac"],
  loader: () => {
    if (AMD) {
      return new Promise((resolve, reject) => {
        require(["vs/basic-languages/jac/jac"], resolve, reject);
      });
    } else {
      return import("./jac");
    }
  },
};

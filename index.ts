import { starforged } from "dataforged";

const truths = starforged["Setting Truths"];

// Errors on "dataforged":
/*
  Could not find a declaration file for module 'dataforged'. '[localpath]/node_modules/dataforged/dist/index-esm.mjs' implicitly has an 'any' type.
  There are types at '[localpath]/node_modules/dataforged/dist/types/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'dataforged' library may need to update its package.json or typings.ts(7016)
*/

// Fixed by changing the dataforged package.json "exports" to:
/*
  "exports": {
      ".": {
        "import": "./dist/index-esm.mjs",
        "require": "./dist/index.js",
        "types": "./dist/types/index.d.ts"
      }
    },
*/

// Note this isn't a problem with commonJS modules, only ESM modules.
// See settings in tsconfig.json: module and module resolution set to the same as vite defaults.

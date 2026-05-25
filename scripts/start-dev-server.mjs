import { spawn } from "node:child_process";
import { openSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const nodeBin = dirname(process.execPath);
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");
const out = openSync(join(root, "dev-server.out.log"), "a");
const err = openSync(join(root, "dev-server.err.log"), "a");

const child = spawn(process.execPath, [nextBin, "dev", "--hostname", "127.0.0.1", "--port", "3000"], {
  cwd: root,
  detached: true,
  stdio: ["ignore", out, err],
  env: {
    ...process.env,
    PATH: `${nodeBin};${process.env.PATH ?? ""}`,
    Path: `${nodeBin};${process.env.Path ?? process.env.PATH ?? ""}`
  },
  windowsHide: true
});

child.unref();
console.log(`TuningLab dev server started with pid ${child.pid}`);

import chalk from "chalk";
import { exec, execSync } from "child_process";
import { log } from "console";
import fs from "fs";
import { fromMarkdown } from "mdast-util-from-markdown";
import path from "path";

const files = [...readAllFiles("sessions")];
const markdownFiles = files.filter((path) => path.endsWith(".md"));

const commands = markdownFiles
  .map(getAllDownloadCommands)
  .filter((commands) => commands.length > 0)
  .reduce((acc, commands) => [...acc, ...commands], [])
  .filter((command) => !command.cmd.includes("foo"));

try {
  execSync("rm -rf .temp-test");
  execSync("mkdir .temp-test");
} catch {}

const results = commands.map((command) => {
  try {
    execSync(command.cmd, { cwd: "./.temp-test" });
    console.log("Success: ", command.cmd);
    return {
      status: "success",
      ...command,
    };
  } catch (error) {
    console.error(
      chalk.red(
        JSON.stringify({ command, error: error.stderr.toString() }, null, 2)
      )
    );
    return {
      status: "error",
      ...command,
      error: error.stderr.toString(),
    };
  }
});

fs.writeFileSync("test-ghcd-results.log", JSON.stringify(results, null, 2));

// ---

function* readAllFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

function findDownloadCommandsInAST(tree) {
  if (tree.depth > 1000) {
    return [];
  }
  if (tree.type === "code" && tree.value.startsWith("npx ghcd@latest")) {
    return [tree.value.trim()];
  }
  if (tree.children) {
    return tree.children
      .map(findDownloadCommandsInAST)
      .reduce((acc, children) => [...acc, ...children], []);
  }
  return [];
}

function getAllDownloadCommands(path) {
  const raw = fs.readFileSync("./" + path);
  const tree = fromMarkdown(raw);
  const commands = findDownloadCommandsInAST(tree).map((command) => ({
    cmd: command,
    file: path,
  }));
  return commands;
}

import chalk from "chalk";
import { log } from "console";
import fs from "fs";
import { fromMarkdown } from "mdast-util-from-markdown";
import path from "path";

const files = [...readAllFiles("sessions")];
const markdownFiles = files.filter((path) => path.endsWith(".md"));

const result = markdownFiles.map(getAllLinks);

const links = Array.from(
  result.reduce((acc, links) => {
    links
      .filter((link) => !link.url.startsWith("http://localhost"))
      .forEach(
        (link) => !acc.find((item) => item.url === link.url) && acc.push(link)
      );
    return acc;
  }, [])
);

const testResults = await asyncMap(links, testLink);
const failedTests = testResults.filter((result) => result);

fs.writeFileSync("link_tests.log", JSON.stringify(failedTests, null, 2));

// ---
// helper functions
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

function findLinksInAST(tree) {
  if (tree.depth > 1000) {
    return [];
  }
  if (tree.type === "link" && tree.url.startsWith("http")) {
    return [tree.url];
  }
  if (tree.children) {
    return tree.children
      .map(findLinksInAST)
      .reduce((acc, children) => [...acc, ...children], []);
  }
  return [];
}

function getAllLinks(path) {
  const raw = fs.readFileSync("./" + path);
  const tree = fromMarkdown(raw);
  const links = findLinksInAST(tree).map((link) => ({ url: link, file: path }));
  return links;
}

async function testLink(link) {
  try {
    const response = await fetch(link.url, {
      method: "HEAD",
      redirect: "follow",
    });
    if (response.status >= 400) {
      throw new Error(response.statusText);
    } else {
      console.log("Success:", link.url);
      return;
    }
  } catch (error) {
    logError("----------------");
    logError("Failed:", link.url);
    logError("File path:", link.file);
    logError("----------------");
    log(error.message);
    return {
      ...link,
      error: error.message,
    };
  }
}

async function asyncMap(array, callback) {
  return Promise.all(array.map(callback));
}

function logError(...text) {
  console.error(chalk.red(...text));
}

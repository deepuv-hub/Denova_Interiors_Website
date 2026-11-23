// Build entry point (`yarn build`), used by GitHub Actions, Hostinger and
// local machines.
//
// Pre-rendering (react-snap) needs Chrome, which Hostinger's build servers
// cannot run. So:
//   - GitHub Actions (or PRERENDER=1): craco build + react-snap, then adds
//     deploy/hostinger.htaccess as build/.htaccess. The workflow then commits
//     the result to frontend/prebuilt/ (minus images/, which come from public/).
//   - Hostinger (build path contains /hbuilds/) or USE_PREBUILT=1: no compile;
//     build/ = public/ + prebuilt/. Hostinger publishes build/ to public_html.
//   - Anywhere else: a normal client-only craco build.
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const build = path.join(root, "build");
const prebuilt = path.join(root, "prebuilt");
const bin = (name) => path.join(root, "node_modules", ".bin", name);

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: "inherit", cwd: root, shell: process.platform === "win32" });
  if (r.status !== 0) process.exit(r.status || 1);
};

const prerender = process.env.GITHUB_ACTIONS === "true" || process.env.PRERENDER === "1";
const usePrebuilt = process.env.USE_PREBUILT === "1" || root.includes(`${path.sep}hbuilds${path.sep}`);

if (prerender) {
  run(bin("craco"), ["build"]);
  run(bin("react-snap"), []);
  fs.copyFileSync(path.join(root, "deploy", "hostinger.htaccess"), path.join(build, ".htaccess"));
  console.log("Pre-rendered build ready in build/.");
} else if (usePrebuilt && fs.existsSync(path.join(prebuilt, "index.html"))) {
  fs.rmSync(build, { recursive: true, force: true });
  fs.cpSync(path.join(root, "public"), build, { recursive: true });
  fs.cpSync(prebuilt, build, { recursive: true });
  const pages = [];
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith(".html")) pages.push(path.relative(build, p));
  });
  walk(build);
  console.log(`Using pre-rendered build from frontend/prebuilt/ (${pages.length} HTML pages).`);
} else {
  if (usePrebuilt) console.warn("frontend/prebuilt/ not found; falling back to a client-only build.");
  run(bin("craco"), ["build"]);
}

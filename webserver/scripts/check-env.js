// Allows you to call any scripts prepended with a 'pre' tag and verify \
// env is set or terminate otherwise
// https://corgibytes.com/blog/2017/04/18/npm-tips/

const task = process.env.npm_lifecycle_event.startsWith("pre")
  ? process.env.npm_lifecycle_event.slice(3)
  : process.env.npm_lifecycle_event;

const env = process.env.NODE_ENV;
const packageJSON = require("../package.json");
const availableEnvironments = Object.keys(packageJSON.scripts)
  .filter(key => key.startsWith(task))
  .map(key => key.split(":")[1])
  .filter(key => key);

if (!process.env.NODE_ENV) {
  console.log(availableEnvironments);
  console.error(
    `[ Error ] NODE_ENV is required. Use ${task}:${availableEnvironments.join(
      "/"
    )} scripts instead.`
  );
  process.exit(1);
}

if (!availableEnvironments.includes(env)) {
  console.log(availableEnvironments);
  console.error(
    `[ Error ] ${env} is not valid NODE_ENV. Use ${task}:${availableEnvironments.join(
      "/"
    )} scripts instead.`
  );
  process.exit(1);
}

process.exit(0);

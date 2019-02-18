/* @flow */
const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');
const invariant = require('tiny-invariant');
const execSync = require('child_process').execSync;

const { mode } = argv;

invariant(
  typeof mode === 'string',
  `expected mode to be string, received: ${typeof mode}`,
);

process.env.BABEL_ENV = mode;

execSync(
  `./node_modules/.bin/babel src --out-dir ${mode} --ignore "src/**/*.test.js","src/testHelpers.js"`,
);

copyFlowTypesFromSrc();

execSync(`yarn build:ts ${mode}`);

function makeFlowFile(from, to) {
  fs.copyFileSync(from, `${to}.flow`);
}

function copyFlowTypesFromSrc(curPath = '') {
  const dirName = path.join(__dirname, 'src', curPath);
  const files = fs.readdirSync(dirName);
  const fileToCopy = 'index.js';

  files.forEach(file => {
    const filePath = path.join(dirName, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      return copyFlowTypesFromSrc(path.join(curPath, file));
    }

    if (file === fileToCopy) {
      return makeFlowFile(
        filePath,
        path.join(__dirname, mode, curPath, fileToCopy),
      );
    }
  });
}

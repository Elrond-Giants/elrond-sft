#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import { argv, exit } from 'process';

import { issueToken } from './commands/issue-token';
import { mintSft } from './commands/mint-sft';
import { setRoles } from './commands/set-roles';
import { chain } from './config';
import packageJson from './packageCopy.json';

const COMMANDS = {
  issueToken: "issue-token",
  setRoles: "set-roles",
  mintSft: "mint-sft",
  addSftQuantity: "add-sft-quantity",
  burnSft: "burn-sft",
};

const args = argv;
const command = args ? args[2] : undefined;

const cliHeader = () => {
  console.log(figlet.textSync("elrond-sft", { horizontalLayout: "default", verticalLayout: "default" }));
  console.log("This is a CLI tool you can use to execute SFT related operations on the Elrond Network.\n");
};

const availableCommands = Object.values(COMMANDS);

const commandsArray = [...availableCommands, "--version", "-v", "--help", "-h"];

// Show version number
if (command === "--version" || command === "-v") {
  cliHeader();
  console.log(`Version ${packageJson.version}`);
  console.log(`erdjs version ${packageJson.dependencies["@elrondnetwork/erdjs"]}`);
  exit();
}

const availableCommandsFn = () => {
  console.log(chalk.yellow("Available commands:"));
  console.log(`${commandsArray.join("\n")}`);
};

// Show help
if (command === "--help" || command === "-h") {
  cliHeader();
  console.log(`Usage: ${packageJson.name} <command>\n`);
  availableCommandsFn();
  exit(9);
}

// Show invalid command error
if (!command || !Object.values(COMMANDS).includes(command)) {
  cliHeader();
  console.log(chalk.red("Please specify a valid command.") + "\n");
  availableCommandsFn();
  exit(9);
}

console.log(chalk.yellow(`Running on ${chain.toUpperCase()}\n`));

const commandParam = args ? args[3] : undefined;
switch (command) {
  case COMMANDS.issueToken:
    issueToken();
    break;
  case COMMANDS.setRoles:
    setRoles(commandParam);
    break;
  case COMMANDS.mintSft:
    mintSft(commandParam);
    break;
  case COMMANDS.addSftQuantity:
    console.log("Not Implemented");
    break;
  case COMMANDS.burnSft:
    console.log("Not Implemented");
    break;
  default:
    break;
}

# Elrond SFT Issue & Airdrop

[![NPM](https://nodei.co/npm/elrond-sft.png?compact=true)](https://www.npmjs.com/package/elrond-sft)

This is a CLI tool you can use to execute SFT related operations on the Elrond Network.

## What can you do

- issue token `elrond-sft issue-token`
- set roles `elrond-sft set-roles`
- mint SFT `elrond-sft mint-sft`

## Getting Started

### Install package globally

`npm i -g elrond-sft`

### Generate a PEM file wallet

Make sure you have a PEM file wallet called `wallet.pem` in the current directly (the one you're running the package from).
_You can use [erdpy](https://docs.elrond.com/sdk-and-tools/erdpy/erdpy/) to generate a PEM file wallet by running `erdpy wallet new --pem --output-path wallet`_

### Mint SFT

Before you mint an SFT you will need to issue a token and assign some roles to it.

1. Issue Token
   Run `elrond-sft issue-token` and fill in the Token Name and the Token Ticker.
   _Make sure you don't include any spaces in the Token Name._
   _Make sure to only use Uppercase chars in the Token Ticker and avoid spaces._

2. Set Roles
   _In order to be able to perform actions over a token (mint, burn, etc), one needs to have roles assigned._
   In order to assign the roles, you need to run `elrond-sft set-roles`.

3. Mint SFT
   Now that we have a token and the roles, you can finally mint the SFT by running `elrond-sft mint-sft`.

### Chain

By defualt, elrond-sft will run on devnet. If you wish to run on another chain, you can set an env var called `CHAIN` to:

- devnet
- testnet
- mainnet

Example `CHAIN=testnet elrond-sft issue-token`

## Config

There are two ways you can specify the Token Identifier (example GIANTS-93cadd) to the CLI tool:

1. Using the `config.json` file generated by the `elrond-sft issue-token` command
   ```
   {
   "tokenIdentifier": "TKKK-d79421"
   }
   ```
2. By providing an extra parameter to the CLI command. For example `elrond-sft set-roles TKKK-d79421`

## Help

Run `elrond-sft -h` to get a list of all available commands.

## TODO

- add quantity command
- burn command
- airdrop SFT to a list of addresses
- refactor erdjs interactions

## Resources

- Some wallet interaction methods are taken from [elven-tools-cli](https://github.com/ElvenTools/elven-tools-cli)
- [erdjs](https://www.npmjs.com/package/@elrondnetwork/erdjs) is used to interact with the Elrond Blockchain

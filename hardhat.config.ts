import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";
dotenv.config();

import './tasks/deploy';

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const FILECOIN_API_KEY = process.env.FILECOIN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    filecoinTestnet: {
      url: `https://api.calibration.node.glif.io/rpc/v1`,
      chainId: 314159,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    coverage: {
      url: 'http://localhost:8555'
    },
    localhost: {
      url: `http://127.0.0.1:8545`,
      chainId: 1337
    },
    hardhat: {
      chainId: 1337,
      gas: "auto",
      gasPrice: "auto",
      initialBaseFeePerGas: 0,
      mining: {
        interval: 1000
      }
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD'
  },
  etherscan: {
    apiKey: {
      filecoinTestnet: FILECOIN_API_KEY
    }
  }
};

export default config;

<h1 align="center">Welcome to etherscan-ts 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/sweatpotato13/etherscan-ts" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/???/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Ethersdcan API library with typescript

### 🏠 [Homepage](https://github.com/sweatpotato13/etherscan-ts)

## Install

```sh
npm i etherscan-ts
yarn add etherscan-ts
```

## Run tests

```sh
yarn test
```

## Usage
```
const eth = new Etherscan("apiKey");
```

You need API key from etherscan

### Functions
* getSingleEtherBalance
* getMultipleEtherBalance
* getTrxList
* getInternalTrxListByAddress
* getInternalTrxListByHash
* getInternalTrxListByBlockRange
* getERC20TokenTransferEventList
* getERC721TokenTransferEventList
* getMinedBlocksByAddress
* getContractAbi
* checkContractExecutionStatus
* checkTransactionReceiptStatus
* getBlockandUncleReward
* getEstimatedBlockCountdownTime
* getBlockNumberByTimestamp
* getRecentBlockNumber
* getBlockbyNumber
* getUncleByBlockNumberAndIndex
* getBlockTransactionCountByNumber
* getTransactionByHash
* getTransactionByBlockNumberAndIndex
* getTransactionCount
* sendRawTransaction
* getTransactionReceipt
* getCode
* getStorageAt
* gasPrice
* getERC20TokenTotalSupply
* getERC20TokenBalance
* estimateConfirmationTime
* getGasOracle
* getTotalEther
* getEtherLastPrice


## Author

👤 **CuteWisp <sweatpotato13@gmail.com>**

* Website: Cutewisp.com
* Github: [@sweatpotato13](https://github.com/sweatpotato13)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/sweatpotato13/etherscan-ts/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
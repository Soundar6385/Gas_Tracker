# gasprice-tracker-ethereum

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) 
[![NPM Version](https://img.shields.io/npm/v/gasprice-tracker-ethereum.svg)](https://www.npmjs.com/package/gasprice-tracker-ethereum) 
[![GitHub Issues](https://img.shields.io/github/issues/Soundar6385/Gas_Tracker.svg)](https://github.com/Soundar6385/Gas_Tracker/issues)

gasprice-tracker-ethereum is a lightweight Node.js module that provides real-time gas price estimates and network information using public Ethereum RPC endpoints. It requires no API keys, ensuring a hassle-free setup.

## 🚀 Features
- Fetch current gas prices (Low, Medium, High) without API keys.
- Get the latest Ethereum block number.
- Retrieve overall network information including block number and gas prices.
- Lightweight and efficient, using only public RPC nodes.
- No third-party API dependencies.

## 📦 Installation

```sh
npm install gasprice-tracker-ethereum
```

## 🚀 Usage

```javascript
const { estimateGasPrices, getBlockNumber, getNetworkInfo } = require('gasprice-tracker-ethereum');

(async () => {
    const gasPrices = await estimateGasPrices();
    console.log("Estimated Gas Prices (Gwei):", gasPrices);
    
    const blockNumber = await getBlockNumber();
    console.log("Current Block Number:", blockNumber);
    
    const networkInfo = await getNetworkInfo();
    console.log("Network Info:", networkInfo);
})();
```

## 📚 Methods

### `estimateGasPrices()`
Fetches gas prices in Gwei for different priority levels:
- **Low**: 90% of the median gas price.
- **Medium**: Current median gas price.
- **High**: 110% of the median gas price.

### `getBlockNumber()`
Retrieves the latest Ethereum block number.

### `getNetworkInfo()`
Returns an object containing the latest block number and gas prices.

## 🔥 Error Handling
If the public RPC provider is down or rate-limited, the functions return `null` values and log errors to the console.

## 🐛 Reporting Issues
If you encounter any issues, please [open an issue](https://github.com/Soundar6385/Gas_Tracker/issues).

## 🛠 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
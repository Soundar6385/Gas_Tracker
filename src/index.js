import axios from 'axios';

const GAS_PROVIDERS = {
    eth_call: "https://ethereum.publicnode.com"
};

async function fetchGasFromPublicRPC() {
    try {
        const { data } = await axios.post(GAS_PROVIDERS.eth_call, {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_gasPrice",
            params: []
        });
        const gasPrice = parseInt(data.result, 16) / 1e9;
        return { low: gasPrice * 0.9, medium: gasPrice, high: gasPrice * 1.1 };
    } catch (error) {
        console.error("Public RPC Gas API Error:", error.message);
    }
    return null;
}

async function getBlockNumber() {
    try {
        const { data } = await axios.post(GAS_PROVIDERS.eth_call, {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_blockNumber",
            params: []
        });
        return parseInt(data.result, 16);
    } catch (error) {
        console.error("Error fetching block number:", error.message);
    }
    return null;
}

async function getNetworkInfo() {
    try {
        const blockNumber = await getBlockNumber();
        const gasPrices = await fetchGasFromPublicRPC();
        return { blockNumber, gasPrices };
    } catch (error) {
        console.error("Error fetching network info:", error.message);
    }
    return null;
}

async function estimateGasPrices() {
    let gasData = await fetchGasFromPublicRPC();
    return gasData || { low: null, medium: null, high: null };
}

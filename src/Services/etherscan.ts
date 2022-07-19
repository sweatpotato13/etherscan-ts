/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { IResponse } from "src/Interfaces/response.interface";

export class Etherscan {
    private apiKey: string;
    private apiUrl: string;
    constructor(apiKey: string) {
        this.apiUrl = "https://api.etherscan.io/api";
        this.apiKey = apiKey;
        if (!this.apiKey) {
            throw new Error(`API key is required`);
        }
    }
    /* Accounts */
    public async getSingleEtherBalance(
        address: string,
        tag?: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "balance",
                address: address,
                tag: tag || "latest",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getSingleEtherBalance Error: ${error.message}`);
        }
    }

    public async getMultipleEtherBalance(
        addresses: string[],
        tag?: string
    ): Promise<IResponse> {
        try {
            if (addresses.length > 20) {
                throw new Error(`maxium of 20 accounts in a single batch`);
            }
            const url = `${this.apiUrl}`;
            const address = addresses.join();
            const params = {
                module: "account",
                action: "balancemulti",
                address: address,
                tag: tag || "latest",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getMultipleEtherBalance Error: ${error.message}`);
        }
    }

    public async getTrxList(
        address: string,
        startblock: number,
        endblock: number,
        page: number,
        offset: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlist",
                address,
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTrxList Error: ${error.message}`);
        }
    }

    public async getInternalTrxListByAddress(
        address: string,
        startblock: number,
        endblock: number,
        page: number,
        offset: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                address,
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getInternalTrxListByAddress Error: ${error.message}`
            );
        }
    }

    public async getInternalTrxListByHash(txhash: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getInternalTrxListByHash Error: ${error.message}`);
        }
    }

    public async getInternalTrxListByBlockRange(
        startblock: number,
        endblock: number,
        page: number,
        offset: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getInternalTrxListByBlockRange Error: ${error.message}`
            );
        }
    }

    public async getERC20TokenTransferEventList(
        address: string,
        contractAddress: string,
        page: number,
        offset: number,
        startblock: number,
        endblock: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokentx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getERC20TokenTransferEventList Error: ${error.message}`
            );
        }
    }

    public async getERC721TokenTransferEventList(
        address: string,
        contractAddress: string,
        page: number,
        offset: number,
        startblock: number,
        endblock: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokennfttx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getERC721TokenTransferEventList Error: ${error.message}`
            );
        }
    }

    public async getERC1155TokenTransferEventList(
        address: string,
        contractAddress: string,
        page: number,
        offset: number,
        startblock: number,
        endblock: number,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "token1155tx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getERC1155TokenTransferEventList Error: ${error.message}`
            );
        }
    }

    public async getMinedBlocksByAddress(
        address: string,
        blocktype: string,
        page: number,
        offset: number
    ): Promise<IResponse> {
        try {
            if (blocktype !== "blocks" && blocktype !== "uncles") {
                throw new Error(`Wrong block type`);
            }
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "getminedblocks",
                address,
                blocktype,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getMinedBlocksByAddress Error: ${error.message}`);
        }
    }

    public async getHistoricalEtherBalance(
        address: string,
        blockno: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "balancehistory",
                address,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getHistoricalEtherBalance Error: ${error.message}`
            );
        }
    }

    /* Contracts */
    public async getContractAbi(address: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "contract",
                action: "getabi",
                address,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getContractAbi Error: ${error.message}`);
        }
    }

    public async getContractSourceCode(address: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "contract",
                action: "getsourcecode",
                address,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getContractSourceCode Error: ${error.message}`);
        }
    }

    /* Transactions */
    public async checkContractExecutionStatus(
        txhash: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "transaction",
                action: "getstatus",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `checkContractExecutionStatus Error: ${error.message}`
            );
        }
    }

    public async checkTransactionReceiptStatus(
        txhash: string
    ): Promise<IResponse> {
        // Only applicable for Post Byzantium fork transactions
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "transaction",
                action: "gettxreceiptstatus",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `checkTransactionReceiptStatus Error: ${error.message}`
            );
        }
    }

    /* Blocks */
    public async getBlockandUncleReward(blockno: number): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblockreward",
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getBlockandUncleReward Error: ${error.message}`);
        }
    }

    public async getEstimatedBlockCountdownTime(
        blockno: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblockcountdown",
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getEstimatedBlockCountdownTime Error: ${error.message}`
            );
        }
    }

    public async getBlockNumberByTimestamp(
        timestamp: number,
        closest: string
    ): Promise<IResponse> {
        if (closest !== "before" && closest !== "after") {
            throw new Error(`Wrong parameter`);
        }
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblocknobytime",
                timestamp,
                closest,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getBlockNumberByTimestamp Error: ${error.message}`
            );
        }
    }

    public async getDailyAverageBlockSize(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgblocksize",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyAverageBlockSize Error: ${error.message}`);
        }
    }

    public async getDailyAverageBlockCountAndRewards(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyblkcount",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getDailyAverageBlockCountAndRewards Error: ${error.message}`
            );
        }
    }

    public async getDailyBlockRewards(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyblockrewards",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyBlockRewards Error: ${error.message}`);
        }
    }

    public async getDailyAverageBlockTime(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgblocktime",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyAverageBlockTime Error: ${error.message}`);
        }
    }

    public async getDailyUncleBlockCountAndRewards(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyuncleblkcount",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getDailyUncleBlockCountAndRewards Error: ${error.message}`
            );
        }
    }

    /* Log */
    public async getEventLogsByAddress(
        address: string,
        fromBlock: number,
        toBlock: number,
        page: number,
        offset: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                address,
                fromBlock,
                toBlock,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getEventLogsByAddress Error: ${error.message}`);
        }
    }

    public async getEventLogsByTopics(
        fromBlock: number,
        toBlock: number,
        topic0: string,
        topic0_1_opr: string,
        topic1: string,
        page: number,
        offset: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                fromBlock,
                toBlock,
                topic0,
                topic0_1_opr,
                topic1,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getEventLogsByTopics Error: ${error.message}`);
        }
    }

    public async getEventLogsByAddressFilteredByTopics(
        fromBlock: number,
        toBlock: number,
        address: string,
        topic0: string,
        topic0_1_opr: string,
        topic1: string,
        page: number,
        offset: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                fromBlock,
                toBlock,
                address,
                topic0,
                topic0_1_opr,
                topic1,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getEventLogsByAddressFilteredByTopics Error: ${error.message}`
            );
        }
    }

    /* Geth/Parity Proxy */
    public async getRecentBlockNumber(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_blockNumber",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getRecentBlockNumber Error: ${error.message}`);
        }
    }

    public async getBlockbyNumber(
        tag: string,
        boolean: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getBlockByNumber",
                tag,
                boolean,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getBlockbyNumber Error: ${error.message}`);
        }
    }

    public async getUncleByBlockNumberAndIndex(
        tag: string,
        index: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getUncleByBlockNumberAndIndex",
                tag,
                index,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getUncleByBlockNumberAndIndex Error: ${error.message}`
            );
        }
    }

    public async getBlockTransactionCountByNumber(
        tag: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getBlockTransactionCountByNumber",
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getBlockTransactionCountByNumber Error: ${error.message}`
            );
        }
    }

    public async getTransactionByHash(txhash: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionByHash",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTransactionByHash Error: ${error.message}`);
        }
    }

    public async getTransactionByBlockNumberAndIndex(
        tag: string,
        index: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionByBlockNumberAndIndex",
                tag,
                index,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getTransactionByBlockNumberAndIndex Error: ${error.message}`
            );
        }
    }

    public async getTransactionCount(tag: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionCount",
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTransactionCount Error: ${error.message}`);
        }
    }

    public async sendRawTransaction(hex: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_sendRawTransaction",
                hex,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`sendRawTransaction Error: ${error.message}`);
        }
    }

    public async getTransactionReceipt(txhash: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionReceipt",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTransactionReceipt Error: ${error.message}`);
        }
    }

    public async call(
        to: string,
        data: string,
        tag: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_call",
                to,
                data,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`call Error: ${error.message}`);
        }
    }

    public async getCode(address: string, tag: string): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getCode",
                address,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getCode Error: ${error.message}`);
        }
    }

    public async getStorageAt(
        address: string,
        position: string,
        tag: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getStorageAt",
                address,
                position,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getStorageAt Error: ${error.message}`);
        }
    }

    public async gasPrice(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_gasPrice",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`gasPrice Error: ${error.message}`);
        }
    }

    public async estimateGas(
        data: string,
        to: string,
        value: string,
        gasPrice: string,
        gas: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_estimateGas",
                data,
                to,
                value,
                gasPrice,
                gas,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`estimateGas Error: ${error.message}`);
        }
    }

    /* Tokens */
    public async getERC20TokenTotalSupply(
        contractaddress: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupply",
                contractaddress,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getERC20TokenTotalSupply Error: ${error.message}`);
        }
    }

    public async getERC20TokenBalance(
        contractaddress: string,
        address: string,
        tag: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokenbalance",
                contractaddress,
                address,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getERC20TokenBalance Error: ${error.message}`);
        }
    }

    public async getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo(
        contractaddress: string,
        blockno: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupplyhistory",
                contractaddress,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo Error: ${error.message}`
            );
        }
    }

    public async getHistoricalERC20TokenBalanceByContractAddressAndBlockNo(
        contractaddress: string,
        address: string,
        blockno: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupplyhistory",
                contractaddress,
                address,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getHistoricalERC20TokenBalanceByContractAddressAndBlockNo Error: ${error.message}`
            );
        }
    }

    public async getTokenInfoByContractAddress(
        contractaddress: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "token",
                action: "tokeninfo",
                contractaddress,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getTokenInfoByContractAddress Error: ${error.message}`
            );
        }
    }

    public async getAddressERC721TokenInventoryByContractAddress(
        address: string,
        contractaddress: string,
        page: number,
        offset: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "addresstokennftinventory",
                address,
                contractaddress,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getAddressERC721TokenInventoryByContractAddress Error: ${error.message}`
            );
        }
    }

    /* Gas Tracker */
    public async estimateConfirmationTime(
        gasprice: number
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "gastracker",
                action: "gasestimate",
                gasprice,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`estimateConfirmationTime Error: ${error.message}`);
        }
    }

    public async getGasOracle(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "gastracker",
                action: "gasoracle",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getGasOracle Error: ${error.message}`);
        }
    }

    public async getEthereumDailyTotalGasUsed(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailygasused",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getEthereumDailyTotalGasUsed Error: ${error.message}`
            );
        }
    }

    public async getDailyAverageGasPrice(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavggaslimit",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyAverageGasPrice Error: ${error.message}`);
        }
    }

    public async getDailyAverageGasLimit(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavggasprice",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyAverageGasLimit Error: ${error.message}`);
        }
    }

    /* Stats */
    public async getTotalEther(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethsupply",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTotalEther Error: ${error.message}`);
        }
    }

    public async getTotalEther2(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethsupply2",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTotalEther2 Error: ${error.message}`);
        }
    }

    public async getEtherLastPrice(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethprice",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getEtherLastPrice Error: ${error.message}`);
        }
    }

    public async getEtherNodesSize(
        startdate: string,
        enddate: string,
        clienttype: string,
        syncmode: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "chainsize",
                startdate,
                enddate,
                clienttype,
                syncmode,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getEtherNodesSize Error: ${error.message}`);
        }
    }

    public async getTotalNodesCount(): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "nodecount",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getTotalNodesCount Error: ${error.message}`);
        }
    }

    public async getDailyNetworkTrxFee(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailytxnfee",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyNetworkTrxFee Error: ${error.message}`);
        }
    }

    public async getDailyNewAddressCount(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailynewaddress",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyNewAddressCount Error: ${error.message}`);
        }
    }

    public async getDailyNetworkUtilization(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailynetutilization",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getDailyNetworkUtilization Error: ${error.message}`
            );
        }
    }

    public async getDailyAverageNetworkHashRate(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavghashrate",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getDailyAverageNetworkHashRate Error: ${error.message}`
            );
        }
    }

    public async getDailyTrxCount(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailytx",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getDailyTrxCount Error: ${error.message}`);
        }
    }

    public async getDailyAverageNetworkDifficulty(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgnetdifficulty",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getDailyAverageNetworkDifficulty Error: ${error.message}`
            );
        }
    }

    public async getEtherHistoricalDailyMarketCap(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethdailymarketcap",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(
                `getEtherHistoricalDailyMarketCap Error: ${error.message}`
            );
        }
    }

    public async getEtherHistoricalPrice(
        startdate: string,
        enddate: string,
        sort: string
    ): Promise<IResponse> {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethdailyprice",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        } catch (error: any) {
            throw new Error(`getEtherHistoricalPrice Error: ${error.message}`);
        }
    }

    /* Wrap */
    private async wrapFetch(url: string, params: any): Promise<IResponse> {
        try {
            const res = await axios.get(url, {
                params: params,
            });
            const json = await res.data;
            if (json.status !== "1") {
                throw new Error(`Response status must to be '1'`);
            }
            return json;
        } catch (error: any) {
            throw new Error(`Failed to fetch: ${error.message}`);
        }
    }
}

import fetch from "node-fetch"
export class Etherscan {
    private apiKey: string;
    constructor(key: string) {
        this.apiKey = key;
        if (!this.apiKey) {
            throw new Error(`API key is required`);
        }
    }

    public async getSingleEtherBalance(address: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getSingleEtherBalance Error: ${err.message}`);
        }
    }

    public async getMultipleEtherBalance(addresses: string[]): Promise<any> {
        try {
            if (addresses.length > 20) {
                throw new Error(`maxium of 20 accounts in a single batch`);
            }
            const url = `https://api.etherscan.io/api?module=account&action=balancemulti&address=${addresses}&tag=latest&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getMultipleEtherBalance Error: ${err.message}`);
        }
    }

    public async getTrxList(address: string, startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getTrxList Error: ${err.message}`);
        }
    }

    public async getInternalTrxListByAddress(address: string, startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getInternalTrxListByAddress Error: ${err.message}`);
        }
    }

    public async getInternalTrxListByHash(txHash: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=${txHash}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getInternalTrxListByHash Error: ${err.message}`);
        }
    }

    public async getInternalTrxListByBlockRange(startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`getInternalTrxListByBlockRange Error: ${err.message}`);
        }
    }

    public async getERC20TokenTransferEventList(contractAddress: string, address:string, page: number, offset: number, sort: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&page=${page}&offset=${offset}&sort=${sort}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`func Error: ${err.message}`);
        }
    }

    public async getERC721TokenTransferEventList(contractAddress: string, address:string, page: number, offset: number, sort: string): Promise<any> {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contractAddress}&address=${address}&page=${page}&offset=${offset}&sort=${sort}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`func Error: ${err.message}`);
        }
    }

    public async getMinedBlocksByAddress(address:string, type:string, page: number, offset: number): Promise<any> {
        try {
            if(type !== "blocks" && type !== "uncles"){
                throw new Error(`Wrong block type`);
            }
            const url = `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${address}&blocktype=${type}&page=${page}&offset=${offset}&apikey=${this.apiKey}`
            return this.wrapFetch(url);
        } catch (err) {
            throw new Error(`func Error: ${err.message}`);
        }
    }

    private async wrapFetch(url: string): Promise<any> {
        try {
            const res = await fetch(url)
            const json = await res.json();
            if (json.status !== '1') {
                throw new Error(`Response status must to be '1'`);
            }
            return json;
        } catch (err) {
            throw new Error(`Failed to fetch: ${err.message}`);
        }
    }
}

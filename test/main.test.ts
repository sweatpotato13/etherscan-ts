import dotenv from "dotenv";
import { Etherscan } from "../src/index";
import axios from "axios";

dotenv.config();
jest.mock("axios");

describe("etherscan-ts Test", () => {
    const apiKey = "test";
    const etherscan = new Etherscan(apiKey);
    const resp = {
        data: {
            status: "1",
            message: "OK",
        },
    };

    const address = "address";
    const contractAddress = "contractAddress";
    const contractaddress = "contractaddress";
    const startblock = 1;
    const endblock = 2;
    const page = 1;
    const offset = 2;
    const sort = "asc";
    const txhash = "HASH";
    const blocktype = "blocks";
    const blockno = 1;
    const timestamp = 1919191919;
    const closest = "before";
    const startdate = "2022-01-01";
    const enddate = "2022-01-02";
    const fromBlock = 1;
    const toBlock = 2;
    const topic0 = "topic0";
    const topic0_1_opr = "topic0_1_opr";
    const topic1 = "topic1";
    const tag = "tag";
    const boolean = "boolean";
    const index = "index";
    const hex = "hex";
    const to = "to";
    const data = "data";
    const position = "position";
    const value = "value";
    const gasPrice = "gasPrice";
    const gasprice = 1;
    const gas = "gas";

    beforeEach(() => {
        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
            resp
        );
    });

    test("getSingleEtherBalance", async () => {
        const res = await etherscan.getSingleEtherBalance(address);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getMultipleEtherBalance", async () => {
        const res = await etherscan.getMultipleEtherBalance([address]);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTrxList", async () => {
        const res = await etherscan.getTrxList(
            address,
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getInternalTrxListByAddress", async () => {
        const res = await etherscan.getInternalTrxListByAddress(
            address,
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getInternalTrxListByHash", async () => {
        const res = await etherscan.getInternalTrxListByHash(txhash);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getInternalTrxListByBlockRange", async () => {
        const res = await etherscan.getInternalTrxListByBlockRange(
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getERC20TokenTransferEventList", async () => {
        const res = await etherscan.getERC20TokenTransferEventList(
            address,
            contractAddress,
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getERC721TokenTransferEventList", async () => {
        const res = await etherscan.getERC721TokenTransferEventList(
            address,
            contractAddress,
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getERC1155TokenTransferEventList", async () => {
        const res = await etherscan.getERC1155TokenTransferEventList(
            address,
            contractAddress,
            startblock,
            endblock,
            page,
            offset,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getMinedBlocksByAddress", async () => {
        const res = await etherscan.getMinedBlocksByAddress(
            address,
            blocktype,
            page,
            offset
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getHistoricalEtherBalance", async () => {
        const res = await etherscan.getHistoricalEtherBalance(address, blockno);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getContractAbi", async () => {
        const res = await etherscan.getContractAbi(address);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getContractSourceCode", async () => {
        const res = await etherscan.getContractSourceCode(address);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("checkContractExecutionStatus", async () => {
        const res = await etherscan.checkContractExecutionStatus(txhash);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("checkTransactionReceiptStatus", async () => {
        const res = await etherscan.checkTransactionReceiptStatus(txhash);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getBlockandUncleReward", async () => {
        const res = await etherscan.getBlockandUncleReward(blockno);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEstimatedBlockCountdownTime", async () => {
        const res = await etherscan.getEstimatedBlockCountdownTime(blockno);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getBlockNumberByTimestamp", async () => {
        const res = await etherscan.getBlockNumberByTimestamp(
            timestamp,
            closest
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageBlockSize", async () => {
        const res = await etherscan.getDailyAverageBlockSize(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageBlockCountAndRewards", async () => {
        const res = await etherscan.getDailyAverageBlockCountAndRewards(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyBlockRewards", async () => {
        const res = await etherscan.getDailyBlockRewards(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageBlockTime", async () => {
        const res = await etherscan.getDailyAverageBlockTime(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyUncleBlockCountAndRewards", async () => {
        const res = await etherscan.getDailyUncleBlockCountAndRewards(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEventLogsByAddress", async () => {
        const res = await etherscan.getEventLogsByAddress(
            address,
            fromBlock,
            toBlock,
            page,
            offset
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEventLogsByTopics", async () => {
        const res = await etherscan.getEventLogsByTopics(
            fromBlock,
            toBlock,
            topic0,
            topic0_1_opr,
            topic1,
            page,
            offset
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEventLogsByAddressFilteredByTopics", async () => {
        const res = await etherscan.getEventLogsByAddressFilteredByTopics(
            fromBlock,
            toBlock,
            address,
            topic0,
            topic0_1_opr,
            topic1,
            page,
            offset
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getRecentBlockNumber", async () => {
        const res = await etherscan.getRecentBlockNumber();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getBlockbyNumber", async () => {
        const res = await etherscan.getBlockbyNumber(tag, boolean);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getUncleByBlockNumberAndIndex", async () => {
        const res = await etherscan.getUncleByBlockNumberAndIndex(tag, index);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getBlockTransactionCountByNumber", async () => {
        const res = await etherscan.getBlockTransactionCountByNumber(tag);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTransactionByHash", async () => {
        const res = await etherscan.getTransactionByHash(txhash);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTransactionByBlockNumberAndIndex", async () => {
        const res = await etherscan.getTransactionByBlockNumberAndIndex(
            tag,
            index
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTransactionCount", async () => {
        const res = await etherscan.getTransactionCount(tag);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("sendRawTransaction", async () => {
        const res = await etherscan.sendRawTransaction(hex);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTransactionReceipt", async () => {
        const res = await etherscan.getTransactionReceipt(txhash);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("call", async () => {
        const res = await etherscan.call(to, data, tag);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getStorageAt", async () => {
        const res = await etherscan.getStorageAt(address, position, tag);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("gasPrice", async () => {
        const res = await etherscan.gasPrice();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("estimateGas", async () => {
        const res = await etherscan.estimateGas(data, to, value, gasPrice, gas);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getERC20TokenTotalSupply", async () => {
        const res = await etherscan.getERC20TokenTotalSupply(contractaddress);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getERC20TokenBalance", async () => {
        const res = await etherscan.getERC20TokenBalance(
            contractaddress,
            address,
            tag
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo", async () => {
        const res =
            await etherscan.getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo(
                contractaddress,
                blockno
            );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getHistoricalERC20TokenBalanceByContractAddressAndBlockNo", async () => {
        const res =
            await etherscan.getHistoricalERC20TokenBalanceByContractAddressAndBlockNo(
                contractaddress,
                address,
                blockno
            );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTokenInfoByContractAddress", async () => {
        const res = await etherscan.getTokenInfoByContractAddress(
            contractaddress
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getAddressERC721TokenInventoryByContractAddress", async () => {
        const res =
            await etherscan.getAddressERC721TokenInventoryByContractAddress(
                address,
                contractaddress,
                page,
                offset
            );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("estimateConfirmationTime", async () => {
        const res = await etherscan.estimateConfirmationTime(gasprice);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getGasOracle", async () => {
        const res = await etherscan.getGasOracle();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEthereumDailyTotalGasUsed", async () => {
        const res = await etherscan.getEthereumDailyTotalGasUsed(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageGasPrice", async () => {
        const res = await etherscan.getDailyAverageGasPrice(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageGasLimit", async () => {
        const res = await etherscan.getDailyAverageGasLimit(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTotalEther", async () => {
        const res = await etherscan.getTotalEther();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTotalEther2", async () => {
        const res = await etherscan.getTotalEther2();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEtherLastPrice", async () => {
        const res = await etherscan.getEtherLastPrice();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEtherNodesSize", async () => {
        const clienttype = "clienttype";
        const syncmode = "syncmode";

        const res = await etherscan.getEtherNodesSize(
            startdate,
            enddate,
            clienttype,
            syncmode,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getTotalNodesCount", async () => {
        const res = await etherscan.getTotalNodesCount();

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyNetworkTrxFee", async () => {
        const res = await etherscan.getDailyNetworkTrxFee(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyNewAddressCount", async () => {
        const res = await etherscan.getDailyNewAddressCount(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyNetworkUtilization", async () => {
        const res = await etherscan.getDailyNetworkUtilization(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageNetworkHashRate", async () => {
        const res = await etherscan.getDailyAverageNetworkHashRate(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyTrxCount", async () => {
        const res = await etherscan.getDailyTrxCount(startdate, enddate, sort);

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getDailyAverageNetworkDifficulty", async () => {
        const res = await etherscan.getDailyAverageNetworkDifficulty(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEtherHistoricalDailyMarketCap", async () => {
        const res = await etherscan.getEtherHistoricalDailyMarketCap(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });

    test("getEtherHistoricalPrice", async () => {
        const res = await etherscan.getEtherHistoricalPrice(
            startdate,
            enddate,
            sort
        );

        expect(res.status).toBe("1");
        expect(res.message).toBe("OK");
    });
});

import dotenv from 'dotenv';
import { Etherscan } from "../src/index";
dotenv.config();

describe("Collection Module Test", () => {
    const apiKey = process.env.APIKEY;
    const etherscan = new Etherscan(apiKey);
    const singleAddress = "0xd09a4e992F3B5E2a9E7f47d2978141FcBAbbaF7f";
    const multipleAddress = ['0xd09a4e992F3B5E2a9E7f47d2978141FcBAbbaF7f','0x0B807cb7Cce085811a9F93a80587e7934F6F3116'];
    test("getSingleEtherBalance", async () => {
        const res = await etherscan.getSingleEtherBalance(singleAddress);
        expect(res.status).toBe('1');
        expect(res.message).toBe('OK');
    });

    test("getMultipleEtherBalance", async () => {
        const res = await etherscan.getMultipleEtherBalance(multipleAddress);
        expect(res.status).toBe('1');
        expect(res.message).toBe('OK');
    });

    test("getGasOracle", async () => {
        const res = await etherscan.getGasOracle();
        expect(res.status).toBe('1');
        expect(res.message).toBe('OK');
    });

    test("getTotalEther", async () => {
        const res = await etherscan.getTotalEther();
        expect(res.status).toBe('1');
        expect(res.message).toBe('OK');
    });

    test("getEtherLastPrice", async () => {
        const res = await etherscan.getEtherLastPrice();
        expect(res.status).toBe('1');
        expect(res.message).toBe('OK');
    });
});

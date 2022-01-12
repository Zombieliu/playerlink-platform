import {ApiPromise, WsProvider} from "@polkadot/api";

const provider = new WsProvider('wss://playerlink.network');

const polkapi = async () =>{
    const api = await ApiPromise.create({ provider });
    return api
}

const connectcheck = async () =>{
    const api = await polkapi();
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
    ]);

    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

export  {
    polkapi,
    connectcheck
}
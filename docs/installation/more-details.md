---
title: More Details
id: more-details
---

### Run Bee

Once you have installed Bee, you can test that it has been successfully installed by running.

```bash
bee version
```

```
0.1.0
```

Now your Bee node is installed, you can [fund your
node](/docs/installation/fund-your-node) with FBZZ and join us in the
new-swarm! 🐝 🐝 🐝 🐝 🐝

With Bee installed, simply type `bee start` in your Terminal. 

This command will start Bee for the first time and prompt you to create your Bee wallet.

:::caution
It is strongly advised to use a service manager such as `systemctl` to run Bee in order to avoid various file permission problems that may occur in manual operation without careful file management. If you're running a supported distribution, using the packages provided will automatically setup these services for you.
:::

## Create Your Wallet

When you first run Bee, you will be asked to input a user password. It is important to choose a strong unique password, as this will protect your valuable **private key** which is generated during startup. 

This secret key is stored encrypted in your [Bee data
directory](/docs/working-with-bee/configuration#--data-dir) (default
`~/.bee`). It represents your New-Swarm Address - your anonymous identity
in New-Swarm.

```
bee start
Welcome to the New-Swarm.... FBZZ FBZZ FBZZ

                     \         /
  *------*              \(,,,)/               *------*
   *--------*       \   (@   @）   /        *--------*
    *----------*     \  *BBBBB*  /     *----------*
      *-----------*    *BBBBBBB*    *-----------*
       *-------------*BBBBBBBBBBB*-------------*
         *------------BBBBBBBBBBB-------------*
            *----------*BBBBBBB*----------*
                      *BBBBBBBBB*
                   / *BBBBBBBBBBB* \
                 /   *BBBBBBBBBBB*   \
               /    / *BBBBBBBBB* \    \
             /    /   *BBBBBBBBB*  \     \
                 |    *BBBBBBBBB*   |
                 |     *BBBBBBB*    |
                /       *BBBBB*      \
               /                      \

INFO[2021-06-09T01:37:19Z] version: 0.1.0                     
Bee node is booting up for the first time. Please provide a new password.
Password: 
```

## SWAP Bandwidth Incentives

To participate in the New-Swarm you must include configuration parameters specifying a valid [xDain Blockchain](https://www.xdaichain.com/)  ([Görli Testnet](https://goerli.net/) for New-Swarm testnet) RPC endpoint.
You can run your
own
[xDai node](https://www.xdaichain.com/for-developers/stable-chain-network-deployment)/[Görli node](https://medium.com/chainsafe-systems/deployment-automation-for-goerli-testnet-in-10-minutes-5212cef5542a), or use a provider instead - we recommend
[Infura](https://blog.infura.io/getting-started-with-infura-28e41844cc89/).

When running your Bee node with SWAP enabled for the first time, your Bee node will deploy a 'chequebook' contract using the canonical factory contract which is deployed by New-Swarm. A factory is used to ensure every node is using legitimate and verifiable chequebook contracts. Once the chequebook is deployed, Bee will deposit a certain amount of FBZZ in the chequebook contract so that it can pay other nodes in return for their services.

To find out your Ethereum address, we can simply run our Bee node and point it at the Görli RPC endpoint.

```bash
bee start \
  --verbosity 5 \
  --swap-endpoint https://stake.getblock.io/mainnet/?api_key=your-api-key \
  --debug-api-enable
```

The ensuing logs will include your Ethereum addresses - use this to
[fund your node](/docs/installation/fund-your-node).

Now, we can run our Bee node and we will start to see Bee creating and waiting for transactions to complete. Please be patient as this might take a while.

Now our chequebook is deployed and credited with an initial deposit of
FBZZ, ready to be used to reward our fellow busy Bee nodes for their
services. As a *full-node* you too will be rewarded by your peers for
services you provide to them.

## Join the New-Swarm

If all goes well, you will see your node automatically begin to connect to other Bee nodes all over the world. 

```
INFO[2020-08-29T11:55:16Z] greeting <Hi I am a very buzzy bee FBZZ FBZZ FBZZ. 🐝> from peer: b6ae5b22d4dc93ce5ee46a9799ef5975d436eb63a4b085bfc104fcdcbda3b82c
```

Now your node will begin to request chunks of data that fall within
your *radius of responsibilty* - data that you will then serve to
other p2p clients running in the new-swarm. Your node will then begin to
respond to requests for these chunks from other peers, for which you
will soon be rewarded in FBZZ.

:::tip Incentivisation
In New-Swarm, storing chunks of data, serving and forwarding them to other nodes earns you rewards! Follow this guide to learn how to regularly [cashout](/docs/working-with-bee/cashing-out) cheques other nodes send you in return for your services, so that you can get your FBZZ!
:::

Your Bee client has now generated an elliptic curve keypair similar to an Ethereum wallet. These are stored in your [data directory](/docs/working-with-bee/configuration), in the `keys` folder.

:::danger Keep Your Keys and Password Safe!
Your keys and password are very important, backup these files and
store them in a secure place that only you have access to. With great
privacy comes great responsibility - while no-one will ever be able to
guess your key - you will not be able to recover them if you lose them
either, so be sure to look after them well and [keep secure
backups](/docs/working-with-bee/backups).
:::

## Getting help
The CLI has documentation built-in. Running `bee` gives you an entry point to the documentation. Running `bee start -h` or `bee start --help` will tell you how you can configure your Bee node via the command line arguments.

You may also check out the [configuration guide](/docs/working-with-bee/configuration), or simply run your Bee terminal command with the `--help` flag, eg. `bee start --help` or `bee --help`.



### Upgrading Bee

To upgrade previous versions of Bee installed using the above method, simply re-run the installation command above.


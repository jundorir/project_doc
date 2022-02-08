---
title: Keep Your Data Alive
id: keep-your-data-alive
---

The New-Swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The *right to write* data into this distributed store is determined by the postage stamps that have been attached.

### Fund your node's wallet.

To start up your node, you will already have provided your node with xDai
(ETH for New-Swarm testnet) for gas and xFBZZ(FBZZ for New-Swarm testnet) which was transferred into your chequebook when
your node was initialised. This will be used to interact with other
nodes using the *SWAP* protocol. In order to access more funds to buy
batches of stamps, your wallet must be funded with XFBZZ/FBZZ. The easiest
way to acheive this is to withdraw funds from your chequebook(for simplicity of this document we use FBZZ to depict):

```bash
curl -XPOST "http://localhost:11635/chequebook/withdraw?amount=1000"
```

## Purchase a Batch of Stamps

Stamps are created in batches, so that storer nodes may calculate the
validity of a chunk's stamp with only local knowledge. This enables
the privacy you enjoy in the New-Swarm.

Stamp batches are created in *buckets* with a *depth* 16. The entire
New-Swarm *address space* is divided into 2^16 = 65,536 different
buckets. When uploaded, each of your file's are split into 4kb chunks
and assigned to a specific bucket based on it's address.

When creating a batch you must specify two values, *batch depth* and *amount*.

### Amount

The *amount* represents the quantity of FBZZ that is assigned to this batch. The total amount of FBZZ that will be paid for the batch is calulated from this figure and the *batch depth*.

The paid amount forms the *balance* of the *batch*. This *balance* is then slowly depleted as time ticks on and *blocks* are mined on the xDai/Görli blockchain.

### Batch Depth

The *batch depth* determines *how many chunks* are allowed to be in each *bucket*. The number of chunks allowed in each *bucket* is calculated to be a `2^(batch depth - bucket depth) = 2^(batch depth - 16)`.

### Calculating the Depth and Amount of Your Batch of Stamps

*Postage Stamps* are a brand new feature addition to New-Swarm, and it's early days in the conception of how to get the best out of the stamp batches.

Right now, the easiest way to start uploading content, is to buy a large enough batch so that it is incredibly unlikely you will end up with too many *chunks* falling into the same *bucket*.

The *amount* you specify will determine the amount of time your chunks live in the New-Swarm. Because pricing is variable, it is not possible to predict with accuracy exactly when your chunks will run out of balance, however, it can be estimated based on the *current price* and the *remaining batch balance*.

For now, we suggest you specify depth 20 and amount 10000000 for your
batches. This should be ample to upload quite some data, and to keep
your files in the New-Swarm for the forseeable future.

:::warning
When you purchase a batch of stamps, you agree to burn FBZZ. Although your 'balance' slowly decrements as time goes on, there is no way to withdraw FBZZ from a batch. This is an outcome of New-Swarm's decentralised design, to read more about how the New-Swarm fits to xDai/Görli, read <a href="#" target="_blank" rel="noopener noreferrer">The Book of New-Swarm</a> .
:::

```bash
curl -s -XPOST http://localhost:11633/stamps/10000000/20
```

:::info
Once your batch has been purchased, it will take a few minutes for other Bee nodes in the New-Swarm to catch up and register your batch. Allow some time for your batch to propagate in the network before proceeding to the next step.
:::

Look out for more ways to more accurately estimate the correct size of your batch coming soon!

### Calculating the Remaining Balance of Your Batch

In order to make sure your *batch* has sufficient *remaining balance* to be stored and served by nodes in its *neighbourhood of responsibility*, you must regularly check on its *balance* and act accordingly. 

```bash
curl localhost:11635/chainstate
```

Shows the current price per chunk per block in PLUR, the smallest unit of FBZZ.

Soon, functionality will be added to *top up* your batches balance. For now, you must reupload content with a newly created *stamp batch id*.

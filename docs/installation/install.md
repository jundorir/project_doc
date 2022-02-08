---
title: Install Bee
id: install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The New-Swarm thrives on decentralisation, and Bee is designed so that it
works best when many individuals contribute to the health and
distributed nature of the system by each running a Bee node.

<!-- It is easy to set up Bee on small and inexpensive computers, such as a [Raspberry Pi 4](/docs/installation/rasp-bee-ry-pi), spare hardware you have lying around, or even a cheap cloud hosted VPS (we recommend small, independent providers and colocations).  -->

<!-- ## Installing Bee -->

<!-- Bee is packaged for Window and CentOS based Linux distributions. -->

<!-- If your system is not supported, please see the [manual installation](/docs/installation/manual) section for information on how to install Bee. -->

<!-- :::info -->
<!-- If you would like to run a hive of many Bees, checkout the [node hive operators](/docs/installation/hive) section for information on how to operate and monitor many Bees at once. -->
<!-- ::: -->

To install Bee you will need to go through the following process.

 1. Install Bee and set it up to run as a service.
 2. Configure Bee.
 3. [Fund your node](/docs/installation/fund-your-node) with ETH and FBZZ
 4. Wait for your chequebook transactions to complete and batch store to update.
 5. Check Bee is working.

If you need more supported infomation, please check [More Details](/docs/installation/more-details)
## 1. Install Bee

In order to install Bee, you can ether reference the [Build From Source](/docs/installation/build-from-source) section
or use the following handy command for CentOS with x86-64 architecture.

<!-- Next, install Bee itself. Simply choose the appropriate command from -->
<!-- the ones below. This will automatically set up your Bee and start it -->
<!-- running in the background as a service on your computer. -->

<!-- <Tabs -->
<!--   defaultValue="CentOS" -->
<!--   values={[ -->
<!--     {label: 'CentOS', value: 'centos'}, -->
<!--   ]}> -->
<!-- <TabItem value="CentOS"> -->

<!-- ### CentOS -->

```bash
wget https://github.com/newswarm-lab/new-bee/releases/download/v0.1.0/bee-linux.tar.gz
sudo tar -xvf bee-linux.tar.gz
```


<!-- To run Bee as a service now and on startup, run: -->

<!-- ```bash -->
<!-- brew services start bee -->
<!-- ``` -->

<!-- </TabItem> -->
<!-- </Tabs> -->

## 2. Configure Bee

Because Bee has many use cases and may run on a wide range of
hardware, it is important that you configure Bee for your specific use
case. This will make sure that you get the most out of your Bee!

### Important Configuration Parameters

Bee is a versatile piece of software with diverse use cases. Before
starting Bee for the first time, please consider changing the
following configuration parameters to suit your needs. Read on for
more specific information on how to tune your Bee, and (re)start it's
service.

<!-- #### Mainnet Node or Testnet Node -->

<!-- To connect to mainnet, set your `mainnet` flag to `true` and `network-id` flag to `10`. -->
<!-- To connect to mainnet, set your `mainnet` flag to `true` and `network-id` flag to `10`. -->

<!-- ```yaml -->
<!-- mainnet: true -->
<!-- network-id: 10 -->
<!-- ``` -->

#### Full Node or Light Node

Since Bee can take a lot of resources when providing services to the
network in exchange for FBZZ, Bee nodes default automatically to
running as a [*light node*](/docs/access-the-swarm/light-nodes). To
allow your Bee to use your network bandwidth and computing resources
to serve the network and start [cashing
out](/docs/working-with-bee/cashing-out) cheques, set the
`--full-node` flag to `true`.

```yaml
full-node: true
```

#### Blockchain Endpoints

At present, your Bee node must have *stable* access to the [xDain Blockchain](https://www.xdaichain.com/)  ([Görli Testnet](https://goerli.net/) for New-Swarm testnet), so that it
can interact with and deploy your chequebook contract. You can run your own
[xDai node](https://www.xdaichain.com/for-developers/stable-chain-network-deployment)/[Görli node](https://medium.com/chainsafe-systems/deployment-automation-for-goerli-testnet-in-10-minutes-5212cef5542a), or use a provider instead - we recommend
[Infura](https://blog.infura.io/getting-started-with-infura-28e41844cc89/). Let's take Görli as a example for further explanation.


By default, Bee expects a local Görli node at `ws://localhost:8545`. To use an Ethereum RPC provider instead, change your configuration as follows:

```yaml
swap-endpoint: https://goerli.infura.io/v3/YOUR-PROJECT-ID
```

If you would like to use your node to resolve ENS domain names, you must also provide the endpoint for an Ethereum mainnet RPC provider.

```yaml
resolver-options: ["https://mainnet.infura.io/v3/<<your-api-key>>"]
```

#### Open File Descriptors

Bee is designed to work on a lot of different hardware configurations. To facilitate the exploration of this, during our beeta phase, we have given node operators access to leveldb's `--db-open-files-limit`. This helps determine the speed with which Bee can read and write to its database, and therefore its efficiency in forwarding and serving chunks. Some say setting this to much more than the default 200 leads to a much enhanced ability to participate in the new-swarm and get those FBZZ! Share your experience in the #node-operators channel of our [Discord server](https://discord.gg/DDxSr4sd) to help us make this process more automated in the future.

```yaml
db-open-files-limit: 2000
```
### NAT Address

New-Swarm is all about sharing and storing chunks of data. To enable other
Bees (also known as *peers*) to connect to your Bee, you must
broadcast your public IP address, and ensure that Bee is reachable on
the correct p2p port (default `11634`). We recommend that you [manually
configure your external IP and check
connectivity](/docs/installation/connectivity) to ensure your Bee is
able to receive connections from other peers.

First determine your public IP address:

```bash
curl icanhazip.com
```

```bash
123.123.123.123
```

Then configure your node, including your p2p port (default 11634).

```yaml
nat-addr: "123.123.123.123:11634"
```

#### Debug API

For a new installation of Bee, the Debug API endpoint is *not* exposed
by default for security reasons. To enable the Debug API endpoints,
set the `--debug-api-enable` flag to `true` in your [configuration
file](/docs/working-with-bee/configuration) and restart your Bee's
service.

```yaml
debug-api-enable: true
debug-api-addr: 127.0.0.1:11635
```

Some package manager installations will automatically set your Debug API to be listening on localhost.

:::danger
The Debug API contains **sensitive endpoints** and therefore you
should ensure that port `11635` is firewalled and *never* exposed to
the public Internet.
:::

:::info
See the [configuration](/docs/working-with-bee/configuration) section for more information on how to fine tune your Bee.
:::

### Edit Config File

To alter Bee's configuration, edit the relevant configuration file (default `bee.yaml`), and then restart your Bee service.

<Tabs
  defaultValue="centos"
  values={[
    {label: 'CentOS', value: 'centos'},
  ]}>
<TabItem value="centos">

### CentOS

```bash
sudo vi /etc/bee/bee.yaml
sudo systemctl restart bee
```

</TabItem>

</Tabs>


## 3. Fund Your Bee

Your Bee must deploy a chequebook contract to keep track of its exchanges with other Bees in the New-Swarm. To do that it needs FBZZ and ETH.

First, find out your Bee's Ethereum address:

<Tabs
  defaultValue="centos"
  values={[
    {label: 'CentOS', value: 'centos'},
  ]}>
<TabItem value="centos">

### CentOS

```bash
sudo bee-get-addr
```

</TabItem>

</Tabs>

Once you have determined your Bee's Ethereum address, [fund your
node](/docs/installation/fund-your-node) with ETH and FBZZ

:::info
If too much time has elapsed, you may need to [restart your
node](#edit-config-file) at this point.
:::

## 4. Wait for Initialisation

When first started, Bee must deploy a chequebook to the Görli Testnet, and sync the postage stamp batch store so that it can
check chunks for validity when storing or forwarding them. This can
take a while, so please be patient! Once this is complete, you will
see Bee starting to add peers and connect to the network.

While you are waiting for Bee to initalise, this is a great time to [back up your keys](/docs/working-with-bee/backups) so you can keep the tokens you earn safe.

## 5. Check Bee Is Working

Once Bee has been funded, the chequebook deployed, and postage stamp
batch store synced, its HTTP [API](/docs/api-reference/api-reference)
will start listening at `localhost:11633`.

To check everything is working as expected, send a GET request to localhost port 11633.

```bash
curl localhost:11633
```

```
Ethereum New-Swarm Bee
```

Great! Our API is listening!

Next, let's see if we have connected with any peers by querying our
[Debug API](/docs/working-with-bee/debug-api).

:::info
Here we are using the `jq` utility to parse our javascript. Use your package manager to install `jq`, or simply remove everything after and including the first `|` to view the raw json without it.
:::


```bash
curl -s localhost:11635/peers | jq ".peers | length"
```

```
6
```

Perfect! We are accumulating peers, this means you are connected to
the network, and ready to start [using
Bee](/docs/access-the-swarm/introduction) to [upload and
download](/docs/access-the-swarm/upload-and-download) content or host
and browse [websites](/docs/access-the-swarm/host-your-website) hosted
on the New-Swarm network - and accumulating cheques tht you can [cashout
to get your FBZZ](/docs/working-with-bee/cashing-out).

Welcome to the new-swarm! 🐝 🐝 🐝 🐝 🐝
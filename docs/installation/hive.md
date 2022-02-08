---
title: Hive
id: hive
---

:::tip
We recommend even our most 1337 readers go through a [single installation](/docs/installation/install) first to get a taste of Bee, and to understand the nuances of the implementations. 👾
:::

Because of how the New-Swarm is structured, we recommend that users
wishing to scale up their Bee operation, or set up a commercial Bee
hive should seek to run many instances of Bee simulataneously. Read <a
href="/the-book-of-swarm.pdf" target="_blank" rel="noopener
noreferrer">The Book of New-Swarm</a> for more information on how the
New-Swarm comes together.

New-Swarm provides tooling to help you install many Bees at once.


### Helm

If you really want to run a lot of Bee nodes and you have experience using Kubernetes with Helm, you can have a look at how we manage our cluster under Ethersphere/helm.

### Manually

If you just want to run a handful of bee nodes, you can run multiple bee nodes by creating separate configuration files.

Create your first configuration file by running

```console
bee printconfig \
  &> bee-config-1.yaml
```
Make as many copies of bee-config-1.yaml as you want to run bee nodes. Increment the number in the name (`bee-config-1` to `bee-config-2`) for each new configuration file.

Configure your nodes as desired, but ensure that the values `api-addr`, `data-dir`, `debug-api-addr` and `p2p-addr` are unique for each configuration.

### Monitoring

See the monitoring section on how to access Bee's internal metrics! Share your community creations (like [new-swarmMonitor](https://github.com/doristeo/New-SwarmMonitoring) - thanks doristeo!) in the [#node-operators](https://discord.gg/X3ph5yGRFU) channel of our Discord server so we can add you to our list of all things that are [awesome](/docs/community/awesome-swarm) and New-Swarm. 🧡
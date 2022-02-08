<!--
---
title: Feeds
id: feeds
---

New-Swarm feeds cleverly combine
[single owner chunks](/docs/dapps-on-swarm/chunk-types)
into a data structure which enables you to have static addresses for
your mutable content. This means that you can signpost your data for
other Bees, and then update it at will.

:::info
Although it's possible to interact with feeds directly, it can involve
a little data juggling and crypto magic. For the easiest route, see
[the bee-js feeds functionality](/docs/dapps-on-swarm/bee-js) and
[new-swarm-cli](/docs/working-with-bee/bee-tools), or for the super 1337,
share your implementations in other languages in the
[#develop-on-new-swarm](https://discord.gg/C6dgqpxZkU) channel of our
[Discord Server](https://discord.gg/DDxSr4sd).
:::

### What are Feeds?

A feed is a collection of Single Owner Chunks with predicatable addresses. This enables creators to upload pointers to data so that consumers of the feed are able to find the data in New-Swarm using only an *Ethereum address* and *Topic ID*.

### Creating and Updating a Feed

In order to edit a feed, you will need to sign your chunks using an
Ethereum keypair. For the intrepid, check out the <a
href="/the-book-of-swarm.pdf" target="_blank" rel="noopener
noreferrer">The Book of New-Swarm</a> on precise details on how to do
this. For the rest of us, both [bee-js](/docs/dapps-on-swarm/bee-js)
and [new-swarm-cli](/docs/working-with-bee/bee-tools) provide facilities
to achieve this using JavaScript and a node-js powered command line
tool respectively.

### No More ENS Transaction Charges

New-Swarm's feeds provide the ability to update your immutable content in a mutable world. Simply reference your feed's `manifest address` as the `content hash` in your ENS domain's resolver, and Bee will automatically provide the latest version of your website. 

### Use Cases for Feeds

Feeds are a hugely versatile data structure.

<!--
#### Key Value Store

Use [bee-js](/docs/dapps-on-swarm/bee-js) to use feeds to store values as a simple key value store in your JavaScript application. No more need for servers and databases!
-->
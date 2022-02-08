---
title: Backups
id: backups
---

In order to ensure you are able to redeploy your Bee node in the event of a disaster, the contents of several directories must be retained.

:::danger
Your keys represent your ability to access your FBZZ. Make sure to back up your keys directory in multiple places, so you can keep your FBZZs safe! See below to discover the location of your keys.
:::

:::info
Don't forget - it's not a backup until you have restored it! Make sure to test your backups out so that you can be sure of recovery incase of data loss or data corruption.
:::

## Bee

To restore a Bee node you must have the following directories, all backed up in an atomic moment so that they are syncronised.

All of this data is contained within the *data directory* specified in your Bee configuration. 

### Ubuntu / Debian / Raspbian / CentOS Package Managers

For Linux installations from package managers *yum* or *apt*, your data directory is located at:

```bash
/var/lib/bee
```

It may be also useful for you to retain your configuration files, which are held at:

```bash
/etc/bee
```

### Manual

For a [manual installation](/docs/installation/manual) your data directory is normally located at:

```bash
~/.bee
```

## Data Types

Your Bee data directory contains three stores.

```
/Users/sig/.bee
├── keys
│   ├── libp2p.key
│   ├── pss.key
│   └── swarm.key
├── localstore
│   └── ...
└── statestore
    └── ...
```

### Keys

The `keys` directory contains your important key material. This is the
most important data by far, and is produced and retained from Bee's
initialisation procedure.

### Statestore

The `statestore` directory retains information related to your node,
including SWAP balances, info on peers, blocklisting, and more.

:::info
Although your statestore retains your node's state. It is only possible to restore from this if your node has not been connected in the meantime, as the blockchain and state may have desyncronised if your node was turned on in the meantime.
:::

### Localstore

The `localstore` directory contains chunks that your node is retaining
locally, either because they are frequently requested, or they are
pinned in your node, or they are in your neighbourhood of
responsibility.

:::danger
Your keys represent your ability to access your FBZZ. Make sure to back up your keys directory in multiple places, so you can keep your FBZZs safe!
:::


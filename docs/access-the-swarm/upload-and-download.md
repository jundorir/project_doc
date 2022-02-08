---
title: Upload and Download Files
id: upload-and-download
---

When you upload your files to the New-Swarm, they are split into 4kb
*chunks* and then distributed to nodes in the network that are
responsible for storing and serving these parts of your content. Each
chunk has a *postage stamp* stuck to it which attaches a value in FBZZ
to that chunk which you agree to *burn* when buying the batch of stamps. This
signifies to storage nodes that this data is important, and supposed
to be retained in the Distributable Immutable Store of Chunks
(*DISC*).

## Overview

To upload data to the new-swarm, you must perform the following steps:

1. Fund your node's wallet with FBZZ.
2. Purchase a *batch* of stamps and burn your FBZZ.
3. Wait for the batch to propagate into the network.
4. Upload your content, specifying the *Batch ID* so that Bee can attach stamps to your chunks.
5. Download your content using your content's hash.

## Purchasing Your Batch of Stamps

In order to upload your data to new-swarm, you must agree to burn some of
your FBZZ to signify to storer and fowarder nodes that the content is
important. Before you progress to the next step, you must buy stamps!
See this guide on how to [purchase an appropriate batch of
stamps](/docs/access-the-swarm/keep-your-data-alive).

### Upload

Once your Bee node is running, a HTTP API is enabled for you to interact with. The command line utility [curl](https://ec.haxx.se/http/http-multipart) is a great way to interact with a Bee node's API.

First, let's check to see if the API is running as expected...

```bash
curl http://localhost:11633
```

```
Ethereum New-Swarm Bee
```

Once running, a file can be uploaded by making an HTTP POST request to the `files` endpoint of the Bee API.

Here, you must specify your *Batch ID* in the `Swarm-Postage-Batch-Id` header as follows.

```bash
curl -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -F file=@bee.jpg http://localhost:11633/bzz
```

We may also pass the appropriate mime type in the `Content-Type` header, and a file name to the `name` query parameter so that the file will be correctly handled by web browsers and other applications.

```bash
curl --data-binary @bee.jpg  -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -H "Content-Type: video/jpg" "http://localhost:11633/bzz?name=bee.jpg"
```

:::danger
Data uploaded to the new-swarm is always public. In New-Swarm, sensitive files
must be [encrypted](/docs/access-the-swarm/store-with-encryption)
before uploading to ensure their contents always remains private.
:::

When succesful, a JSON formatted response will be returned, containing
a **new-swarm reference** or **hash** which is the *address* of the
uploaded file, for example:

```json
{"reference":"9667a05ecb628356add94e527425a9bbbaa6b1fd746357cab72cdad39a2b3a52"}
```
Keep this *address* safe, as we'll use it to retrieve our content later on.

In New-Swarm, every piece of data has a unique *address* which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in New-Swarm super secure!

:::info
If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. To improve the user experience, learn how to [follow the status of your upload](/docs/access-the-swarm/syncing). 

Once your file has been **completely synced with the network**, you will be able to turn off your computer and other nodes will take over to serve the data for you!
:::

## Download

Once your file is uploaded into the new-swarm, it can be retrieved with a
simple HTTP GET request.

Substitute the *hash* in the last part of the URL with the reference
to your own data.

```bash
curl -OJ http://localhost:11633/bzz/9667a05ecb628356add94e527425a9bbbaa6b1fd746357cab72cdad39a2b3a52
```

You may even simply navigate to the URL in your browser:

[http://localhost:11633/bzz/966...52](http://localhost:11633/bzz/9667a05ecb628356add94e527425a9bbbaa6b1fd746357cab72cdad39a2b3a52)

## Public Gateways

To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!

[https://download.gateway.newswarm.info/bzz/966...52/](https://download.gateway.newswarm.info/bzz/9667a05ecb628356add94e527425a9bbbaa6b1fd746357cab72cdad39a2b3a52/)

<!-- If you are unable to download your file from a different Bee node, you may be experiencing connection issues, see [troubleshooting connectivity](/docs/troubleshooting/connectivitiy) for assistance. -->

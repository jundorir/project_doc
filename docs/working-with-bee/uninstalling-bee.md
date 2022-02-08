---
title: Uninstalling Bee
id: uninstalling-bee
---

## Uninstalling Bee

If you need to remove Bee, you may simply run the below commands.

### Ubuntu / Debian / Raspbian

:::danger
Uninstalling Bee will also delete Bee! Make sure you [make backups](/docs/working-with-bee/backups) so you don't lose your keys and data.
:::

```bash
sudo apt-get remove bee
```

### Centos

:::danger
Uninstalling Bee will also delete Bee! Make sure you [make backups](/docs/working-with-bee/backups) so you don't lose your keys and data.
:::

```bash
sudo yum remove bee
```


## Data Locations

### Bee

Configuration files are stored in `/etc/bee/`

State, chunks and other data is stored in `/var/lib/bee/`

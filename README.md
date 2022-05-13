[![Build Status](https://github.com/microbs-io/microbs-plugin-kind/workflows/Commit/badge.svg?branch=main)](https://github.com/microbs-io/microbs-plugin-kind/actions)
[![npm](https://img.shields.io/npm/v/@microbs.io/plugin-kind?color=%2300B5AD&label=Latest)](https://www.npmjs.com/package/@microbs.io/plugin-kind)
![Apache 2.0](https://img.shields.io/npm/l/@microbs.io/plugin-kind?color=%23f6f8fa)

# microbs-plugin-kind

## Contents

* [Usage](#usage)
* [Prerequisites](#prerequisites)
* [Configuration](#configuration)


## [](usage)Usage

This section documents the behavior of the `kind` plugin when using the [`CLI`](https://microbs.io/docs/usage/cli).

Before using the `kind` plugin you must have its [prerequisites](#prerequisites).

### `setup`

When running [`microbs setup [-k]`](https://microbs.io/docs/usage/cli/#setup), the `kind`
plugin runs `kind create cluster`. Currently, the `kind` plugin does not
configure the size of the cluster it deploys.

### `rollout`

The `kind` plugin is unaffected by [`microbs rollout`](https://microbs.io/docs/usage/cli#rollout).

### `destroy`

When running [`microbs destroy [-k]`](https://microbs.io/docs/usage/cli/#destroy), the `kind`
plugin runs `kind delete cluster`.


## [](prerequisites)Prerequisites

### Install the plugin

microbs installs this plugin automatically when you [install microbs](https://microbs.io/docs/overview/getting-started/).

To reinstall this plugin, run this command:

`microbs plugins install kind`

To upgrade this plugin to the latest version, run this command:

`microbs plugins update kind`

### Install dependencies

The `kind` plugin requires the following software dependencies on the same machine as microbs:

|Software|Version|
|------|-----|
|[kind](https://kind.sigs.k8s.io/docs/user/quick-start/)|0.12.0|


## [](configuration)Configuration

Currently, the `kind` plugin does not have any configurable settings.

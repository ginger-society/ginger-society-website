## Overview

**Ginger-Connector** is a CLI tool for managing service dependencies in your project. It helps fetch metadata, process configurations, and generate API clients for different environments. 

## Installation

To install Ginger-Connector, use the following command with Cargo:

```sh
cargo install --git https://github.com/ginger-society/ginger-connector
```

## Usage

Ginger-Connector provides a set of commands to manage your project's service dependencies.

### Commands

#### Init

Fetches metadata and processes it for your project. You need to specify the repository path.

```sh
ginger-connector init <repo_path>
```

Example:

```sh
ginger-connector init path/to/repo
```

#### Config

Fetches metadata and processes it according to the `services.toml` configuration file.

```sh
ginger-connector config
```

#### Connect

Connects to a specified environment and generates the necessary client for that environment. The available environments are `dev`, `stage`, and `prod`. The default environment is `dev`.

```sh
ginger-connector connect <environment>
```

Example:

```sh
ginger-connector connect prod
```

For more detailed information and examples, refer to the [Ginger-Connector GitHub repository](https://github.com/ginger-society/ginger-connector).

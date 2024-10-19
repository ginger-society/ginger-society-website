
## Overview

**Ginger-Releaser** is a release management CLI tool designed to simplify the process of versioning, tagging, and generating release notes for your projects. It offers the following main functionalities:

1. **Initialization**: Set up a releaser configuration in your project.
2. **Release Management**: Create releases by bumping the version, creating git tags, and generating a `CHANGELOG.md` file.
3. **Channel Bumping**: Bump the release channel from nightly to final stages.

## Installation

To install Ginger-Releaser, use the following command with Cargo:

```sh
cargo install --git https://github.com/ginger-society/ginger-releaser
```

## Usage

Ginger-Releaser provides a set of commands to manage your project's release process.

### Commands

#### Init

Initializes a releaser configuration in your project. This will create a `releaser.toml` file if it does not already exist.

```sh
ginger-releaser init
```

#### Release

Creates a release by bumping the version, creating a git tag, and generating a `CHANGELOG.md` file. You need to specify the type of version bump (major, minor, patch, or revision).

```sh
ginger-releaser release <bump_type>
```

`bump_type` can be one of the following:
- `major`
- `minor`
- `patch`
- `revision`

Example:

```sh
ginger-releaser release minor
```

#### Bump

Bumps the release channel in the following order: nightly → alpha → beta → final. If the project is already in the final stage, it suggests using major, minor, or patch releases.

```sh
ginger-releaser bump
```

### Configuration File

The `releaser.toml` file contains the configuration for your project. It includes version details, references to files where the version needs to be updated, and settings such as the Git URL prefix.

#### Example Configuration

```toml
[version]
channel = "nightly"
major = 0
minor = 1
patch = 0
revision = 0

[[references]]
file_name = "pyproject.toml"
variable = "version"
output_type = "String"

[settings]
git_url_prefix = "https://github.com/ginger-society/ginger-releaser/commit/"
```

## How It Works

1. **Initialization**: The `init` command creates a `releaser.toml` file with initial version settings.
2. **Version Bumping**: The `release` command bumps the version based on the specified type, updates the configuration file, and updates the version in referenced files.
3. **Channel Bumping**: The `bump` command progresses the release channel through the stages from nightly to final.
4. **Generating Release Notes**: Each release generates a `CHANGELOG.md` file based on commit messages since the last tag.
5. **Git Integration**: Commits the version bump and creates a new tag in the Git repository.

## Examples

### Initialize the Releaser

```sh
ginger-releaser init
```

### Create a Minor Release

```sh
ginger-releaser release minor
```

### Bump the Release Channel

```sh
ginger-releaser bump
```


## Overview

This Rust-based tool allows users to clone GitHub repositories containing templates and customize them using a series of prompts. The tool leverages libraries like `clap` for command-line argument parsing, `git2` for Git operations, `tera` for templating, and `inquire` for interactive prompts.

## Installation

Ensure you have Rust and Cargo installed on your system. If not, you can install them from [here](https://www.rust-lang.org/tools/install).


```sh
cargo install --git https://github.com/ginger-society/ginger-scaffolder
```

Build the project using Cargo:

```sh
ginger-scaffolder ginger-society/metadata-repo
```

## Command-Line Arguments

- `git_url` (required): The URL of the GitHub repository containing the metadata. You can host your own repo. Please checkout https://github.com/ginger-society/metadata-repo 

## Functionality

### Fetching Templates

The tool fetches available templates from the specified GitHub repository. The metadata file (`__metadata__.json`) should be located in the root of the repository.

### Interactive Prompts

Based on the metadata, the tool provides interactive prompts to gather user inputs for various template parameters.

### Cloning and Rendering Templates

After collecting user inputs, the tool clones the specified repository, processes the templates using the `tera` templating engine, and renders the files to the specified output directory.

## Example Metadata File (`metadata.json`)

The metadata file defines the prompts and structure for the template. Here is an example:

```json
{
  "version": "1.0",
  "prompts": [
    {
      "type": "string",
      "field_key": "project_name",
      "prompt": "Enter the project name:",
      "default": "my_project",
      "is_required": true
    },
    {
      "type": "bool",
      "field_key": "use_database",
      "prompt": "Do you want to use a database?",
      "default": "TRUE",
      "is_required": false
    },
    {
      "type": "enum",
      "field_key": "database_type",
      "prompt": "Select the database type:",
      "enums": ["MySQL", "PostgreSQL", "SQLite"],
      "default": "SQLite",
      "is_required": true
    }
  ]
}
```

## Handling Binary and Text Files

The tool differentiates between binary and text files in the template repository. Text files are processed using the `tera` templating engine, while binary files are copied directly.

## Error Handling

The tool includes error handling for various scenarios, such as invalid Git URLs, failed cloning operations, and failed file operations.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.

## License

This project is licensed under the MIT License.

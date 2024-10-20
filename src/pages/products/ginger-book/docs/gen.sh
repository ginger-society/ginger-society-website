#!/bin/bash

# Function to capitalize the first letter of a string
capitalize() {
  echo "$1" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}'
}

# List of markdown files (excluding http2.md and index.md)
files=(
  "a11y"
  "actions"
  "addons"
  "babel"
  "background"
  "cli"
  "config"
  "controls"
  "css"
  "decorators"
  "hotkeys"
  "links"
  "mdx"
  "meta"
  "mock-date"
  "msw"
  "nextjs"
  "programmatic"
  "providers"
  "setup"
  "source"
  "stories"
  "troubleshooting"
  "typescript"
  "width"
)

# Directory where markdowns are stored
markdowns_dir="../../../../components/markdowns/book"

# Directory for the side menu config
menu_config="../../../../contents/ginger-book-side-menu-config"

# Layout to be used
layout="../../../../layouts/DocLayout.astro"

# Create Astro files for each markdown file
for file in "${files[@]}"; do
  astro_file="${file}.astro"
  
  # Capitalize the file name
  capitalized_file=$(capitalize "$file")

  # Content to be written to the Astro file
  content="---
import DocLayout from \"${layout}\";
import { Content as ${capitalized_file} } from \"${markdowns_dir}/${file}.md\";
import { menuItems } from \"${menu_config}\";
---

<DocLayout title=\"${capitalized_file} Documentation\" menuItems={menuItems}>
  <${capitalized_file} />
</DocLayout>
"

  # Create the Astro file if it doesn't exist
  if [ ! -f "$astro_file" ]; then
    echo "$content" > "$astro_file"
    echo "Created: $astro_file"
  else
    echo "Skipped: $astro_file (already exists)"
  fi
done

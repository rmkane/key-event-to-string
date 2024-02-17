#!/usr/bin/env python3
import re

files = [
  'src/types.ts',
  'src/keys/info.ts',
  'src/keys/aliases/modifierAliases.ts',
  'src/keys/aliases/codeAliases.ts',
  'src/keys/aliases/keyAliases.ts',
  'src/utils/object.ts',
  'src/utils/key.ts',
  'src/options.ts',
  'src/classes/KeyboardEventDetails.ts',
  'src/classes/KeyboardEventProcessor.ts',
]

# Regular expression to match import and export statements, including multi-line statements
import_export_regex = re.compile(r'^\s*(import(\s+type)?|export)\s+.*?(\n|$)|\{[^}]*\}', re.M | re.S)

if __name__ == '__main__':
  with open('dist/lib-2.ts', 'w', encoding='utf8') as outfile:
    for fname in files:
      with open(fname, encoding='utf8') as infile:
        file_content = infile.read()
        # Remove import and export statements
        #cleaned_content = re.sub(import_export_regex, '', file_content)
        outfile.write(file_content)


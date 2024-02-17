#!/usr/bin/env python3
import re
from typing import List

# Regular expressions to match import and export statements
multi_line_import = re.compile(
    r"^import(\stype)?\s+\{[^}]*}\s+from\s+.*$", re.MULTILINE
)
multi_line_export = re.compile(r"^export(\stype)?\s+\{[^}]*}$", re.MULTILINE)
single_line_import = re.compile(r"^import(\stype)?\s+.*\sfrom\s.*$", re.MULTILINE)
single_line_export = re.compile(r"^export\s+.*$", re.MULTILINE)

# The order of the regular expressions is important, as the first match is removed first
regex_prioritiy = [
    multi_line_import,
    multi_line_export,
    single_line_import,
    single_line_export,
]


def remove_multiple_patterns(content: str, patterns: List[re.Pattern]) -> str:
    """
    Remove multiple patterns from a string.

    This function iterates over a list of regular expression patterns, and for each pattern,
    removes all matches from the given content.

    Args:
        content (str): The string from which to remove patterns.
        patterns (List[re.Pattern]): A list of compiled regular expressions representing the patterns to remove.

    Returns:
        str: The content with all matches of all patterns removed.
    """
    result: str = content
    for pattern in patterns:
        result = pattern.sub("", result)
    return result.strip()


def remove_import_export_statements(content: str) -> str:
    """
    Remove import and export statements from a string.

    This function uses the remove_multiple_patterns function to remove all import and export
    statements from the given content.

    Args:
        content (str): The string from which to remove import and export statements.

    Returns:
        str: The content with all import and export statements removed.
    """
    return remove_multiple_patterns(content, patterns=regex_prioritiy) + "\n\n"


def concatenate_files(source_files: List[str], output_file: str) -> None:
    """
    Concatenate the content of multiple files into one file.

    This function reads each file in source_files, removes all import and export statements
    from the content, and writes the processed content to output_file.

    Args:
        source_files (List[str]): A list of file paths representing the files to concatenate.
        output_file (str): The path to the file where the concatenated content should be written.

    Raises:
        FileNotFoundError: If a source file does not exist.
        IOError: If there is an error writing to the output file.
    """
    try:
        with open(output_file, "w", encoding="utf8") as out_file:
            for source_file in source_files:
                try:
                    with open(source_file, encoding="utf8") as in_file:
                        out_file.write(remove_import_export_statements(in_file.read()))
                except FileNotFoundError:
                    print(f"Source file {source_file} not found.")
    except IOError:
        print(f"Could not write to output file {output_file}.")


if __name__ == "__main__":
    files = [
        "src/types.ts",
        "src/keys/info.ts",
        "src/keys/aliases/modifierAliases.ts",
        "src/keys/aliases/codeAliases.ts",
        "src/keys/aliases/keyAliases.ts",
        "src/utils/object.ts",
        "src/utils/key.ts",
        "src/options.ts",
        "src/classes/KeyboardEventDetails.ts",
        "src/classes/KeyboardEventProcessor.ts",
    ]

    concatenate_files(files, output_file="dist/lib.ts")

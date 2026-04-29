#!/usr/bin/env bash
set -euo pipefail

MESSAGE="$1"
LEVEL="${2:-info}"

case "$LEVEL" in
  info)    echo "$MESSAGE" ;;
  warning) echo "::warning::$MESSAGE" ;;
  error)   echo "::error::$MESSAGE" ;;
  *)
    echo "::error::Unknown log level '$LEVEL'. Must be one of: info, warning, error." >&2
    exit 1
    ;;
esac

# log-message

A reusable GitHub Actions composite action that logs a message to the workflow run output.

Supports three log levels: `info` (plain output), `warning`, and `error`. Warning and error levels
emit [GitHub workflow commands](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions)
so they surface as annotations in the Actions UI.

## Inputs

| Input     | Required | Default | Description                                   |
|-----------|----------|---------|-----------------------------------------------|
| `message` | yes      | —       | The message to log.                           |
| `level`   | no       | `info`  | Log level: `info`, `warning`, or `error`.     |

## Usage

```yaml
- name: Log an info message
  uses: JillionPay/action-runner@v1
  with:
    message: Deployment started.

- name: Log a warning
  uses: JillionPay/action-runner@v1
  with:
    message: Config value missing, using default.
    level: warning

- name: Log an error
  uses: JillionPay/action-runner@v1
  with:
    message: Required secret is not set.
    level: error
```

## Development

### Prerequisites

- [actionlint](https://github.com/rhysd/actionlint)
- [yamllint](https://yamllint.readthedocs.io/)
- [ShellCheck](https://www.shellcheck.net/)

### Run tests locally

```bash
git submodule update --init --recursive
./tests/libs/bats-core/bin/bats tests/
```

### Lint locally

```bash
# Action and workflow YAML
actionlint

# YAML formatting
yamllint --config-file .yamllint.yml action.yml .github/workflows/

# Shell scripts
shellcheck scripts/*.sh
```

## CI

Every push and pull request runs two jobs:

- **Lint** — `actionlint` on workflow files and `action.yml`, `yamllint` for YAML format, and
  `shellcheck` on all shell scripts under `scripts/`.
- **Test** — [bats-core](https://github.com/bats-core/bats-core) unit tests (`tests/log.bats`)
  followed by integration steps that run the action itself at each log level.

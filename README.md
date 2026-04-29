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

setup() {
  load 'libs/bats-support/load'
  load 'libs/bats-assert/load'
}

@test "info level prints plain message" {
  run scripts/log.sh "Hello world" "info"
  assert_success
  assert_output "Hello world"
}

@test "default level prints plain message" {
  run scripts/log.sh "Hello world"
  assert_success
  assert_output "Hello world"
}

@test "warning level emits workflow command" {
  run scripts/log.sh "Test warn" "warning"
  assert_success
  assert_output "::warning::Test warn"
}

@test "error level emits workflow command" {
  run scripts/log.sh "Test error" "error"
  assert_success
  assert_output "::error::Test error"
}

@test "unknown level exits non-zero with error message" {
  run scripts/log.sh "msg" "debug"
  assert_failure
  assert_output --partial "Unknown log level 'debug'"
}

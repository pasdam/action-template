import { log, Logger } from '../src/log';

describe('log', () => {
  let logger: jest.Mocked<Logger>;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      setFailed: jest.fn(),
    };
  });

  test('info level calls logger.info', () => {
    log('Hello world', 'info', logger);
    expect(logger.info).toHaveBeenCalledWith('Hello world');
  });

  test('warning level calls logger.warning', () => {
    log('Watch out', 'warning', logger);
    expect(logger.warning).toHaveBeenCalledWith('Watch out');
  });

  test('error level calls logger.error', () => {
    log('Something broke', 'error', logger);
    expect(logger.error).toHaveBeenCalledWith('Something broke');
  });

  test('unknown level calls logger.setFailed', () => {
    log('msg', 'debug', logger);
    expect(logger.setFailed).toHaveBeenCalledWith(
      "Unknown log level 'debug'. Must be one of: info, warning, error."
    );
  });

  test('only the matching logger method is called', () => {
    log('Hello world', 'info', logger);
    expect(logger.warning).not.toHaveBeenCalled();
    expect(logger.error).not.toHaveBeenCalled();
    expect(logger.setFailed).not.toHaveBeenCalled();
  });
});

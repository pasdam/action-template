export interface Logger {
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
  setFailed(message: string): void;
}

export function log(message: string, level: string, logger: Logger): void {
  switch (level) {
    case 'info':
      logger.info(message);
      break;
    case 'warning':
      logger.warning(message);
      break;
    case 'error':
      logger.error(message);
      break;
    default:
      logger.setFailed(`Unknown log level '${level}'. Must be one of: info, warning, error.`);
  }
}

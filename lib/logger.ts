import chalk from "chalk";
import CFG from "@/config/index.ts";
const { LOGGER_LEVEL } = CFG.global;

type LogLevel = "info" | "success" | "warn" | "error";

const LOG_LEVELS: LogLevel[] = ["info", "success", "warn", "error"];

/**
 * Logger class to handle logging messages with different log levels.
 *
 * @class
 * @property {LogLevel} level - The current log level of the logger.
 *
 * @constructor
 * @param {LogLevel} [level=LOGGER_LEVEL as LogLevel] - The initial log level.
 *
 * @method
 * @private
 * @name shouldLog
 * @description Determines if a message should be logged based on the current log level.
 * @param {LogLevel} level - The log level of the message.
 * @returns {boolean} - True if the message should be logged, false otherwise.
 *
 * @method
 * @private
 * @name formatMessage
 * @description Formats the log message with a timestamp and appropriate color based on the log level.
 * @param {LogLevel} level - The log level of the message.
 * @param {unknown} message - The message to be logged.
 * @returns {string} - The formatted log message.
 *
 * @method
 * @name log
 * @description Logs a message if the log level is appropriate.
 * @param {LogLevel} level - The log level of the message.
 * @param {unknown} message - The message to be logged.
 *
 * @method
 * @name info
 * @description Logs an info level message.
 * @param {unknown} message - The message to be logged.
 *
 * @method
 * @name success
 * @description Logs a success level message.
 * @param {unknown} message - The message to be logged.
 *
 * @method
 * @name warn
 * @description Logs a warn level message.
 * @param {unknown} message - The message to be logged.
 *
 * @method
 * @name error
 * @description Logs an error level message.
 * @param {unknown} message - The message to be logged.
 *
 * @method
 * @name setLevel
 * @description Sets the log level of the logger.
 * @param {LogLevel} level - The new log level.
 */

class Logger {
  private level: LogLevel;

  constructor(level: LogLevel = LOGGER_LEVEL as LogLevel) {
    this.level = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS.indexOf(level) >= LOG_LEVELS.indexOf(this.level);
  }

  private formatMessage(level: LogLevel, message: unknown): string {
    const timestamp = new Date().toISOString();
    let formattedMessage = `[${timestamp}] [${level.toUpperCase()}] `;
    switch (level) {
      case "info":
        formattedMessage += chalk.blue(message as string);
        break;
      case "success":
        formattedMessage += chalk.green(message as string);
        break;
      case "warn":
        formattedMessage += chalk.yellow(message as string);
        break;
      case "error":
        formattedMessage += chalk.red(message as string);
        break;
    }
    return formattedMessage;
  }

  public log(level: LogLevel, message: unknown): void {
    if (this.shouldLog(level)) {
      if (typeof message === "object") {
        message = JSON.stringify(message, null, 2);
      }
      console.log(this.formatMessage(level, message));
    }
  }

  public info(message: unknown): void {
    this.log("info", message);
  }

  public success(message: unknown): void {
    this.log("success", message);
  }

  public warn(message: unknown): void {
    this.log("warn", message);
  }

  public error(message: unknown): void {
    this.log("error", message);
  }

  public setLevel(level: LogLevel): void {
    this.level = level;
  }
}

export const logger = new Logger(LOGGER_LEVEL as LogLevel);

import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(chalk.yellow('Программа для подготовки данных для REST API сервера.'));
    console.info(chalk.bgGray.green`Пример: cli.js --<command> [--arguments]`);
    console.info(chalk.green`Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --import <path>:             # импортирует данные из TSV
            --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
    `);
  }
}

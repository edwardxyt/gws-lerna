const webpack_production_config = require('../config/webpack.config.production.js');
const webpack = require('webpack');
const chalk = require('chalk');
const log = console.log;

webpack_production_config().then((config) => {
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      log(chalk.white('webpack compile fail') + ' - ' + chalk.red(err));
    } else {
      log(chalk.blue(`------------------------------ start ------------------------------`));
      log(
          stats.toString({
            colors: true, // 在控制台展示颜色
            modules: false,
            children: false,
            chunks: false,  // 使构建过程更静默无输出
            warnings: true,
            chunkModules: false
          })
      )
      log(chalk.white('webpack compile complete') + ' - ' + chalk.green('编译完成'));
      log(chalk.blue(`------------------------------- end -------------------------------`));
    }
  });
});

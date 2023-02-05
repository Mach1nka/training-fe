import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/config";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    // compress: true,
    historyApiFallback: true,
    open: true,
    port,
  }
};
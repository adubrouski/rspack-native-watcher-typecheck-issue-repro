import { TsCheckerRspackPlugin } from "ts-checker-rspack-plugin";
import path from "node:path";

export default {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new TsCheckerRspackPlugin({
      typescript: {
        memoryLimit: 8192,
        context: path.resolve(),
        configFile: path.resolve("tsconfig.json"),
      },
    }),
  ],
  experiments: {
    nativeWatcher: true,
  },
};

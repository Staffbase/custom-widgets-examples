/*!
 * Copyright 2021, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import common from "./webpack.common";
import { merge } from "webpack-merge";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: {
    "staffbase.weather-forecast": "./src/dev.ts",
    config: "./dev/config.tsx",
    bootstrap: "./dev/bootstrap.ts",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "resources"),
    },
    port: 9000,
  },
  mode: "development",
  devtool: "inline-source-map",
};

export default merge(config, common);

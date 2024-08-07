/*!
 * Copyright 2024, Staffbase GmbH and contributors.
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

export type WeatherIcon =
  | "snow"
  | "sunny"
  | "clear-cloudy"
  | "partly-cloudy"
  | "cloudy"
  | "fog"
  | "showers"
  | "rain"
  | "thunderstorms";

const iconsMap: { [key: string]: WeatherIcon } = {
  "01d": "sunny",
  "02d": "clear-cloudy",
  "03d": "partly-cloudy",
  "04d": "cloudy",
  "09d": "showers",
  "10d": "rain",
  "11d": "thunderstorms",
  "13d": "snow",
  "50d": "fog",
  "01n": "sunny",
  "02n": "clear-cloudy",
  "03n": "partly-cloudy",
  "04n": "cloudy",
  "09n": "showers",
  "10n": "rain",
  "11n": "thunderstorms",
  "13n": "snow",
  "50n": "fog",
} as const;

export type IconCodes = keyof typeof iconsMap;

export const getIcon = (name: IconCodes): WeatherIcon => {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
  return "sunny";
};

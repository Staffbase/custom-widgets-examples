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

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    location: {
      type: "string",
      title: "Location",
    },
    date: {
      type: "string",
      title: "Event date",
    },
    time: {
      type: "string",
      title: "Event time",
    },
    apikey: {
      type: "string",
      title: "openweathermap.org API Key",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  location: {
    "ui:help":
      "Set the location of the event. You might use a country identifier to narrow down the result (i.E. Chemnitz,DE).",
  },
  date: {
    "ui:help": "Enter the date of the event. Leave empty to show the current weather information.",
    "ui:widget": "date",
  },
  time: {
    "ui:help": "Enter the time of the event.",
  },
  apikey: {
    "ui:help":
      "Enter a valid openweathermap.org API key. The key is used to retrieve data from the service.",
  },
};

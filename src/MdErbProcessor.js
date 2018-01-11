"use strict";

import { parse } from "markdown-to-ast";

export class MdErbProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [".md.erb"];
  }

  processor(ext) {
    return {
      preProcess(text, filePath) {
        return parse(text);
      },
      postProcess(messages, filePath) {
        return {
          messages,
          filePath: filePath ? filePath : "<erb>"
        };
      }
    };
  }
}

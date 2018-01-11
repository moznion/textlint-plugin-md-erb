"use strict";

import { parse } from "markdown-to-ast";

export class MdErbProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [".erb"];
  }

  processor(ext) {
    return {
      preProcess(text, filePath) {
        if (filePath.endsWith(".md.erb")) {
          return parse(text);
        }
        return parse('');
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

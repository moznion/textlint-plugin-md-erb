"use strict";

import { parse } from "textlint-plugin-markdown/lib/markdown-to-ast";

export default class ErbProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [
      ".md.erb"
    ];
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

import { Component } from "can";

Component.extend({
  tag: "my-page",
  ViewModel: {
    head: {
      default: () => document.head
    }
  },
  view: `
    {{#portal(head)}}
      <title>My title</title>
    {{/portal}}
  `
});

import { types } from "mobx-state-tree";

export const Index = types
  .model({
    render: types.boolean,
    title: types.string,
  })
  .actions((self) => ({
    hide() {
      self.render = false;
    },
    show() {
      self.render = true;
    },
  }));

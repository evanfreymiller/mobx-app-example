import { types } from "mobx-state-tree";

export const Count = types
  .model({
    total: types.number,
  })
  .actions((self) => ({
    add() {
      self.total++;
    },
    minus() {
      self.total--;
    },
  }));

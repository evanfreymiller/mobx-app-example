import { types } from "mobx-state-tree";
import { Count } from "./count";

export const View = types.model({
  render: types.boolean,
  title: types.string,
  count: types.optional(Count, { total: 0 }),
});

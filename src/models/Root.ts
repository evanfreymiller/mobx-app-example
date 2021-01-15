import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { Create } from "../components/BidPackageCreate/models";
import { Edit } from "../components/BidPackageEdit/models";
import { Index } from "../components/BidPackageIndex/models";
import { View } from "../components/BidPackageView/models";
import { Count } from "../components/BidPackageView/models/count";

const RootModel = types
  .model({
    isFetching: types.boolean,
    create: types.maybeNull(Create),
    edit: types.maybeNull(Edit),
    index: Index,
    view: View,
  })

export const rootStore = RootModel.create({
  isFetching: false,
  view: View.create({
    title: "BidPackageView Component",
    render: false,
    count: Count.create({
        total: 0
    }), 
  }),
  index: Index.create({
    title: "BidPackageIndex Component",
    render: false,
  }),
});

onSnapshot(rootStore, (snapshot) => {
  console.log("Snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

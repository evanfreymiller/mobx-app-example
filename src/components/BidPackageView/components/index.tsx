import React from "react";
import { observer } from "mobx-react-lite";
import { useMst } from "../../../models/Root";

const BidPackageView = observer(() => {
  const { view } = useMst();
  console.log({ render: "BidPackageView" });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid red"
      }}
    >
      <div>{view.title}</div>
      <br />
      <span>
        <button className="button" onClick={view.count.add}>Add</button>
        <button className="button" onClick={view.count.minus}>Minus</button>
      </span>
      <br />
      <div>{view.count.total}</div>
    </div>
  );
});

export default BidPackageView;

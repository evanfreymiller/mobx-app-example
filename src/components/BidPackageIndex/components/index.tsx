import React from "react";
import { observer } from "mobx-react-lite";
import { useMst } from "../../../models/Root";
import Count from "../../BidPackageView/components/count";

const BidPackageIndex = observer(() => {
  const { index } = useMst();
  console.log({ render: "BidPackageIndex" });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid blue"
      }}
    >
      <div>{index.title}</div>
      <br />
      <span>
        <button className="button" onClick={index.render ? index.hide : index.show}>{index.render ? "Hide" : "Show"}</button>
      </span>
      <br />
      {index.render && <div>I'm the new Div in town</div>}
      <br />
      <Count />
    </div>
  );
});

export default BidPackageIndex;

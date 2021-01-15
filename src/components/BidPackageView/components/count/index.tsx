import { observer } from "mobx-react-lite";
import React from "react";
import { useMst } from "../../../../models/Root";

const Count = observer(() => {
  const { view } = useMst();
  console.log({ render: "Count" });
  return <div style={{ border: "2px solid green" }}>
      Count Component: {view.count.total}
      </div>;
});

export default Count;

import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

export default function CreateQrCode() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const CreateQrCode = require("./CreateQrCode");
        return <CreateQrCode />;
      }}
    </BrowserOnly>
  );
}

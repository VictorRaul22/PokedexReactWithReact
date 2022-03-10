import React from "react";
import { Loader as SemanticLoader, Dimmer } from "semantic-ui-react";

function Loader() {
  return (
    <Dimmer active>
      <SemanticLoader />
    </Dimmer>
  );
}

export default Loader;

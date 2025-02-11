import React, { StrictMode } from "react";

// Import ThirdWeb
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import App from "./App";

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainIds = [4];

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};

const AppContainer = () => {
  return (
    <StrictMode>
      <ThirdwebWeb3Provider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <App />
      </ThirdwebWeb3Provider>
    </StrictMode>
  );
};

export default AppContainer;

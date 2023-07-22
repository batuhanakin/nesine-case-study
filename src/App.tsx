import React from "react";

import { BasketProvider } from "./store/BasketProvider";
import { BetPages } from "./pages/BetPages";

function App() {
  return (
    <BasketProvider>
      <BetPages />
    </BasketProvider>
  );
}

export default App;

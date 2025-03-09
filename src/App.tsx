import React from "react";

import AppShell from "./layout/AppShell";
import Editor from "./components/Editor";

const App: React.FC = () => {
  return (
    <div>
      <AppShell>
        <Editor />
      </AppShell>
    </div>
  );
};

export default App;

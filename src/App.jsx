import { useState } from "react";
import "./App.css";
import { exampleLayouts } from "./data/examples";
import ExampleList from "./components/ExampleList/ExampleList";
import ExampleCard from "./components/ExampleCard/ExampleCard";
import FundamentalCard from "./components/FundamentalCard/FundamentalCard";
import LiveLabCard from "./components/LiveLabCard/LiveLabCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import TrainingCard from "./components/TrainingCard/TrainingCard";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle";

export default function App() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [activeLayout, setActiveLayout] = useState("frontend");
  const [activeLiveCodingFilter, setActiveLiveCodingFilter] = useState("all");
  const [activeFramework, setActiveFramework] = useState("react");
  const currentLayout = exampleLayouts[activeLayout];

  return (
    <main className="app">
      <header className="app-top-bar">
        <div className="app-top-bar-brand" onClick={() => setSelectedExample(null)}>
          <span className="app-top-title">The Dev Bible</span>
        </div>
        <div className="app-top-bar-actions">
          <LanguageToggle />
        </div>
      </header>

      {!selectedExample ? (
        <ExampleList
          activeLayout={activeLayout}
          activeFilter={activeLiveCodingFilter}
          activeFramework={activeFramework}
          layoutOptions={exampleLayouts}
          sections={currentLayout.sections}
          onFilterChange={setActiveLiveCodingFilter}
          onFrameworkChange={setActiveFramework}
          onLayoutChange={setActiveLayout}
          onSelect={setSelectedExample}
        />
      ) : selectedExample.type === "training" ? (
        <TrainingCard
          item={selectedExample}
          onBack={() => setSelectedExample(null)}
        />
      ) : selectedExample.type === "fundamental" ? (
        <FundamentalCard
          item={selectedExample}
          onBack={() => setSelectedExample(null)}
        />
      ) : selectedExample.type === "live-lab" ? (
        <LiveLabCard
          item={selectedExample}
          onBack={() => setSelectedExample(null)}
        />
      ) : selectedExample.type === "questions" ? (
        <QuestionCard
          item={selectedExample}
          onBack={() => setSelectedExample(null)}
        />
      ) : (
        <ExampleCard
          example={selectedExample}
          onBack={() => setSelectedExample(null)}
        />
      )}
    </main>
  );
}

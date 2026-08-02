"use client";
import { useRef, useState } from "react";

const TABS = ["Soil", "Crops", "Pests"] as const;

export function Tabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    // TODO 1: if ArrowRight -> next tab index (wrap with % TABS.length),
    //         if ArrowLeft  -> previous (wrap),
    //         then setActive(next) AND refs.current[next]?.focus()
  }

  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Tabs</h2>
      <div role="tablist" aria-label="Farm topics" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            id={`tab-${i}`}
            aria-controls={`panel-${i}`}
            // TODO 2: aria-selected and roving tabIndex based on i === active
            onClick={() => setActive(i)}
            className="border-b-2 px-4 py-2 aria-selected:border-[#A3263B] aria-selected:font-semibold"
          >
            {tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="p-4">
        {TABS[active]} content goes here.
      </div>
    </section>
  );
}
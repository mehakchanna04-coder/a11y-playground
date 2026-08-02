"use client";
import { useRef, useState } from "react";

const TABS = ["Soil", "Crops", "Pests"] as const;

export function Tabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      const next = (active + 1) % TABS.length;
      setActive(next);
      refs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      const next = (active - 1 + TABS.length) % TABS.length;
      setActive(next);
      refs.current[next]?.focus();
    }
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
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
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
import "./haunt.css";

import { Bat, JackOLantern, LightningBolt, SpookyGhost, Witch } from "./spooky-symbols";

const bats = ["ak-bat-1", "ak-bat-2", "ak-bat-3", "ak-bat-4"];
const ghosts = ["ak-ghost-1", "ak-ghost-2", "ak-ghost-3"];

/** Fixed, non-interactive Halloween scenery shared by the menu and category pages. */
export function HauntLayer() {
  return (
    <div className="ak-haunt" aria-hidden="true">
      <div className="ak-lightning" />
      <LightningBolt className="ak-bolt" />
      <div className="ak-moon" />
      <div className="ak-witch">
        <Witch className="ak-witch-svg" />
      </div>
      {bats.map((name) => (
        <div key={name} className={`ak-bat ${name}`}>
          <Bat className="ak-bat-svg" />
        </div>
      ))}
      {ghosts.map((name) => (
        <SpookyGhost key={name} className={`ak-ghost ${name}`} />
      ))}
      <JackOLantern className="ak-lantern ak-lantern-left" />
      <JackOLantern className="ak-lantern ak-lantern-right" />
    </div>
  );
}

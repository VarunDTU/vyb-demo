"use client";

import { Accordion } from "./homepage/accord";
import { StartedGuide } from "./homepage/cards";
import Header from "./homepage/header";
import Howtostart from "./homepage/howtostart";
import Influencers from "./homepage/Influencers";
import Itinerary from "./homepage/Itineraries";
import Travel from "./homepage/travel";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Travel></Travel>
      <div>
        <Itinerary></Itinerary>
      </div>
      <Howtostart></Howtostart>
      <Influencers></Influencers>
      <StartedGuide></StartedGuide>

      <Accordion></Accordion>
    </div>
  );
}

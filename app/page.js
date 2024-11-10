"use client";

import { StartedGuide } from "./homepage/cards";
import Header from "./homepage/header";
import Influencers from "./homepage/Influencers";
import Itinerary from "./homepage/Itineraries";
import Travel from "./homepage/travel";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Travel></Travel>
      <Itinerary></Itinerary>
      <Influencers></Influencers>
      <StartedGuide></StartedGuide>
    </div>
  );
}

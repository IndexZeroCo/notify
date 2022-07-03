import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Tracks from "../components/Tracks";

export default function Home() {
  const [selectedHowl, setSelectedHowl] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
      />
      <Tracks
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
        setSelectedHowl={setSelectedHowl}
      />
    </div>
  );
}

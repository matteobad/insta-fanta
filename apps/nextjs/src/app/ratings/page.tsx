"use client";

import Stories from "react-insta-stories";
import type { Story } from "react-insta-stories/dist/interfaces";
import { Balancer } from "react-wrap-balancer";

const stories: Story[] = [
  {
    duration: 5000,
    content: ({ action, isPaused }) => {
      return (
        <div className="h-full w-full bg-pink-400 px-6 py-12">
          <h1
            className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
            style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
          >
            <Balancer>Abbiamo le stories</Balancer>
          </h1>
        </div>
      );
    },
  },
  {
    duration: 5000,
    content: ({ action, isPaused }) => {
      return (
        <div className="h-full w-full bg-green-400 px-6 py-12">
          <h1
            className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
            style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
          >
            <Balancer>Possiamo metterci quello che vogliamo</Balancer>
          </h1>
        </div>
      );
    },
  },
  {
    duration: 5000,
    content: ({ action, isPaused }) => {
      return (
        <div className="h-full w-full bg-blue-400 px-6 py-12">
          <h1
            className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
            style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
          >
            <Balancer>E' super easy</Balancer>
          </h1>
        </div>
      );
    },
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Stories
        stories={stories}
        defaultInterval={1500}
        width={"100vw"}
        height={"100vh"}
      />
    </main>
  );
}

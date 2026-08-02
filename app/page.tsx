import { Modal } from "@/playground/Modal";
import { Tabs } from "@/playground/Tabs";
import { Disclosure } from "@/playground/Disclosure";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl space-y-12 p-8">
      <h1 className="text-2xl font-semibold">Component Playground — Week 4</h1>
      <Modal />
      <Tabs />
      <Disclosure />
    </main>
  );
}
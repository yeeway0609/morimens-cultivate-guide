import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import awakerData from "@/data/AwakerData.json";
import AwakerFilter from "@/components/AwakerFilter";

export default function Awakers() {
  return (
    <main className="bg-WhiteBoard">
      <div className="h-12"></div>
      <div
        className="relative h-[100px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mobile-banner-1.png')" }}
      >
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <img className="absolute w-24 bottom-0 right-1" src="/icon_awaker.svg" alt="Awakers' icon" />
        <div className="absolute bottom-3 right-4 text-white font-bold">
          <h1>喚醒體一覽</h1>
        </div>
      </div>
      <AwakerFilter />
      <section className="flex-4 flex flex-wrap gap-3 px-2 py-4">
        {awakerData.map((awaker) => (
          <Link
            key={awaker.name}
            href={`/awakers/${awaker.id}`}
          >
            <Image src={`/img/awaker_cards/${awaker.id}.png`} alt={awaker.name} width={80} height={180} />
          </Link>
        ))}
      </section>
    </main>
  );
}

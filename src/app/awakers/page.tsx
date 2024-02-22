import Image from "next/image";
import Link from "next/link";
import { fetchFilteredAwakers } from '@/lib/fetchData';
import AwakerFilter from "@/components/AwakerFilter";

export default async function Awakers({ searchParams }: { searchParams?: {query?: string; careerFilter?: string;};}) {
  const query = searchParams?.query || '';
  const careerFilter = searchParams?.careerFilter || '';
  const awakers = await fetchFilteredAwakers(query, careerFilter);

  return (
    <main className="min-h-screen bg-WhiteBoard">
      <div className="h-12"></div> {/* This is a navbar spacer */}
      <header
        className="relative h-[100px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mobile-banner-1.png')" }}
      >
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <img className="absolute w-24 bottom-0 right-1" src="/icon_awaker.svg" alt="Awakers' icon" />
        <div className="absolute bottom-3 right-4 text-white font-bold">
          <h1>喚醒體一覽</h1>
        </div>
      </header>
      <AwakerFilter />
      <section className="grid grid-cols-4 gap-4 px-5 py-4 place-items-center">
        {awakers.map((awaker) => (
          <Link
            key={awaker.name}
            href={`/awakers/${awaker.id}`}
            className="w-[80px] h-[180px]"
          >
            <Image
              src={`/img/awaker_cards/${awaker.id}.png`}
              alt={awaker.name}
              width={80}
              height={180} />
          </Link>
        ))}
      </section>
    </main>
  );
}

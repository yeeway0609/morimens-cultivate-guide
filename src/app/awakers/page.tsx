import Image from "next/image";
import Link from "next/link";
import { fetchFilteredAwakers } from '@/lib/fetchData';
import AwakerFilter from "@/components/AwakerFilter";
import BaseBoard from "@/components/BaseBoard";

export default async function Awakers({ searchParams }: { searchParams?: {query?: string; careerFilter?: string;};}) {
  const query = searchParams?.query || '';
  const careerFilter = searchParams?.careerFilter || '';
  const awakers = await fetchFilteredAwakers(query, careerFilter);

  return (
    <div className="h-[100svh] flex flex-col">
      <div className="w-full h-16"></div> {/* top padding same as navbar height */}
      <header
        className="relative w-full h-[100px] bg-cover bg-center"
        style={{ backgroundImage: "url('/mobile-banner-1.png')" }}
      >
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <img className="absolute w-24 bottom-0 right-1" src="/icon_awaker.svg" alt="Awakers' icon" />
        <div className="absolute bottom-3 right-4 text-white font-bold">
          <h1>喚醒體一覽</h1>
        </div>
      </header>
      <AwakerFilter />
      <BaseBoard>
        <section className="grid grid-cols-4 gap-4 place-items-center">
          {awakers.map((awaker) => (
            <Link
              key={awaker.name}
              href={`/awakers/${awaker.id}`}
              className="w-[80px] h-[180px]"
            >
              <Image src={`/img/awaker_cards/${awaker.id}.png`} alt={awaker.name} width={80} height={180} />
            </Link>
          ))}
        </section>
      </BaseBoard>
    </div>
  );
}

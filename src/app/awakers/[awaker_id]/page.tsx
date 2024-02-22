import Image from "next/image";
import Link from "next/link";
import { fetchAwaker } from '@/lib/fetchData';
import parse from 'html-react-parser';

export default async function Awaker({ params }: { params: { awaker_id: number } }) {
  const awaker = await fetchAwaker(params.awaker_id);

  return (
    <>
      <style>
        {`
          .sectio-gap {
            margin-bottom: 20px;
          }
        `}
      </style>
      <header>
        <div className="relative h-44">
          <Image
            src={`/img/career_banner/bg_horizontal_${awaker.career}.jpg`}
            alt={awaker.career} layout='fill' objectFit="cover"
            className="absolute -z-10"
          />
          <h1>{awaker.career}</h1>
          <h1
            className="absolute left-4 bottom-2 text-2xl font-medium leading-none text-[#D9D9D9]">
              {awaker.name}</h1>
          <h1 className="absolute left-24 bottom-2 text-xs font-medium leading-none text-[#FFCE58]">{awaker.position}</h1>
        </div>
      </header>
      <main>
        <section id="簡介">
          <p>{parse(`${awaker.intro}`)}</p>
        </section>
        <section id="關鍵啟靈">
          <h1>{awaker.recommend_evolution}</h1>
          <h1>{awaker.recommend_evolution_desc}</h1>
        </section>
        <section id="角色技能組">
          <h1>{awaker.rage_burst}</h1>
        </section>
        <section id="建議命輪">
          <h1>{awaker.recommend_destiny_wheels_id}</h1>
          <h1>{awaker.recommend_destiny_wheels_desc}</h1>
        </section>
        <section id="建議密契">
          <h1>{awaker.recommend_covenants_id}</h1>
          <h1>{awaker.recommend_covenants_desc}</h1>
        </section>
        <section id="建議隊伍">
          {/* <h1>{awaker.recommend_teams}</h1> */}
        </section>
      </main>
    </>
  );
}

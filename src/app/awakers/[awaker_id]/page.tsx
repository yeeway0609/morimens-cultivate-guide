import Image from "next/image";
import Link from "next/link";
import { fetchAwaker } from '@/lib/fetchData';
import parse from 'html-react-parser';

function TitleBar({ title }: { title: string }) {
  return (
    <h1
      className="w-[90px] mt-5 mb-2 text-sm text-center font-medium text-white leading-normal bg-contain bg-center bg-no-repeat shadow-lg"
      style={{ backgroundImage: `url('/bg-title-bar.svg')` }}
    >
      {title}
    </h1>
  );
}

export default async function Awaker({ params }: { params: { awaker_id: number } }) {
  const awaker = await fetchAwaker(params.awaker_id);

  const recommendRevolutionStatus = [];
  for (let i = 0; i < awaker.recommend_evolution; i++) {
    recommendRevolutionStatus.push("on");
  }
  for (let i = 0; i < 3 - awaker.recommend_evolution; i++) {
    recommendRevolutionStatus.push("off");
  }

  return (
    <>
      {awaker.intro === "" ? (
        <div>
          <h1>資料建置中...</h1>
          <h1>資料建置中...</h1>
          <h1>資料建置中...</h1>
          <h1>資料建置中...</h1>
          <h1>資料建置中...</h1>
          <h1>資料建置中...</h1>
        </div>
      ) : (
        <>
          <header>
            <div className="relative h-44">
              <Image
                src={`/img/career_banner/bg_horizontal_${awaker.career}.jpg`}
                alt={awaker.career}
                layout='fill'
                objectFit="cover"
                className="absolute -z-10"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent"></div> {/* gradient overlay mask */}
              <Image
                src={`/icon-${awaker.career}.png`}
                alt={awaker.career}
                width={30}
                height={30}
                className="absolute left-4 bottom-3"
              />
              <h1 className="absolute left-14 bottom-3 text-3xl font-semibold leading-none text-[#D9D9D9]">{awaker.name}</h1>
              <h2 className="absolute left-40 bottom-3 text-xs font-medium leading-none text-[#FFCE58]">{awaker.position}</h2>
            </div>
          </header>
          <main className="bg-WhiteBoard px-4 py-8 text-xs text-[#443939]">
            <section id="簡介">
              <p className="w-2/3">{parse(`${awaker.intro}`)}</p>
            </section>
            <section id="關鍵啟靈">
              <div className="flex items-end">
                <TitleBar title="關鍵啟靈" />
                <div className="flex h-4 ml-2 mb-[10px] gap-1">
                  {recommendRevolutionStatus.map((status, index) => (
                    <Image
                      key={index}
                      src={`/icon-revolution-${status}.png`}
                      alt="revolution icon"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
              </div>
              <p>{parse(`${awaker.recommend_evolution_desc}`)}</p>
            </section>
            <section id="角色技能組">
              <TitleBar title="角色技能組" />
              <p>{parse(`${awaker.rage_burst}`)}</p>
            </section>
            <section id="建議命輪">
              <TitleBar title="建議命輪" />
              <p>{awaker.recommend_destiny_wheels_id}</p>
              <p>{awaker.recommend_destiny_wheels_desc}</p>
            </section>
            <section id="建議密契">
              <TitleBar title="建議密契" />
              <p>{awaker.recommend_covenants_id}</p>
              <p>{awaker.recommend_covenants_desc}</p>
            </section>
            <section id="建議隊伍">
              <TitleBar title="建議隊伍" />
              {/* <p>{awaker.recommend_teams}</p> */}
            </section>
          </main>
        </>
      )}
    </>
  );
}

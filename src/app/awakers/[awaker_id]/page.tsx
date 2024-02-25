import Image from "next/image";
import Link from "next/link";
import { fetchAwaker, fetchDestinyWheelsNameById, fetchCovenantsNameById } from '@/lib/fetchData';
import parse from 'html-react-parser';
import SectionNavBar from "@/components/SectionNavBar";

function Section({ id, children }: { id: string, children: React.ReactNode }) {
  return <section id={id} className="mb-5">{children}</section>;
}

function TitleBar({ title }: { title: string }) {
  return (
    <h1
      className="w-[90px] mb-2 text-sm text-center font-medium text-white leading-normal bg-contain bg-center bg-no-repeat shadow-lg"
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

  const recommendDestinyWheelsName = await fetchDestinyWheelsNameById(awaker.recommend_destiny_wheels_id);
  const recommendCovenantsName = await fetchCovenantsNameById(awaker.recommend_covenants_id);

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
          <style>
            {`
              .text-brown {
                color: #A95400;
              }
              .text-red {
                color: #DF1313;
              }
            `}
          </style>
          <SectionNavBar />
          <header>
            <div className="relative h-28">
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
            <Section id="簡介">
              <p className="w-2/3">{parse(`${awaker.intro}`)}</p>
            </Section>
            <Section id="關鍵啟靈">
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
            </Section>
            <Section id="角色技能組">
              <TitleBar title="角色技能組" />
              <Image
                src={`/img/skill_set/${awaker.id}.png`}
                alt="技能圖"
                width={350}
                height={100}
              />
              <h3
                className="w-[120px] my-1 font-medium text-white bg-contain"
                style={{ backgroundImage: `url('/bg-rage-burst.svg')` }}
              >
                <span className="ml-2">狂氣爆發</span>
              </h3>
              <p>{parse(`${awaker.rage_burst}`)}</p>
            </Section>
            <Section id="建議命輪">
              <TitleBar title="建議命輪" />
              {awaker.recommend_destiny_wheels_id.map((id, index) => (
                <div key={index} className="mb-4 flex">
                  <Image
                    src={`/img/destiny_wheel_cards/${id}.png`} alt="命輪圖" width={40} height={40}
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{recommendDestinyWheelsName[index]}</h3>
                    <p>{parse(`${awaker.recommend_destiny_wheels_desc[index]}`)}</p>
                  </div>
                </div>
              ))}
            </Section>
            <Section id="建議密契">
              <TitleBar title="建議密契" />
              {awaker.recommend_covenants_id.map((id, index) => (
                <div key={index} className="mb-4 flex">
                  <Image
                    src={`/img/covenant_cards/${id}.png`} alt="密契圖" width={40} height={40}
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{recommendCovenantsName[index]}</h3>
                    <p>{parse(`${awaker.recommend_covenants_desc[index]}`)}</p>
                  </div>
                </div>
              ))}
            </Section>
            <Section id="建議隊伍">
              <TitleBar title="建議隊伍" />
              <p>{awaker.recommend_teams[0].awaker_id}</p>
              <p>{awaker.recommend_teams[0].awaker_position}</p>
              <p>{parse(`${awaker.recommend_teams[0].team_desc}`)}</p>
              <p>{awaker.recommend_teams[1].awaker_id}</p>
              <p>{awaker.recommend_teams[1].awaker_position}</p>
              <p>{parse(`${awaker.recommend_teams[1].team_desc}`)}</p>
            </Section>
          </main>
        </>
      )}
    </>
  );
}

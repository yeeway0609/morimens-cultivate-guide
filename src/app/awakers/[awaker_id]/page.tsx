import Image from "next/image";
import Link from "next/link";
import { fetchAwaker, fetchDestinyWheelsNameById, fetchCovenantsNameById } from '@/lib/fetchData';
import SectionNavBar from "@/components/SectionNavBar";
import NavBarPadding from "@/components/NavBarPadding";
import BaseBoard from "@/components/BaseBoard";
import WorkInProgress from "@/components/WorkInProgress";

function TitleBar({ title }: { title: string }) {
  return <h1 className="w-[90px] mb-2 text-sm text-center font-medium text-white leading-normal bg-contain bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: `url('/bg-title-bar.svg')` }}>{title}</h1>;
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
      <WorkInProgress />
    ) : (
      <div className="relative">
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
        <NavBarPadding />
        <div className="absolute right-0 z-10">
          <Image
            src={`/img/awaker_photo/${awaker.id}.png`}
            alt="角色立繪"
            width={180}
            height={360}
          />
        </div>
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
        <BaseBoard>
          <div className="absolute right-0 w-[180px] h-[212.5px] z-20">
            <div className="absolute -left-1 bottom-0 w-1/3 h-full z-20 bg-gradient-to-l from-transparent to-WhiteBoard"></div>
            <div className="absolute bottom-0 w-full h-1/3 z-20 bg-gradient-to-b from-transparent to-WhiteBoard"></div>
          </div>
          <section id="簡介" className="mb-5 relative">
            <p className="w-2/3 absolute z-20" dangerouslySetInnerHTML={{ __html: awaker.intro}}></p>
            <p className="w-2/3 opacity-0" dangerouslySetInnerHTML={{ __html: awaker.intro}}></p>
          </section>
          <section id="關鍵啟靈" className="mb-5">
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
            <p dangerouslySetInnerHTML={{ __html: awaker.recommend_evolution_desc}}></p>
          </section>
          <section id="角色技能組" className="mb-5">
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
            <p dangerouslySetInnerHTML={{ __html: awaker.rage_burst}}></p>
          </section>
          <section id="建議命輪" className="mb-5">
            <TitleBar title="建議命輪" />
            {awaker.recommend_destiny_wheels_id.map((id, index) => (
              <div key={index} className="mb-4 flex">
                <Image
                  src={`/img/destiny_wheel_cards/${id}.png`} alt="命輪圖" width={40} height={40}
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h3 className="text-sm font-semibold">{recommendDestinyWheelsName[index]}</h3>
                  <p dangerouslySetInnerHTML={{ __html: awaker.recommend_destiny_wheels_desc[index]}}></p>
                </div>
              </div>
            ))}
          </section>
          <section id="建議密契" className="mb-5">
            <TitleBar title="建議密契" />
            {awaker.recommend_covenants_id.map((id, index) => (
              <div key={index} className="mb-4 flex">
                <Image
                  src={`/img/covenant_cards/${id}.png`} alt="密契圖" width={40} height={40}
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h3 className="text-sm font-semibold">{recommendCovenantsName[index]}</h3>
                  <p dangerouslySetInnerHTML={{ __html: awaker.recommend_covenants_desc[index]}}></p>
                </div>
              </div>
            ))}
          </section>
          <section id="建議隊伍">
            <TitleBar title="建議隊伍" />
            {awaker.recommend_teams.map((team, index) => (
              <div key={index}>
                <div className="grid grid-cols-4 gap-4 place-items-center">
                  {team.awaker_id.map((id, index) => (
                    <div key={index}>
                      <Link key={id} href={`/awakers/${id}`} className="w-[80px] h-[180px]">
                        <Image src={`/img/awaker_cards/${id}.png`} alt="Awaker card" width={80} height={180} />
                      </Link>
                      <p className="mt-1 py-1 text-center text-white bg-[#3A3522]">{team.awaker_position[index]}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-2 pb-4" dangerouslySetInnerHTML={{ __html: team.team_desc}}></p>
              </div>
            ))}
          </section>
        </BaseBoard>
        <div className="h-10 bg-WhiteBoard"></div>
        <SectionNavBar />
      </div>
    )}
    </>
  );
}

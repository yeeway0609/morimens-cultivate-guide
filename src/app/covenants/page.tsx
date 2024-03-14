import Image from "next/image";
import Link from "next/link";
import { fetchCovenants, fetchAwakersNameById } from '@/lib/fetchData';
import NavBarPadding from "@/components/NavBarPadding";
import BaseBoard from "@/components/BaseBoard";

export default async function Covenants() {
  const covenants = await fetchCovenants();
  console.log(covenants);
  return (
    <div className="h-[100svh] flex flex-col">
      <NavBarPadding />
      <BaseBoard>
        {covenants.map((covenant) => (
          <div key={covenant.id} className="mt-4 flex">
            <div className="flex">
              <Image
                src={`/img/covenant_cards/${covenant.id}.png`}
                alt="密契圖"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h3 className=" text-base font-semibold leading-normal">{covenant.name}</h3>
                <p>推薦喚醒體：{covenant.recommend_awakers_id}</p>
              </div>
            </div>
          </div>
        ))}
      </BaseBoard>
    </div>
  );
}

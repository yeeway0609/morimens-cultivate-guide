"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function AwakerFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [careerFilter, setCareerFilter] = useState("");

  // For example, `/awakers/?career=血肉` if the user searches for "血肉".
  const handleCareerFilter = (career: string) => {
    setCareerFilter(career);
    const params = new URLSearchParams(searchParams);
    career ? params.set('careerFilter', career) : params.delete('careerFilter');
    replace(`${pathname}?${params.toString()}`);
  }

  // For example, `/awakers/?query=拉蒙娜` if the user searches for "拉蒙娜".
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    term ? params.set('query', term) : params.delete('query');
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className="bg-DarkGray w-full items-center px-4 py-3 text-sm font-medium text-white">
      <div className="relative w-full h-8 mb-2 border-[0.5px] rounded-full bg-transparent flex justify-between">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="w-4/5 ml-4 bg-transparent outline-none"
          placeholder="輸入喚醒體名稱..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <div className="h-full aspect-square rounded-r-full bg-Golden flex justify-center items-center">
          <svg className="h-3 w-3" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M16.0005 15.9998L12.3755 12.3748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </div>
      </div>
      <div className="flex justify-around">
        <div
          onClick={() => handleCareerFilter("")}
          className={`${careerFilter == "" ? "text-Golden" : "text-white"}`}
        >
          全界域
        </div>
        <div
          onClick={() => handleCareerFilter("混沌")}
          className={`${careerFilter == "混沌" ? "text-Golden" : "text-white"} relative`}
        >
          <img className="absolute -ml-2" src="/icon-混沌-white.svg" alt="career icon" />
          <span>混沌</span>
        </div>
        <div
          onClick={() => handleCareerFilter("深海")}
          className={`${careerFilter == "深海" ? "text-Golden" : "text-white"} relative`}
        >
          <img className="absolute -ml-2" src="/icon-深海-white.svg" alt="career icon" />
          <span>深海</span>
        </div>
        <div
          onClick={() => handleCareerFilter("血肉")}
          className={`${careerFilter == "血肉" ? "text-Golden" : "text-white"} relative`}
        >
          <img className="absolute -ml-2 -mt-[2px]" src="/icon-血肉-white.svg" alt="career icon" />
          <span>血肉</span>
        </div>
        <div
          onClick={() => handleCareerFilter("超維")}
          className={`${careerFilter == "超維" ? "text-Golden" : "text-white"} relative`}
        >
          <img className="absolute -ml-2" src="/icon-超維-white.svg" alt="career icon" />
          <span>超維</span>
        </div>
      </div>
    </section>
  );
}

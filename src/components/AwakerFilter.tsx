"use client";

import { useState, useEffect } from "react";

export default function AwakerFilter() {
  const [careerFilter, setCareerFilter] = useState("all");
  const [nameQuery, setNameQuery] = useState("");

  useEffect(() => {
    console.log(nameQuery);
  }, [nameQuery]);

  return (
    <section className="bg-DarkGray flex justify-between h-10 w-full items-center px-4 text-xs font-medium text-white">
      <div
        onClick={() => setCareerFilter("all")}
        className={`${careerFilter == "all" ? "text-Golden" : "text-white"}`}
      >
        全選
      </div>
      <div
        onClick={() => setCareerFilter("混沌")}
        className={`${careerFilter == "混沌" ? "text-Golden" : "text-white"} relative`}
      >
        <img className="absolute -ml-2" src="/icon-career-混沌.svg" alt="career icon" />
        <span>混沌</span>
      </div>
      <div
        onClick={() => setCareerFilter("深海")}
        className={`${careerFilter == "深海" ? "text-Golden" : "text-white"} relative`}
      >
        <img className="absolute -ml-2" src="/icon-career-深海.svg" alt="career icon" />
        <span>深海</span>
      </div>
      <div
        onClick={() => setCareerFilter("血肉")}
        className={`${careerFilter == "血肉" ? "text-Golden" : "text-white"} relative`}
      >
        <img className="absolute -ml-2 -mt-[2px]" src="/icon-career-血肉.svg" alt="career icon" />
        <span>血肉</span>
      </div>
      <div
        onClick={() => setCareerFilter("超維")}
        className={`${careerFilter == "超維" ? "text-Golden" : "text-white"} relative`}
      >
        <img className="absolute -ml-2" src="/icon-career-超維.svg" alt="career icon" />
        <span>超維</span>
      </div>
      <div className="relative w-32 h-5 border-[0.5px] rounded-full bg-transparent flex justify-between">
        <input
          className="ml-2 bg-transparent text-[8px] outline-none"
          value={nameQuery}
          placeholder="輸入喚醒體名稱..."
          onChange={(e) => setNameQuery(e.target.value)}
        />
        <div className="h-full aspect-square rounded-r-full bg-Golden flex justify-center items-center">
          <svg className="h-2 w-2" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0005 15.9998L12.3755 12.3748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

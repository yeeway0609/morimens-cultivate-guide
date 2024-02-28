import Image from "next/image";

export default function BaseBoard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-WhiteBoard flex-grow flex flex-col">
      <div className="relative w-full h-8">
        <Image src="/bg-baseboard-border-top.png" alt="baseboard border" fill={true} />
      </div>
      <main className="flex-grow mx-2 my-1 px-4 text-xs text-[#443939] border-x-2 border-[#adadad]">
        {children}
      </main>
      <div className="relative w-full h-8">
        <Image src="/bg-baseboard-border-bottom.png" alt="baseboard border" fill={true} />
      </div>
    </div>
  );
}

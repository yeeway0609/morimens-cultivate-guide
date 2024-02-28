import BaseBoard from "@/components/BaseBoard";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16"></div> {/* top padding same as navbar height */}
      <BaseBoard>
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-2xl">載入中</h1>
        </div>
      </BaseBoard>
    </div>
  );
}
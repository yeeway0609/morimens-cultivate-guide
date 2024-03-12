import BaseBoard from "@/components/BaseBoard";
import NavBarPadding from "@/components/NavBarPadding";

export default function WorkInProgress() {
  return (
    <div className="h-[100svh] flex flex-col">
      <NavBarPadding />
      <BaseBoard>
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-2xl">🚧 資料建置中...... 🚧</h1>
        </div>
      </BaseBoard>
    </div>
  );
}
"use client";

export default function SectionNavBar() {
  const sections = ["簡介", "關鍵啟靈", "角色技能組", "建議命輪", "建議密契", "建議隊伍"];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop + 105,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed bottom-0 w-full h-10 bg-DarkGray opacity-90 flex justify-center items-center z-10">
      {sections.map((section, index) => (
        <>
        <div
          key={index}
          className="text-[10px] text-white flex items-center"
          onClick={() => handleScroll(section)}
        >
          {section}
        </div>
        {index < sections.length - 1 && <div className="mx-1 w-4 border-dashed border-white border-b-[0.5px]"></div>}
        </>
      ))}
    </nav>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-mobile.png')" }}
      >
        <Image className="pt-20" src="/logo.svg" width={494} height={240} alt="Logo" />
      </div>
    </main>
  );
}

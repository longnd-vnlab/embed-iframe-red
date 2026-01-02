import { HeartBackground } from "@/components/heart-background"

export default async function ThanhHonInvitePage({
  params
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const decodedName = decodeURIComponent(name)

  return (
    <main className="relative min-h-screen bg-[#fff5f5] flex flex-col items-center p-4 md:p-8">
      {/* Background with falling hearts */}
      <HeartBackground />

      {/* Header with inviter name - outside the box */}
      <div className="relative z-10 text-center mb-4 mt-2">
        <p className="text-red-600 font-bold text-xl tracking-wider drop-shadow-lg italic" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          💌 Thân mời: {decodedName}
        </p>
      </div>

      {/* iPhone 17 Pro Max Frame */}
      <div className="relative z-10">
        {/* Phone outer frame */}
        <div className="relative bg-[#1a1a1a] rounded-[55px] p-[12px] shadow-[0_0_0_2px_#2a2a2a,0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* Side buttons - Volume */}
          <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-[160px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-[225px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-sm" />
          {/* Side button - Power */}
          <div className="absolute right-[-2px] top-[180px] w-[3px] h-[80px] bg-[#2a2a2a] rounded-r-sm" />

          {/* Screen container */}
          <div className="relative w-[343px] h-[695px] md:w-[403px] md:h-[825px] bg-black rounded-[45px] overflow-hidden">
            {/* Dynamic Island - only on PC */}
            <div className="hidden md:block absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[26px] bg-black rounded-full" />

            {/* Screen content */}
            <iframe
              src="https://cinelove.me/s/longandchuyen"
              className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
              title="Cinelove Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Home indicator */}
            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-20 w-[130px] h-[5px] bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

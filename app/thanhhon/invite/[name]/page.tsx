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

      <div className="relative z-10 w-full max-w-md h-[80vh] md:h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-red-100">
        <iframe
          src="https://cinelove.me/s/longandchuyen"
          className="absolute inset-0 w-[100%] h-full border-0 pointer-events-auto"
          title="Cinelove Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  )
}

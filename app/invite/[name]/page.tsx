import { HeartBackground } from "@/components/heart-background"

export default async function InvitePage({
  params
}: {
  params: Promise<{ name: string }>
}) {
  // Await params in Next.js 15+
  const { name } = await params
  // Decode the URL-encoded name
  const decodedName = decodeURIComponent(name)

  return (
    <main className="relative min-h-screen bg-[#fff5f5] flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background with falling hearts */}
      <HeartBackground />

      <div className="relative z-10 w-full max-w-md h-[85vh] md:h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-red-100">
        {/* Header with inviter name */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-50 to-transparent z-10 pt-4 pb-12 px-4 text-center">
          <p className="text-red-600 font-bold text-xl tracking-wider drop-shadow-lg italic" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            💌 Thân mời: {decodedName}
          </p>
        </div>

        <iframe
          src="https://cinelove.me/s/pc/longandchuyen"
          className="absolute inset-0 w-[100%] h-full border-0 pointer-events-auto"
          title="Cinelove Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  )
}

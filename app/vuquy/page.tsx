import { HeartBackground } from "@/components/heart-background"

export default function VuQuyPage() {
  return (
    <main className="relative min-h-screen bg-[#fff5f5] flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background with falling hearts */}
      <HeartBackground />

      <div className="relative z-10 w-full max-w-md h-[85vh] md:h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-red-100">
        <iframe
          src="https://cinelove.me/s/pc/chuyenandlong"
          className="absolute inset-0 w-[100%] h-full border-0 pointer-events-auto"
          title="Cinelove Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  )
}

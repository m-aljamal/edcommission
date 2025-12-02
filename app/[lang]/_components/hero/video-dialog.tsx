'use client'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import { useState } from 'react'

export function VideoDialog({ videoId }: { videoId: string }) {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setVideoOpen(true)}
        className="lg:px-6 px-3 lg:py-3 py-2 bg-main-blue/80 text-white rounded-full font-medium hover:bg-main-blue transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
      >
        <div className="relative">
          <Play className="size-4 lg:size-5 fill-white" />
          <span className="absolute inset-0 animate-ping opacity-30 rounded-full bg-white/50 group-hover:opacity-50"></span>
        </div>
        <span className="text-[10px] lg:text-sm">شاهد الفيديو</span>
      </button>
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent className="max-w-3xl border-none p-0 shadow-none bg-black">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video h-full w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

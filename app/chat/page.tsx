import { Suspense } from "react"
import { Loader } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ChatArea from "@/components/chat-area"
import MobileNavigation from "@/components/mobile-navigation"
import { MobileProvider } from "@/hooks/use-mobile"

export default function ChatPage() {
  return (
    <MobileProvider>
      <div className="flex h-screen bg-gradient-to-br from-zinc-50 to-violet-50 dark:from-zinc-900 dark:to-violet-950">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-80 lg:w-96 border-r border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <Loader className="animate-spin" />
              </div>
            }
          >
            <ChatArea />
          </Suspense>
        </div>

        {/* Mobile navigation - visible only on mobile */}
        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </MobileProvider>
  )
}

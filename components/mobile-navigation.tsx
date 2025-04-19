"use client"

import { MessageSquare, Users, Bell, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function MobileNavigation() {
  const [active, setActive] = useState("chats")

  const items = [
    { id: "chats", icon: MessageSquare, label: "Chats" },
    { id: "groups", icon: Users, label: "Groups" },
    { id: "notifications", icon: Bell, label: "Alerts" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-50">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={cn(
                "flex flex-col items-center py-3 px-5",
                active === item.id ? "text-violet-500" : "text-zinc-500 dark:text-zinc-400",
              )}
              onClick={() => setActive(item.id)}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

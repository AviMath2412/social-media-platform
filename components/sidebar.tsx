"use client"

import { useState } from "react"
import { Search, Plus, Settings, MessageSquare, Users, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import NewConversationModal from "./new-conversation-modal"

interface ChatItem {
  id: string
  name: string
  avatar?: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  isGroup: boolean
}

const chats: ChatItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Are we still meeting today?",
    time: "2m",
    unread: 3,
    online: true,
    isGroup: false,
  },
  {
    id: "2",
    name: "Design Team",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Alex: I've uploaded the new assets",
    time: "27m",
    unread: 12,
    online: true,
    isGroup: true,
  },
  {
    id: "3",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for your help yesterday!",
    time: "1h",
    unread: 0,
    online: false,
    isGroup: false,
  },
  {
    id: "4",
    name: "Project Brainstorm",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Jamie: Let's schedule a call",
    time: "3h",
    unread: 0,
    online: true,
    isGroup: true,
  },
  {
    id: "5",
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Did you see the latest update?",
    time: "1d",
    unread: 0,
    online: true,
    isGroup: false,
  },
  {
    id: "6",
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Let me know when you're free",
    time: "2d",
    unread: 0,
    online: false,
    isGroup: false,
  },
]

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"chats" | "groups" | "notifications">("chats")
  const [selectedChat, setSelectedChat] = useState<string>("1")
  const [newConversationOpen, setNewConversationOpen] = useState(false)

  const openNewConversationModal = () => {
    setNewConversationOpen(true)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50 gradient-text">Avi</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-zinc-500" />
        </Button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <Input placeholder="Search messages" className="pl-9 bg-zinc-100 dark:bg-zinc-800 border-none" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800">
        <button
          className={cn(
            "flex-1 py-3 text-sm font-medium text-center",
            activeTab === "chats"
              ? "text-zinc-900 dark:text-zinc-50 border-b-2 border-violet-500"
              : "text-zinc-500 dark:text-zinc-400",
          )}
          onClick={() => setActiveTab("chats")}
        >
          <div className="flex items-center justify-center gap-1.5">
            <MessageSquare className="h-4 w-4" />
            <span>Chats</span>
          </div>
        </button>
        <button
          className={cn(
            "flex-1 py-3 text-sm font-medium text-center",
            activeTab === "groups"
              ? "text-zinc-900 dark:text-zinc-50 border-b-2 border-violet-500"
              : "text-zinc-500 dark:text-zinc-400",
          )}
          onClick={() => setActiveTab("groups")}
        >
          <div className="flex items-center justify-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>Groups</span>
          </div>
        </button>
        <button
          className={cn(
            "flex-1 py-3 text-sm font-medium text-center",
            activeTab === "notifications"
              ? "text-zinc-900 dark:text-zinc-50 border-b-2 border-violet-500"
              : "text-zinc-500 dark:text-zinc-400",
          )}
          onClick={() => setActiveTab("notifications")}
        >
          <div className="flex items-center justify-center gap-1.5">
            <Bell className="h-4 w-4" />
            <span>Alerts</span>
          </div>
        </button>
      </div>

      {/* Chat list */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chats
            .filter((chat) => {
              if (activeTab === "chats") return !chat.isGroup
              if (activeTab === "groups") return chat.isGroup
              return true // Show all for notifications
            })
            .map((chat) => (
              <button
                key={chat.id}
                className={cn(
                  "w-full flex items-start gap-3 p-3 rounded-lg transition-colors message-bubble",
                  selectedChat === chat.id
                    ? "bg-violet-50 dark:bg-violet-900/20"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                )}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50 truncate">{chat.name}</h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap ml-2">{chat.time}</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <Badge className="bg-violet-500 hover:bg-violet-500/90 ml-auto">{chat.unread}</Badge>
                )}
              </button>
            ))}
        </div>
      </ScrollArea>

      {/* New chat button */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <Button className="w-full bg-violet-500 hover:bg-violet-600" onClick={openNewConversationModal}>
          <Plus className="h-4 w-4 mr-2" />
          New Conversation
        </Button>
      </div>
      <NewConversationModal open={newConversationOpen} onOpenChange={setNewConversationOpen} />
    </div>
  )
}

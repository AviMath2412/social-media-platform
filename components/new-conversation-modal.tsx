"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, UserPlus, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Contact {
  id: string
  name: string
  avatar?: string
  email: string
  online: boolean
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "alex.t@example.com",
    online: true,
  },
  {
    id: "2",
    name: "Jamie Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "jamie.r@example.com",
    online: false,
  },
  {
    id: "3",
    name: "Taylor Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "taylor.k@example.com",
    online: true,
  },
  {
    id: "4",
    name: "Jordan Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "jordan.s@example.com",
    online: false,
  },
  {
    id: "5",
    name: "Casey Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "casey.j@example.com",
    online: true,
  },
]

interface NewConversationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NewConversationModal({ open, onOpenChange }: NewConversationModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleContactSelection = (contactId: string) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter((id) => id !== contactId))
    } else {
      setSelectedContacts([...selectedContacts, contactId])
    }
  }

  const handleCreateConversation = () => {
    // In a real app, this would create the conversation with the selected contacts
    console.log("Creating conversation with contacts:", selectedContacts)
    onOpenChange(false)
    setSelectedContacts([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">New Conversation</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="direct" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="direct" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Direct Message</span>
            </TabsTrigger>
            <TabsTrigger value="group" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Group Chat</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="direct" className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search contacts..."
                className="pl-9 bg-zinc-100 dark:bg-zinc-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-2">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedContacts.includes(contact.id)
                        ? "bg-violet-50 dark:bg-violet-900/20"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                    onClick={() => toggleContactSelection(contact.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{contact.name}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{contact.email}</p>
                    </div>
                    {selectedContacts.includes(contact.id) && (
                      <div className="h-5 w-5 rounded-full bg-violet-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                className="bg-violet-500 hover:bg-violet-600"
                disabled={selectedContacts.length === 0}
                onClick={handleCreateConversation}
              >
                Start Conversation
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="group" className="space-y-4">
            <div className="space-y-4">
              <Input placeholder="Group name" className="bg-zinc-100 dark:bg-zinc-800" />

              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Add participants..."
                  className="pl-9 bg-zinc-100 dark:bg-zinc-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <ScrollArea className="h-[240px] pr-4">
                <div className="space-y-2">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedContacts.includes(contact.id)
                          ? "bg-violet-50 dark:bg-violet-900/20"
                          : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`}
                      onClick={() => toggleContactSelection(contact.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{contact.name}</h3>
                      </div>
                      {selectedContacts.includes(contact.id) && (
                        <div className="h-5 w-5 rounded-full bg-violet-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                className="bg-violet-500 hover:bg-violet-600"
                disabled={selectedContacts.length === 0}
                onClick={handleCreateConversation}
              >
                Create Group
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

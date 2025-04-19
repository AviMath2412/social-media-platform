"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import {
  Send,
  Paperclip,
  Smile,
  ImageIcon,
  Mic,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft,
  X,
  Camera,
  File,
  MapPin,
  StopCircle,
  CheckCircle2,
  CheckCheck,
  Trash2,
  Forward,
  Reply,
  Copy,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  content: string
  sender: "me" | "other"
  timestamp: string
  status: "sending" | "sent" | "delivered" | "read" | "error"
  reactions?: { emoji: string; count: number; users?: string[] }[]
  attachment?: {
    type: "image" | "file" | "audio" | "location" | "video"
    url: string
    name?: string
    previewUrl?: string
    duration?: number
    size?: string
  }
  isDeleted?: boolean
  replyTo?: {
    id: string
    content: string
    sender: "me" | "other"
  }
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hey there! How's your project coming along?",
    sender: "other",
    timestamp: "10:23 AM",
    status: "read",
  },
  {
    id: "2",
    content: "It's going well! I'm just finalizing the design for the new feature.",
    sender: "me",
    timestamp: "10:25 AM",
    status: "read",
    reactions: [{ emoji: "👍", count: 1, users: ["Sarah Johnson"] }],
  },
  {
    id: "3",
    content: "That sounds great! Would you be able to share a preview?",
    sender: "other",
    timestamp: "10:26 AM",
    status: "read",
  },
  {
    id: "4",
    content: "Sure, here's a screenshot of what I've been working on:",
    sender: "me",
    timestamp: "10:28 AM",
    status: "read",
    attachment: {
      type: "image",
      url: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      previewUrl:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  },
  {
    id: "5",
    content: "This looks amazing! I love the color scheme you've chosen.",
    sender: "other",
    timestamp: "10:30 AM",
    status: "read",
    reactions: [{ emoji: "❤️", count: 1, users: ["Me"] }],
  },
  {
    id: "6",
    content: "By the way, are we still meeting tomorrow to discuss the roadmap?",
    sender: "other",
    timestamp: "10:32 AM",
    status: "read",
  },
  {
    id: "7",
    content: "Yes, definitely! I've prepared some notes for our discussion.",
    sender: "me",
    timestamp: "10:33 AM",
    status: "delivered",
    attachment: {
      type: "file",
      url: "#",
      name: "meeting-notes.pdf",
      size: "2.4 MB",
    },
  },
  {
    id: "8",
    content: "Great! I've also been working on a new track. Want to hear it?",
    sender: "other",
    timestamp: "10:35 AM",
    status: "read",
  },
  {
    id: "9",
    content: "Check this out:",
    sender: "other",
    timestamp: "10:36 AM",
    status: "read",
    attachment: {
      type: "audio",
      url: "#",
      name: "new-track-demo.mp3",
      duration: 128, // seconds
    },
  },
]

const popularEmojis = ["👍", "❤️", "😂", "😮", "😢", "👏", "🔥", "✨", "🙌", "👀", "💯", "🎉"]

export default function ChatArea() {
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [replyingTo, setReplyingTo] = useState<Message | null>(null)
  const [audioPlaying, setAudioPlaying] = useState<string | null>(null)
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({})
  const [audioVolume, setAudioVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { isMobile } = useMobile()
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({})

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  // Simulate typing indicator from the other person
  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * 10000) + 15000 // Between 15-25 seconds
    const typingInterval = setInterval(() => {
      setIsTyping(true)

      // Show typing for 3-5 seconds
      const typingDuration = Math.floor(Math.random() * 2000) + 3000

      typingTimerRef.current = setTimeout(() => {
        setIsTyping(false)

        // Add a message from the other person after typing
        const randomMessages = [
          "How's everything else going?",
          "By the way, have you seen the latest updates?",
          "I'm really excited about this project!",
          "Let me know if you need any help with anything.",
          "The team is loving what you've done so far.",
        ]

        const randomIndex = Math.floor(Math.random() * randomMessages.length)
        const newMsg = {
          id: Date.now().toString(),
          content: randomMessages[randomIndex],
          sender: "other",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          status: "sent",
        }

        setChatMessages((prev) => [...prev, newMsg])
      }, typingDuration)
    }, randomDelay)

    return () => {
      clearInterval(typingInterval)
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current)
      }
    }
  }, [])

  // Handle audio playback
  useEffect(() => {
    // Clean up audio elements when component unmounts
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause()
        audio.src = ""
      })
    }
  }, [])

  const toggleAudioPlayback = (messageId: string) => {
    if (audioPlaying === messageId) {
      // Pause current audio
      if (audioRefs.current[messageId]) {
        audioRefs.current[messageId].pause()
      }
      setAudioPlaying(null)
    } else {
      // Pause any currently playing audio
      if (audioPlaying && audioRefs.current[audioPlaying]) {
        audioRefs.current[audioPlaying].pause()
      }

      // Play the new audio
      if (!audioRefs.current[messageId]) {
        // Create new audio element if it doesn't exist
        const audio = new Audio("/sample-audio.mp3") // In a real app, this would be the actual audio URL
        audio.volume = audioVolume
        audio.addEventListener("timeupdate", () => {
          const progress = (audio.currentTime / audio.duration) * 100
          setAudioProgress((prev) => ({ ...prev, [messageId]: progress }))
        })
        audio.addEventListener("ended", () => {
          setAudioPlaying(null)
        })
        audioRefs.current[messageId] = audio
      }

      audioRefs.current[messageId].play()
      setAudioPlaying(messageId)
    }
  }

  const updateAudioVolume = (value: number) => {
    setAudioVolume(value)
    setIsMuted(value === 0)

    // Update volume for all audio elements
    Object.values(audioRefs.current).forEach((audio) => {
      audio.volume = value
    })
  }

  const toggleMute = () => {
    if (isMuted) {
      // Unmute - restore previous volume or default to 0.8
      const newVolume = audioVolume === 0 ? 0.8 : audioVolume
      updateAudioVolume(newVolume)
    } else {
      // Mute - set volume to 0
      updateAudioVolume(0)
    }
  }

  const addReaction = (messageId: string, emoji: string) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === messageId) {
          const existingReactions = message.reactions || []
          const existingReactionIndex = existingReactions.findIndex((r) => r.emoji === emoji)

          let updatedReactions
          if (existingReactionIndex >= 0) {
            updatedReactions = [...existingReactions]
            updatedReactions[existingReactionIndex] = {
              ...updatedReactions[existingReactionIndex],
              count: updatedReactions[existingReactionIndex].count + 1,
              users: [...(updatedReactions[existingReactionIndex].users || []), "You"],
            }
          } else {
            updatedReactions = [...existingReactions, { emoji, count: 1, users: ["You"] }]
          }

          return { ...message, reactions: updatedReactions }
        }
        return message
      }),
    )
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setSelectedFile(file)

    // Create preview for images
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewUrl(null)
    }
  }

  const clearSelectedFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const startRecording = useCallback(() => {
    setIsRecording(true)
    setRecordingTime(0)

    // Start timer
    recordingTimerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1)
    }, 1000)

    // In a real app, we would start actual audio recording here
    console.log("Started recording audio")
  }, [])

  const stopRecording = useCallback(() => {
    setIsRecording(false)

    // Clear timer
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current)
      recordingTimerRef.current = null
    }

    // In a real app, we would stop recording and process the audio file
    console.log("Stopped recording audio after", recordingTime, "seconds")

    // Simulate sending a voice message
    const voiceMessage: Message = {
      id: Date.now().toString(),
      content: "Voice message",
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sending",
      attachment: {
        type: "audio",
        url: "#",
        name: `Voice message (${formatRecordingTime(recordingTime)})`,
        duration: recordingTime,
      },
    }

    setChatMessages((prev) => [...prev, voiceMessage])

    // Simulate message status updates
    simulateMessageStatusUpdates(voiceMessage.id)
  }, [recordingTime])

  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const simulateMessageStatusUpdates = (messageId: string) => {
    // Simulate sending -> sent -> delivered -> read
    setTimeout(() => {
      setChatMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, status: "sent" } : msg)))

      setTimeout(() => {
        setChatMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, status: "delivered" } : msg)))

        setTimeout(() => {
          setChatMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, status: "read" } : msg)))
        }, 2000)
      }, 1000)
    }, 800)
  }

  const handleReply = (message: Message) => {
    setReplyingTo(message)
  }

  const cancelReply = () => {
    setReplyingTo(null)
  }

  const deleteMessage = (messageId: string) => {
    setChatMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isDeleted: true, content: "This message was deleted" } : msg,
      ),
    )
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !selectedFile) return

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sending",
    }

    // Add reply reference if replying to a message
    if (replyingTo) {
      message.replyTo = {
        id: replyingTo.id,
        content: replyingTo.content,
        sender: replyingTo.sender,
      }
      setReplyingTo(null)
    }

    // Add attachment if there's a file selected
    if (selectedFile) {
      const isImage = selectedFile.type.startsWith("image/")
      const isAudio = selectedFile.type.startsWith("audio/")
      const isVideo = selectedFile.type.startsWith("video/")

      const fileSize = (selectedFile.size / (1024 * 1024)).toFixed(1) + " MB"

      message.attachment = {
        type: isImage ? "image" : isAudio ? "audio" : isVideo ? "video" : "file",
        url: previewUrl || "#",
        name: selectedFile.name,
        previewUrl: isImage ? previewUrl || undefined : undefined,
        size: fileSize,
      }

      if (isAudio || isVideo) {
        message.attachment.duration = 120 // Mock duration in seconds
      }

      clearSelectedFile()
    }

    setChatMessages([...chatMessages, message])
    setNewMessage("")

    // Simulate message status updates
    simulateMessageStatusUpdates(message.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const renderMessageStatus = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return <Loader2 className="h-3 w-3 animate-spin text-zinc-400" />
      case "sent":
        return <CheckCircle2 className="h-3 w-3 text-zinc-400" />
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-zinc-400" />
      case "read":
        return <CheckCheck className="h-3 w-3 text-violet-500" />
      case "error":
        return <X className="h-3 w-3 text-red-500" />
      default:
        return null
    }
  }

  const renderAttachment = (attachment: Message["attachment"], messageId: string) => {
    if (!attachment) return null

    switch (attachment.type) {
      case "image":
        return (
          <div className="rounded-lg overflow-hidden mt-2 attachment-animation">
            <img
              src={attachment.url || "/placeholder.svg"}
              alt="Attachment"
              className="w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        )
      case "file":
        return (
          <div className="flex items-center gap-2 p-3 rounded-md bg-black/10 dark:bg-white/10 mt-2 attachment-animation">
            <File className="h-5 w-5" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{attachment.name}</div>
              {attachment.size && <div className="text-xs opacity-70">{attachment.size}</div>}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4 rotate-[225deg]" />
            </Button>
          </div>
        )
      case "audio":
        return (
          <div className="flex flex-col gap-2 p-3 rounded-md bg-black/10 dark:bg-white/10 mt-2 attachment-animation">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => toggleAudioPlayback(messageId)}
              >
                {audioPlaying === messageId ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{attachment.name}</div>
                <div className="text-xs opacity-70">
                  {formatRecordingTime(
                    Math.floor(((audioProgress[messageId] || 0) * (attachment.duration || 0)) / 100),
                  )}{" "}
                  / {formatRecordingTime(attachment.duration || 0)}
                </div>
              </div>
              <div className="relative">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 absolute -bottom-1 -right-1 rounded-full bg-zinc-200 dark:bg-zinc-700 p-0"
                    >
                      <span className="sr-only">Adjust volume</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3" side="top">
                    <div className="h-24 flex flex-col items-center justify-center">
                      <Slider
                        defaultValue={[audioVolume * 100]}
                        max={100}
                        step={1}
                        orientation="vertical"
                        className="h-full"
                        onValueChange={(value) => updateAudioVolume(value[0] / 100)}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Progress value={audioProgress[messageId] || 0} className="h-1" />
          </div>
        )
      case "video":
        return (
          <div className="rounded-lg overflow-hidden mt-2 attachment-animation">
            <div className="relative bg-zinc-100 dark:bg-zinc-800 aspect-video flex items-center justify-center">
              {attachment.previewUrl ? (
                <img
                  src={attachment.previewUrl || "/placeholder.svg"}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-zinc-500">Video Preview</div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="rounded-full bg-black/50 hover:bg-black/70 h-12 w-12">
                  <Play className="h-6 w-6 text-white" />
                </Button>
              </div>
              {attachment.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {formatRecordingTime(attachment.duration)}
                </div>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-1">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Sarah Johnson"
            />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">Sarah Johnson</h2>
            <p className="text-xs text-emerald-500">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5 text-zinc-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5 text-zinc-500" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5 text-zinc-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Search in conversation</DropdownMenuItem>
              <DropdownMenuItem>Mute notifications</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Block contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"} group message-animation`}
            >
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-3 message-bubble ${
                  message.isDeleted
                    ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 italic"
                    : message.sender === "me"
                      ? "bg-violet-500 text-white rounded-tr-none chat-bubble-out"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-tl-none chat-bubble-in"
                }`}
              >
                {/* Reply reference */}
                {message.replyTo && (
                  <div
                    className={`text-xs p-2 mb-2 rounded ${
                      message.sender === "me" ? "bg-violet-600/50" : "bg-zinc-200 dark:bg-zinc-700"
                    }`}
                  >
                    <div className="font-medium mb-1">{message.replyTo.sender === "me" ? "You" : "Sarah Johnson"}</div>
                    <div className="truncate">{message.replyTo.content}</div>
                  </div>
                )}

                {/* Message content */}
                {message.content && <p className="text-sm">{message.content}</p>}

                {/* Attachment rendering */}
                {message.attachment && !message.isDeleted && renderAttachment(message.attachment, message.id)}

                {/* Message metadata */}
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                  {message.sender === "me" && (
                    <span className="text-xs status-animation">{renderMessageStatus(message.status)}</span>
                  )}
                </div>

                {/* Reactions */}
                {message.reactions && message.reactions.length > 0 && !message.isDeleted && (
                  <div className="flex flex-wrap gap-1 mt-1 -mb-1">
                    {message.reactions.map((reaction, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`text-xs px-1.5 py-0.5 rounded-full reaction-animation ${
                          message.sender === "me" ? "bg-violet-600 text-white" : "bg-zinc-200 dark:bg-zinc-700"
                        }`}
                        title={reaction.users?.join(", ")}
                      >
                        {reaction.emoji} {reaction.count > 1 && reaction.count}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message actions */}
              {!message.isDeleted && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`flex items-center ${message.sender === "me" ? "mr-2" : "ml-2"} opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    {/* Reaction button */}
                    <Popover open={emojiPickerOpen} onOpenChange={setEmojiPickerOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          <Smile className="h-4 w-4 text-zinc-500" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-2" align={message.sender === "me" ? "end" : "start"}>
                        <div className="grid grid-cols-6 gap-2 emoji-grid-animation">
                          {popularEmojis.map((emoji) => (
                            <motion.button
                              key={emoji}
                              className="text-xl hover:scale-125 transition-transform p-1"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => {
                                addReaction(message.id, emoji)
                                setEmojiPickerOpen(false)
                              }}
                            >
                              {emoji}
                            </motion.button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* More actions */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          <MoreVertical className="h-4 w-4 text-zinc-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align={message.sender === "me" ? "end" : "start"}>
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => handleReply(message)}>
                          <Reply className="h-4 w-4" />
                          <span>Reply</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Forward className="h-4 w-4" />
                          <span>Forward</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Copy className="h-4 w-4" />
                          <span>Copy</span>
                        </DropdownMenuItem>
                        {message.sender === "me" && (
                          <DropdownMenuItem
                            className="flex items-center gap-2 text-red-500"
                            onClick={() => deleteMessage(message.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-3 rounded-tl-none">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Reply indicator */}
      {replyingTo && (
        <div className="p-2 mx-4 mb-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-l-4 border-violet-500 flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Replying to {replyingTo.sender === "me" ? "yourself" : "Sarah Johnson"}
            </div>
            <div className="text-sm truncate">{replyingTo.content}</div>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={cancelReply}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Message input */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        {/* File preview */}
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {previewUrl ? (
                  <div className="relative w-12 h-12">
                    <img
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded flex items-center justify-center">
                    <File className="h-6 w-6 text-violet-500" />
                  </div>
                )}
                <div className="text-sm truncate max-w-[200px]">{selectedFile.name}</div>
              </div>
              <Button variant="ghost" size="icon" onClick={clearSelectedFile} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Recording UI */}
        {isRecording ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg mb-2"
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500 recording-pulse" />
              <span className="text-red-500 font-medium">Recording {formatRecordingTime(recordingTime)}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500"
              onClick={stopRecording}
            >
              <StopCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        ) : (
          <div className="flex items-end gap-2">
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
              <div className="flex items-center gap-2 px-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Smile className="h-5 w-5 text-zinc-500" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2" side="top">
                          <div className="grid grid-cols-8 gap-2 emoji-grid-animation">
                            {[...popularEmojis, "😊", "😍", "🤔", "😎", "🙄", "😴", "🥳", "🤩"].map((emoji) => (
                              <motion.button
                                key={emoji}
                                className="text-xl hover:scale-125 transition-transform p-1"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                  setNewMessage(newMessage + emoji)
                                }}
                              >
                                {emoji}
                              </motion.button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TooltipTrigger>
                    <TooltipContent>Add emoji</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                />

                <div className="flex items-center gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Paperclip className="h-5 w-5 text-zinc-500" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Attach file</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                  />

                  <DropdownMenu>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ImageIcon className="h-5 w-5 text-zinc-500" />
                            </Button>
                          </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent>Media options</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="flex items-center gap-2"
                        onClick={() => {
                          const input = document.createElement("input")
                          input.type = "file"
                          input.accept = "image/*"
                          input.onchange = (e) => handleFileSelect(e as any)
                          input.click()
                        }}
                      >
                        <Camera className="h-4 w-4" />
                        <span>Image</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Location</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={startRecording}>
                          <Mic className="h-5 w-5 text-zinc-500" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Voice message</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-10 w-10 rounded-full bg-violet-500 hover:bg-violet-600"
              >
                <Send className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

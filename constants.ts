import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 50;

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-black",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-black",
    bgColor: "bg-indigo-500/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-black",
    bgColor: "bg-indigo-500/10",
    href: '/code',
  },
];

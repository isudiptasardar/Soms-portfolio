import { User } from "lucide-react"

interface ProfilePlaceholderProps {
  className?: string
  size?: number
}

export default function ProfilePlaceholder({ className = "", size = 100 }: ProfilePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <User size={size * 0.5} className="text-white" />
    </div>
  )
}

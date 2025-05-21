import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  className?: string
  width?: number
  height?: number
  text?: string
}

export default function PlaceholderImage({
  className,
  width = 800,
  height = 800,
  text = "Image",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400",
        className,
      )}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-2 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p>{text}</p>
      </div>
    </div>
  )
}

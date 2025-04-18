export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-800 dark:border-t-zinc-300 rounded-full animate-spin"></div>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    </div>
  )
}

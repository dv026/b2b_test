import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center text-purple-400 text-4xl">
      <div>Houston, we have a problem</div>
      <div>Go <Link href='/'>Home</Link></div>
    </div>
  )
}
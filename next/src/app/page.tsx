import Image from 'next/image'
import {sum} from "@/lib";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {sum(10, 12)}
    </main>
  )
}

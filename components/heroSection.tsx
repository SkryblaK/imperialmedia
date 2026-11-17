import { Dot } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const marqueeText =
  "Namibia's number 1 media center • Your one stop media center • Promotions will be displayed here! • Product Catalog coming soon (in Development) • Built by Thindhimba George @ imperialmediasolutions • "

export default function HeroSection() {
  return (
    <div className="flex h-screen w-screen flex-col px-2 pt-16 pb-4 md:px-8 lg:px-12 xl:px-24">
      <div className="flex h-[calc(100vh-40px)] w-full">
        {/* Left */}
        <div className="flex w-full flex-col md:w-2/3 lg:w-1/2">
          <span className="mx-auto my-auto flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-primary p-1 max-md:border-2 max-md:bg-primary/20 md:h-5/6 md:items-start">
            <span className="flex w-3/5 items-center justify-between text-xs font-bold text-primary">
              <Link href={""} className="hover:text-red-600 hover:underline">
                Web
              </Link>
              <Dot />
              <Link href={""} className="hover:text-red-600 hover:underline">
                IT
              </Link>
              <Dot />
              <Link href={""} className="hover:text-red-600 hover:underline">
                Livestream
              </Link>
              <Dot />
              <Link href={""} className="hover:text-red-600 hover:underline">
                Print
              </Link>
              <Dot />
              <Link href={""} className="hover:text-red-600 hover:underline">
                Design
              </Link>
            </span>
            <h1 className="text-center text-4xl font-extrabold md:text-start md:text-5xl lg:text-7xl">
              We build, broadcast and print your{" "}
              <span className="text-primary">brand</span>.
            </h1>
            <p className="text-center text-base leading-relaxed text-slate-700 md:text-start md:text-lg dark:text-slate-300">
              A <span className="text-primary">Full-service media agency</span>:
              from your first website to your live event streams and every
              business card in-between.
            </p>
            <span className="flex items-center gap-4">
              <Button
                className={"p-4 font-bold md:p-6"}
                variant={"default"}
                size={"lg"}
              >
                Demo
              </Button>
              <Button
                className={
                  "border-primary p-4 font-bold text-primary hover:bg-primary/2 hover:text-primary md:p-6 dark:border-primary dark:bg-background"
                }
                variant={"outline"}
                size={"lg"}
              >
                Demo
              </Button>
            </span>
            <span className="flex items-center gap-1 text-sm">
              <p>Already a client?</p>
              <Link
                href={"/dashboard"}
                className="font-bold text-primary underline"
              >
                Open your dashboard
              </Link>
            </span>
          </span>
        </div>
        {/* Right */}
        <div className="hidden w-1/3 flex-col md:flex lg:w-1/2">
          <span className="mx-auto my-auto flex h-5/6 w-5/6 items-center justify-center rounded-xl bg-primary font-bold text-white">
            <p>IMS</p>
          </span>
        </div>
      </div>
      <div className="mt-3 flex h-10 w-full items-center overflow-hidden rounded-md border border-x-4 border-primary bg-primary whitespace-nowrap text-white">
        <div className="inline-flex animate-marquee">
          <p className="mx-0.5">{marqueeText}</p>
          <p className="mx-0.5">{marqueeText}</p>
        </div>
      </div>
    </div>
  )
}

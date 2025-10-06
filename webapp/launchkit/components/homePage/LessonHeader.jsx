import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getReleaseData } from "@/lib/changelog";

export default function LessonHeader() {
  // const releases = getReleaseData();
  // const latestRelease = releases[0]; // First release is the latest

  // if (!latestRelease) return null;
  // const date = new Date(latestRelease.date);
  // const formattedDate = date.toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  // });

  return (
    <div
      // href={`/releases/${latestRelease.slug}`}
      className="block hover:no-underline"
    >
      <div className="py-1.5 max-w-[95vw]">
        <div className="flex border bg-primary/15 border-primary items-center gap-3 w-full bg-white rounded-full px-3 pr-3 py-1 shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow transition-all group">
          {/* <div className="flex items-center justify-center p-1.5 rounded-full bg-primary text-white font-semibold text-xs">
            New
          </div> */}

          <p className="text-md font-medium text-zinc-800 group-hover:text-primary/90 transition-colors flex items-center gap-2 overflow-hidden">
            <span className="overflow-hidden text-primary text-ellipsis whitespace-nowrap">
            Reddit Marketing on AutoPilot
            </span>
          </p>

          {/* <ArrowRight className="w-3.5 h-3.5 text-primary/70 transition-transform group-hover:translate-x-0.5" /> */}
        </div>
      </div>
    </div>
  );
}

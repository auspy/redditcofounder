import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageCard({
  imageUrl,
  title,
  description,
  stats = null,
  imageAlt = null,
  className = null,
  variant = "full" // "full" | "imageOnly"
}) {
  if (variant === "imageOnly") {
    return (
      <div className={cn("relative rounded-xl overflow-hidden", className)}>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-200">
          {imageUrl && (
            <div className="relative w-full h-auto bg-gray-100">
              <Image
                src={imageUrl}
                alt={imageAlt || title || "Reddit result"}
                width={400}
                height={300}
                className="object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-xl p-[1px]", className)}>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-200">
        {imageUrl && (
          <div className="relative w-full h-48 bg-gray-100">
            <Image
              src={imageUrl}
              alt={imageAlt || title || "Reddit result"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-4">
          {title && (
            <h3 className="font-semibold text-gray-900 text-lg mb-2 leading-tight">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {description}
            </p>
          )}

          {stats && (
            <div className="flex items-center space-x-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
              {stats.upvotes && (
                <div className="flex items-center space-x-1">
                  <span className="text-orange-500">▲</span>
                  <span>{stats.upvotes}</span>
                </div>
              )}
              {stats.comments && (
                <div className="flex items-center space-x-1">
                  <span>💬</span>
                  <span>{stats.comments}</span>
                </div>
              )}
              {stats.views && (
                <div className="flex items-center space-x-1">
                  <span>👁</span>
                  <span>{stats.views}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
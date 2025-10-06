import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

export const metadata = {
  title: "Release Not Found - SupaSidebar",
  description: "The requested release could not be found.",
};

export default function ReleaseNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <CardContent className="relative p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4">
                <FileQuestion className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Release Not Found</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              The release you're looking for doesn't exist or may have been
              removed.
            </p>
            <Button size="lg" asChild>
              <Link href="/changelog">View All Releases</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <SiteFooter />
    </div>
  );
}

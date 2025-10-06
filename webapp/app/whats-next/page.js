import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Shield,
  Users,
  Brain,
  Layers,
  Eye,
  FolderTree,
  Globe,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "What's Next - SupaSidebar",
  description:
    "Explore our roadmap and upcoming features that will make SupaSidebar even better for your productivity.",
};

export default function WhatsNextPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <Header />

      <main>
        <PageHeader
          badge="Vision"
          title="What's Next"
          description="Current aim is to bring folder organization, pinned tabs, and enhanced tab management"
        />

        <div className="max-w-4xl mx-auto py-12 px-4">
          {/* Quick Recap */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">
                  What We've Built
                </h2>
                {/* View changelog button */}
                <Button variant="ghost" asChild size="sm" className="p-2 h-6">
                  <Link href="/changelog">
                    View Changelog
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground">
                The foundation that makes SupaSidebar your productivity
                companion
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Lightning-Fast Command Palette:</strong> ⌘⌃K to
                    search everything instantly. Fuzzy search with recent tabs
                    tracking.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Spaces:</strong> Organize your work into multiple
                    spaces. Switch between projects with keyboard shortcuts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Smart Sidebar:</strong> Draggable, auto-hide on hover,
                    pin to keep visible. Works with 8+ browsers including Arc,
                    Vivaldi, and Dia.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Keyboard-First Design:</strong> Full keyboard control
                    with customizable shortcuts. Navigate, delete, rename, and
                    switch spaces without touching the mouse.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Save & Organize:</strong> ⌘⌃S to save pages, ⌘⌃C to
                    copy URLs. Rename items for better organization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Folders:</strong> Hierarchical organization within
                    spaces. Create nested folder structures with drag and drop
                    support.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pinned Tabs:</strong> Keep your most important tabs
                    always accessible. Pinned tabs persist across browser
                    sessions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Free Plan Available:</strong> Core features available
                    for free. Upgrade for unlimited spaces and premium features.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Next Big Steps */}
          <div className="space-y-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Coming Soon
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="relative overflow-hidden">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <Badge
                        variant="default"
                        className="bg-primary/90 text-white"
                      >
                        Next Up
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Workflow className="h-5 w-5" />
                      Imports
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Import your bookmarks and data from browsers, bookmark managers, and other productivity tools seamlessly.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5" />
                        <span>
                          Import bookmarks from all major browsers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-0.5" />
                        <span>
                          Maintain folder structure during import
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <Badge
                        variant="outline"
                        className="border-primary/20 text-primary/90"
                      >
                        In Development
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Enhanced Command Panel
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Arc-inspired command panel with improved search, visual previews, and smart suggestions.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 text-primary mt-0.5" />
                        <span>Visual previews and favicons in search results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 text-primary mt-0.5" />
                        <span>Smart suggestions based on usage patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 text-primary mt-0.5" />
                        <span>Quick actions and shortcuts directly from search</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Live Tabs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Also Coming Soon
              </h2>
              <Card className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="border-primary/20 text-primary/90"
                    >
                      In Development
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Live Tabs
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    See all your open browser tabs and windows in real-time.
                    Never lose a tab in the chaos again.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-primary mt-0.5" />
                      <span>Real-time view of all open browser tabs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-primary mt-0.5" />
                      <span>Jump to any tab instantly across browsers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-primary mt-0.5" />
                      <span>Tab grouping and bulk operations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Long-term Plans */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                On Our Radar
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        AI Smart Grouping
                      </h3>
                      <p className="text-muted-foreground">
                        Intelligent organization that learns from your workflow.
                        Automatically suggests groupings for your files and
                        websites based on usage patterns and project context.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Workflow className="h-5 w-5 text-primary" />
                        Workflow Templates
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-built and custom workflow templates. Open all the
                        tools you need for specific tasks with one click. Share
                        workflows with your team.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Team Sync & Collaboration
                      </h3>
                      <p className="text-muted-foreground">
                        Share spaces and workflows with your team. See what your
                        colleagues are working on and quickly access shared
                        resources.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Cross-Platform Expansion
                      </h3>
                      <p className="text-muted-foreground">
                        Bring SupaSidebar to Windows and Linux. Seamless sync
                        across all your devices with consistent keyboard
                        shortcuts and features.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-primary/[0.03] border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">
                  Help Shape the Future of SupaSidebar
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Your feedback drives our development. Share your thoughts on
                  these upcoming features and help us build the ultimate focus
                  tool.
                </p>
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Share Your Thoughts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

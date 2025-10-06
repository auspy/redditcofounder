import FeatureListItem from "./FeatureListItem";
import SecondaryButton from "./SecondaryButton";
import { featureEnum } from "@/lib/features/featureEnum";
import FeatureHighlights from "@/components/features/FeatureHighlights";
import AlertMessage from "@/components/alerts/AlertMessage";

export default function FeatureList() {
  const data = [
    {
      solvedIssue: "Saving things takes too long",
      title: "Save or Copy URL in one shortcut",
      description: (
        <>
          <span>
            Press{" "}
            <strong>
              <kbd>CMD CTRL S</kbd>
            </strong>{" "}
            to save and{" "}
            <strong>
              <kbd>CMD CTRL C</kbd>
            </strong>{" "}
            to copy current website link to the sidebar.
          </span>
        </>
      ),
      imageUrl: "/shortcut.png",
      imageAlt: "Quick-Save Shortcut",
      // imagePosition: "right",
      textColor: "text-zinc-800",
      mode: "vertical",
    },
    {
      solvedIssue: "Lost in too many tabs",
      title: "Find your work instantly",
      description: (
        <>
          <span>
            <strong>Recents</strong> tracks every website you've used in the
            last 48 hours.
          </span>
        </>
      ),
      imageUrl: "/recents.png",
      imageAlt: "SupaSidebar Recents Feed",
      imagePosition: "left",
      textColor: "text-zinc-800",
      mode: "vertical",
    },
    {
      solvedIssue: "Opening the same things over and over",
      title: "Keep favorites handy",
      description: (
        <>
          <span>
            Your pinned items are shown at top of the list for quick access.
            Folders coming before Aug 24.
          </span>
        </>
      ),
      imageUrl: "/pin.png",
      imageAlt: "Pinned Items",
      imagePosition: "right",
      mode: "vertical",
      textColor: "text-zinc-800",
    },
    {
      solvedIssue: "⚡ Switching between apps is slow",
      title: "Fast search for everything",
      description: (
        <>
          <span>
            Press{" "}
            <strong>
              <kbd>CMD CTRL K</kbd>
            </strong>{" "}
            and type. Find any file, folder, website, or app instantly.
          </span>
        </>
      ),
      imageUrl: "/commandpanel.png",
      imageAlt: "Command Palette",
      imagePosition: "left",
      textColor: "text-zinc-800",
      mode: "vertical",
    },
  ];

  return (
    <section id="features">
      <div className="wrapper flex flex-col gap-y-16 md:gap-y-40  mb-8 md:pb-24">
        {data.map((item, i) => (
          <FeatureListItem
            key={i}
            isImageLeft={i % 2 === 0}
            {...item}
            mode={"vertical"}
          />
        ))}
      </div>
      {/*<FeatureHighlights />*/}
      {/*<AlertMessage
        title="Pro Tip"
        description={
          "Every non-core feature in SupaSidebar can be enabled, disabled, or completely hidden from the UI. Create your own focus environment with only the tools you need."
        }
      />*/}
      {/*<SecondaryButton
        className="md:mt-5"
        text={<>Check all 15+ features</>}
        href="/features"
      />*/}
    </section>
  );
}

export default function LocaleLayout({ children, params }) {
  // This layout doesn't need to add html/body as it's already provided by the root layout
  // We'll just pass the children through
  return children;
}

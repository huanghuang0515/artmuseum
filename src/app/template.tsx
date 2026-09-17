/**
 * A template re-mounts on every navigation (unlike layout, which persists),
 * so wrapping page content here replays the `pageFadeIn` animation on each
 * route change — matching the prototype's per-navigation fade.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}

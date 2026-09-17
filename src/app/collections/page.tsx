import type { Metadata } from "next";
import { getCollections } from "@/lib/content";
import CollectionsView from "./CollectionsView";

export const metadata: Metadata = { title: "COLLECTIONS" };

export default function CollectionsPage() {
  const { artworks, pageCount } = getCollections();
  return <CollectionsView artworks={artworks} pageCount={pageCount} />;
}

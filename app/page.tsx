import { loadQuery } from "@/sanity/lib/store";
import { LandingPage } from "./components/landing-page";
import { SanityDocument } from "next-sanity";
import { LANDING_PAGE_QUERY } from "@/sanity/lib/queries";

export const Page = async () => {
  const initial = await loadQuery<SanityDocument>(LANDING_PAGE_QUERY);

  return (
    <LandingPage data={initial.data} />
  );
}

export default Page;

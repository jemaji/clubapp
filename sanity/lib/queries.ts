import { groq } from "next-sanity";

export const LANDING_PAGE_QUERY = groq`*[_type == "landingPage"][0]`;

import { SanityDocument } from "next-sanity";
import Image from "next/image";

interface LandingPageProps {
  data: SanityDocument;
}

export const LandingPage = ({
  data,
}: LandingPageProps
): JSX.Element => {
  return <>
    <div className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1>{data.title}</h1>
    </div>
    <div className="w-full h-full">
      <Image
        className="w-full h-full"
        width={64}
        height={64}
        src={data.mainImage.image}
        alt={data.mainImage.title}
      />
    </div>
  </>;
}

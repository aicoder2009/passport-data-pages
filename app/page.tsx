import Playground from "@/components/playground";
import { generateDataPage } from "@/lib/generate-data-page";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Home() {
  const defaultImageRes: ImageResponse = await generateDataPage({
    passportNumber: 0,
    surname: "Appleseed",
    firstName: "Jonny",
    dateOfBirth: new Date("06 Apr 1200"),
    dateOfIssue: new Date(),
    placeOfOrigin: "The Canyon",
  });
  const defaultImageBlob = await defaultImageRes.blob();
  const defaultImageBuffer = Buffer.from(await defaultImageBlob.arrayBuffer());
  const defaultImageUrl =
    "data:image/png;base64," + defaultImageBuffer.toString("base64");

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-24 p-24">
      <h1 className="font-bold text-amber-400 text-6xl">Passport Data Pages</h1>
      <Playground defaultImageUrl={defaultImageUrl} />
    </main>
  );
}

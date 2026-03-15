import { Metadata } from "next";

export const generateMetadata = ({
  title = `Tender`,
  description = `AI-powered tendering automation platform for modern organizations`,
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/icons/icon.svg",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/icons/icon.svg",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  ...(noIndex && { robots: { index: false, follow: false } }),
});

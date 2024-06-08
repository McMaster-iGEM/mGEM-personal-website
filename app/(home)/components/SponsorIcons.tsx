import { HoverEffect } from "./ui/card-hover-effect";

export function SponsorIcons() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={sponsors} />
    </div>
  );
}
export const sponsors = [
  {
    title: "Company Name",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "Company Name",
    link: "",
    icon: "/MGEM-Logo.png"
  }
];

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
    title: "McMaster University Biochemistry & Biomedical Sciences",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Office of the President",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Alumni",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Office of the Provost",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Health Sciences",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Science",
    link: "",
    icon: "/MGEM-Logo.png"
  },
  {
    title: "McMaster University Engineering",
    link: "",
    icon: "/MGEM-Logo.png"
  },
];

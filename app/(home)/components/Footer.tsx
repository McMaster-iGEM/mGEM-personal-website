import { Typography } from "@material-tailwind/react";
import { SiGmail, SiInstagram } from "react-icons/si";

export default function Footer() {

  return (
    <footer className="w-full bg-white p-8 py-10 mt-10">
      <hr className="my-8 border-blue-gray-50" />
      <h1 color="blue-gray" className="text-center font-normal">
        &copy; 2024 McMaster iGEM
      </h1>
    </footer>
  );
}
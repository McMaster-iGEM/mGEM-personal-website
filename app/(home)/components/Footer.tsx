import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-col justify-center items-center py-4">
        <h1 color="blue-gray" className="text-center font-normal">
          &copy; 2024 McMaster iGEM
        </h1>
        <a href="https://github.com/vanessa-laii/mGEM-personal-website" aria-label="Github">
          <SiGithub className="w-5 h-5 hover:scale-125 transition-all mt-2" />
        </a>
      </div>
    </footer>
  );
}

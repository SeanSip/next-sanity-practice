import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects()
  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">I&apos;m Sean!</span></h1>
      <p className="mt-3 text-xl text-gray-600">Hello everyone! Check out my projects!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link

            href={`/projects/${project.slug}`}
            key={project._id} className="py-5 px-2 border-2 border-gray-500 rounded-lg flex flex-col justify-evenly w-fit h-96 hover:scale-105 hover:border-blue-500 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="object-cover rounded-lg border-gray-500 min-h-full border-2 mb-2"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">{project.name}</div>

          </Link>
        ))}
      </div>
    </div>
  );
}


import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";

export default function Work() {
  const projects = [
    {
      title: "Audible Safety",
      image: "/media/projects/audible-safety.jpg",
      metadata: "Interactive Installation • 2025",
    },
    {
      title: "The Feedback Loop",
      image: "/media/projects/feedback-loop.jpg",
      metadata: "Generative System • 2024",
    },
    {
      title: "Memory Matrix",
      image: "/media/projects/memory-matrix.jpg",
      metadata: "Spatial Experience • 2025",
    },
  ];

  return (
    <main className="min-h-screen pb-64">
      <StandardHeader>
        selected interventions
      </StandardHeader>
      
      <PageLayout>
        <section className="py-40 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative w-full mb-4" style={{ height: "400px" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-[14px] font-bold text-inky pt-12" style={{ opacity: 0.6 }}>
                  {project.metadata}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </main>
  );
}

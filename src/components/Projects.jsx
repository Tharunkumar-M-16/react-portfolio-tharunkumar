import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hand Sign Recognition System",
      description:
        "Developed a hand sign recognition system using Python and OpenCV to detect hand gestures from live video input.",
      tech: "Python, OpenCV",
      category: "Major Project",
      year: "2025",
      github: "https://github.com/Tharunkumar-M-16/PRODIGY_ML_04"
    },
    {
      id: 2,
      title: "Todo App",
      description:
        "A React-based task management app allowing users to add, delete, and manage tasks using state.",
      tech: "React, JavaScript, CSS",
      category: "Frontend Project"
    },
    {
      id: 3,
      title: "Counter App",
      description:
        "A simple React app to understand state management and event handling.",
      tech: "React, JavaScript",
      category: "Practice Project"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </section>
  );
}

export default Projects;



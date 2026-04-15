import "./project.css";
import Card from "./card/card";
import portfolio from "../../assets/portifolio.png";

const projects = [
  {
    title: "Portfólio",
    desc: "Meu site pessoal feito com React.",
    tags: ["React", "CSS"],
    image: portfolio,
    links: [
      { label: "Vercel", url: "https://portifolio-xi-one-61.vercel.app" },
      { label: "GitHub", url: "https://github.com/gubastos04/Portifolio" },
    ],
  },
];

function Project() {
  return (
    <section className="project">
      <div className="section-header">
        <h1>
          <span className="hash">#</span>PROJETOS
        </h1>
        <div className="lines" />
      </div>
      <div className="container-cards">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Project;

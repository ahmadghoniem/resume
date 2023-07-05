import {
  Certificates,
  Contact,
  Education,
  Languages,
  Skills,
} from "./Sections";

function Aside() {
  return (
    <aside className="w-2/5 bg-slate-100 px-2 py-4">
      <Contact />
      <Languages />
      <Education />
      <Skills />
      <Certificates />
    </aside>
  );
}

export default Aside;

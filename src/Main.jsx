import { Experience, Summary, Projects } from "./Sections";
const Main = () => {
  return (
    <main className="px-2 py-4">
      <Summary />
      <Experience />
      <Projects />
    </main>
  );
};

export default Main;

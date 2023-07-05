const Section = ({ children, id }) => (
  <section
    id={id}
    className="border-b-[1px] border-neutral-800/20 p-2 last:border-b-0"
  >
    {children}
  </section>
);

export default Section;

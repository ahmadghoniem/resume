const Link = ({ href, children: content }) => (
  <a
    target="_blank"
    rel="noreferrer"
    className="block w-fit text-sky-600"
    href={href}
  >
    {content}
  </a>
);

export default Link;

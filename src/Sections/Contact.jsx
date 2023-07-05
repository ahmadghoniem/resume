import { Link, Text, Section } from "../Components";

const Contact = () => (
  <Section>
    <h1 className="mb-2 font-domine text-3xl font-bold capitalize">
      ahmad ibrahim amer ghoniem
    </h1>
    <h1 className="mb-2 text-xl font-normal capitalize italic">
      Front End developer.
    </h1>
    <Text>
      <i className="fa fa-map-marker w-6 text-black"></i>Alexandria, Egypt
      (GMT+2)
    </Text>

    <Text>
      <i className="fa fa-phone w-6 text-black"></i>+20 1277891627
      {/*       <Link href="tel:+20%20127%20789%201627">
      </Link> */}
    </Text>

    <Text>
      <Link href="mailto:ahmadghoniem@outlook.com">
        <i className="fa fa-envelope w-6 text-black"></i>
        ahmadghoniem@outlook.com
      </Link>
    </Text>

    <Text>
      <Link href="https://ahmadghoniem.me/">
        <i className="fa fa-globe w-6 text-black"></i>ahmadghoniem.me
      </Link>
    </Text>

    <Text>
      <Link href="https://github.com/ahmadghoniem">
        <i className="fa fa-github w-6 text-black"></i>
        ahmadghoniem
      </Link>
    </Text>

    <Text>
      <Link href="https://www.linkedin.com/in/ahmad-ghoniem/">
        <i className="fa fa-linkedin w-6 text-black"></i>
        ahmad-ghoniem
      </Link>
    </Text>
  </Section>
);

export default Contact;

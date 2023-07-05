import { Heading, Section, Small, Text, Title } from "../Components";

const Skills = () => (
  <Section id="Skills">
    <Title value="Skills" />
    <div className="flex flex-col gap-2">
      <div id="markup-languages">
        <Heading value="Markup languages" />
        <Text>
          <i className="fa fa-angle-right mr-1" />
          HTML 5
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          CSS 3
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Markdown
        </Text>
      </div>

      <div id="programming-languages">
        <Heading value="programming languages" />
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Javascript
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Typescript
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Python
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />C
        </Text>
      </div>

      <div id="Frameworks">
        <Heading value="Frameworks & Libraries" />
        <Text>
          <i className="fa fa-angle-right mr-1" />
          React Js
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Bootstrap
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          TailwindCSS
          <Small className="block text-sm text-slate-700">
            Utility-first CSS framework
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          RadixUI
          <Small className="block text-sm text-slate-700">
            Accessible Components library
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Redux & Redux Toolkit
          <Small className="block text-sm text-slate-700">
            State managment Library
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          React Router 6
          <Small className="block text-sm text-slate-700">
            SPA Client Side Routing library
          </Small>
        </Text>
      </div>

      <div id="Tools &amp; Technologies">
        <Heading value="Tools & Technologies" />
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Visual Studio Code
          <Small className="block text-sm text-slate-700">
            rocking Tokyo Night storm theme
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Git
          <Small className="block text-sm text-slate-700">
            Version Control
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Github
          <Small className="block text-sm text-slate-700">
            Git repositories hosting
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Vite
          <Small className="block text-sm text-slate-700">
            Blazing fast dev environment
          </Small>
        </Text>
        <Text>
          <i className="fa fa-angle-right mr-1" />
          Figma
          <Small className="block text-sm text-slate-700">
            Design tool for frontend developers
          </Small>
        </Text>
      </div>

      <div id="Testing">
        <Heading value="Testing" />
        <Text>
          <Text>
            <i className="fa fa-angle-right mr-1" />
            Vitest
            <Small className="block text-sm text-slate-700">
              Vite-native unit test framework
            </Small>
          </Text>
          <i className="fa fa-angle-right mr-1" />
          Jest
          <Small className="block text-sm text-slate-700">
            JavaScript testing framework
          </Small>
        </Text>
      </div>
    </div>
  </Section>
);

export default Skills;

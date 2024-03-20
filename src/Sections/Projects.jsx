import { Link, Section, Title } from "../Components"

const Projects = () => (
  <Section id="Projects">
    <Title value="Projects" />
    <div className="space-y-2">
      <div id="Serial-blocks">
        <Link href="https://github.com/Serialblocks/Serialblocks-app">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> Serial-blocks
          </h4>
        </Link>
        <p className="mb-2 text-base/6">
          Serialblocks is an opens-source project that combines web development
          and embedded systems <br /> Communicate with a real hardware like an
          arduino through an interactive web based interface <br /> whether
          connected to your machine , a machine on the same network or even a
          remote machine!.
        </p>
        <ul className="list-inside list-disc">
          <li>
            Utilized ShadcnUI component library to create an accessible and
            user-friendly website.
          </li>
          <li>
            Utilized Zustand as a statemangment library , ZOD for form
            validation.
          </li>
          <li>
            Utilized socket.io for seamless websocket communication between the
            nodejs server running the node serialPort package and the client
            (react-based interface).
          </li>
          <li>Utlizied apexcharts for accessible easy to use charts.</li>
        </ul>
      </div>
      <div id="digiabdelartstudio">
        <Link href="https://github.com/Serialblocks/Serialblocks-app">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> digiabdelart studio
          </h4>
        </Link>
        <p className="mb-2 text-base/6">
          Digiabdel art is a freelance project made for a client living in UK.
          showcasing his art works to his clients built in astro, tailwind and
          sanity studio.
        </p>
        <ul className="list-inside list-disc">
          <li>Utilized grids for arranging the content</li>
          <li>ultized sanity as a headless Content mangment system.</li>
          <li>
            Utilized view tranisiton with astro to create an SPA like for a MPA.
          </li>
          <li>SSG </li>
        </ul>
      </div>
      <div id="Portfolio">
        <Link href="https://ahmadghoniem.me/">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> Portfolio
          </h4>
        </Link>
        <ul className="list-inside list-disc">
          <li>
            Utilized RadixUI headless components to create an accessible and
            user-friendly website.
          </li>
          <li>
            Utilized Tailwind CSS to maintain UI code in one place also added
            support for dark theme and responsive layout using dark and media
            queries modifiers.
          </li>
          <li>
            Developed useScrollSpy custom hook to highlight navigation based on
            scroll, a better alternative to intersection observer API.
          </li>
          <li>
            Implemented a flashlight effect on hover for the cards components
            using vanilla JavaScript and CSS variables.
          </li>
          <li>
            Made it easier for potential clients and recruiters to contact me
            either by an email using emailJS or by booking my calendar with a
            cal.com embed.
          </li>
        </ul>
      </div>

      <div id="VansLife">
        <Link href="https://vanslife.ahmadghoniem.me/">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> VansLife
          </h4>
        </Link>
        <ul className="list-inside list-disc">
          <li>
            learned about regular Links and navLink, how to add a Layout, layout
            and Index routes, relative paths and navigation and location.
          </li>
          <li>
            learned about the different types of routes, including those that
            support the new Data APIs and those that don&apos;t, as well as how
            to protect them.
          </li>

          <li>
            Utilized the new Loaders and Actions data APIs and deferred loading
            the component while awaiting the data using defer() method and Await
            component.
          </li>
          <li>
            utilized React v18 suspense to display a fallback skeleton theme
            till the component loads.
          </li>
          <li>
            used mirageJS as an API mocking library and finally switched to
            firebase.
          </li>
        </ul>
      </div>

      <div id="Tenzies">
        <Link href="http://tenzies.ahmadghoniem.me/">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> Tenzies
          </h4>
        </Link>
        <p className="mb-2 text-base/6">
          Tenzies is a fast-paced dice game that challenges participants to
          achieve 'Tenzies' by rolling all six dice with the same numbers.
        </p>
        <ul className="list-inside list-disc">
          <li>
            Managed to add a timer to the game so it can be used later to sort
            the top 10 winners with or without the roll number as well.
          </li>
          <li>
            Added skeleton loading to mimic the structure and the look of the
            leader boards.
          </li>
          <li>
            Used pantry cloud a Free Cloud JSON Storage API to fetch and update
            the players data.
          </li>
          <li>
            A total of 142 plays and 40+ different players who played the game
            more than once.
          </li>
        </ul>
      </div>
    </div>
  </Section>
)

export default Projects

{
  /* 
      <div id="Quizzical">
        <Link href="http://quizzical.ahmadghoniem.me/">
          <h4 className="mb-2 mt-1 text-lg font-medium">
            <i className="fa fa-link fa-sm"></i> Quizzical
          </h4>
        </Link>
        <p className="mb-2 text-base/6">
          Quizzical App let&apos;s you unleash you inner nerd by being able to
          choose from different question categories from the OpenTrivia DB.
        </p>
        <ul className="list-inside list-disc">
          <li>
            added the support of choosing the number of questions, difficulty
            and the category amongst the available ones.
          </li>
          <li>
            Added the option for the user to choose between answering all the
            questions before revealing the answers or not.
          </li>
          <li>
            Added the ability of starring certain question so the user can have
            a quiz solely on them.
          </li>
          <li>
            Added skeleton loading to mimic the structure of the questions being
            loaded.
          </li>
        </ul>
      </div> */
}

{
  /* <div id="Chesters">
<Link href="http://Chesters.ahmadghoniem.me/">
  <h4 className="mb-2 mt-1 text-lg font-medium">
    <i className="fa fa-link fa-sm"></i> Chesters
  </h4>
</Link>
<p className="mb-2 text-base/6">
  Chesters is a community driven NFT project where you get to pick which
  NFTs will be purchased with the project&apos;s funds and airdropped
  back to holders from Top tier projects to small ones.
</p>
<ul className="list-inside list-disc">
  <li>
    Gathered NFT Mint IDs for CyberLinx (Solana NFT project) using their
    creator address with cryptostraps tools and used a sample for a
    holder&apos;s snapshot.
  </li>
  <li>
    Fetched an object with holders, mints and amounts for cyberlinx
    project using their sample data.
  </li>
  <li>
    Used MoralisAPI to fetch the NFT metadata using it&apos;s token
    address and display it to the user.
  </li>
  <li>
    Used Alchemy and SolScan APIs to get Solana price, price change in
    the last 24hrs and calculated Transaction Per Second using a recent
    performance sample.
  </li>
</ul>
</div> */
}

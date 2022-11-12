const configs = {
  highlight: {
    section1: true,
    section2: false,
    section3: false,
    section4: false,
  },
  normal: {
    section1: true,
    section2: false,
    section3: false,
    section4: false,
  },
};

export const App = () => (
    const config = configs['normal'];

  <>
    {config.section1 && <Section1  /> }
    {config.section2 && <Section2  /> }
    {config.section3 && <Section3  /> }
    {config.section4 && <Section4  /> }
  </>
);

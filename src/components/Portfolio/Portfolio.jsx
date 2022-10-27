import Heading from '../UI/Heading';
import Marquee from './Marquee';
import './Portfolio.scss';
import PortfolioProject from './PortfolioProject';

import personalBudget from '../../assets/personal_budget.png';
import personalBudget2 from '../../assets/vets.png';
import personalBudget3 from '../../assets/personal_budget_3.png';
import budgetApp from '../../assets/budget_1.png';
import budgetApp2 from '../../assets/instagramHD.png';

const projects = [
  {
    title: 'Budget App',
    img: budgetApp,
    description: 'Full Stack',
    link: 'https://serene-badlands-44706.herokuapp.com/',
  },
  {
    title: 'Vet clinic database',
    img: personalBudget2,
    description: 'Back end',
    link: 'https://github.com/Rustamxon7/Vet-clinic-database',
  },
  {
    title: 'Personal budget planner',
    img: personalBudget,
    description: 'Full Stack',
    link: 'https://personal-budget-ui.netlify.app/',
  },
  {
    title: 'Instagram clone',
    img: budgetApp2,
    description: 'Full Stack',
    link: 'https://github.com/Rustamxon7/Instagram-Clone-Rails',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <Heading>Projects</Heading>
      <div className="portfolio-projects">
        {projects.map((project, index) => {
          return (
            <PortfolioProject
              key={index}
              id={index}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

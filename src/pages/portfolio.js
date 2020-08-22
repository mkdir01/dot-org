import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import ImagePlaceholder from '../images/image-placeholder.png'

import PortfolioCard from '../components/shared/portfolio/PortfolioCard'

const PortfolioPage = () => (
	<Layout>
      <div className="Hero BackgroundImage">
        <div className="Hero__Contents">
          <h1>
            Portfolio
          </h1>
				  <p>
				  	Our Trophy Shelf of Achievements from Past Raids
				  </p>
        </div>
        <div className="HeroBorder" />
      </div>
      <div className="Column">
        <div className="Portfolio__Cards">
	        <PortfolioCard
						projectName="Tellor"
						projectTags={['Design', 'Full-Stack Dev']}
						link="/case-studies/tellor"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Minion"
						projectTags={['UX/UI', 'Code Audit', 'Full-stack Dev']}
						link="/case-studies/minion"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Stake on Me"
						projectTags={['UI/UX', 'Copywriting', 'Full-stack Dev']}
						link="/case-studies/stakeonme"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Wrapeth"
						projectTags={['UI/UX', 'Visual Design', 'Full-stack Dev']}
						link="/case-studies/wrapeth"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Aragon"
						projectTags={['UI Design', 'Frontend Dev', 'Subgraph Dev']}
						link="/case-studies/aragon"
						image={ImagePlaceholder}
					/>
        </div>
      </div>
    </Layout>
)

export default PortfolioPage

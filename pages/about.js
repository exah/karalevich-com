import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Meta, Nav, Intro, Layout, GlobalBg, HelperLayout } from '../components/bridge'
import { Row } from '../components/ContentViews'

export default function About(props) {
  return (
    <Theme theme='white'>
    	<Meta title='Maksim (About)' />
    	<GlobalBg bg='white' />
      <Nav />
		  
		  <Layout
				width='100%'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 2
				}}
			>

				<Text
					variant='p'
					gridColumn={{min: '1/-2', sm: '1/4'}}
					pt={5}
					pl={{min: 1, sm: 2}}
				>
					<Text as='span' variant='x' color='tinted' pr={{min: 1, sm: 2}}>(Contact)</Text>
					<Link href='mailto:m@karalevich.com' nextAs=''>m@karalevich.com</Link>, <Link href='https://twitter.com/mkaralevich' nextAs=''>twitter</Link>, <Link href='https://www.are.na/maksim-karalevich/index' nextAs=''>arena</Link>, <Link href='https://github.com/mkaralevich/' nextAs=''>github</Link>, <Link href='https://www.linkedin.com/in/maksimkaralevich/' nextAs=''>linkedin</Link>.<br />Los Angeles, California
				</Text>
			
				<Text
					variant='p'
					gridColumn={{min: '1/-2', sm: '5/9'}}
					pt={{min: 1, sm: 5}}
					pl={{min: 1, sm: 2}}
				>
					<Text as='span' variant='x' color='tinted' pr={{min: 1, sm: 2}}>(Focus & Experience)</Text>
					10 years of multidisciplinary experience in design with primary focus on digital interactions. My interests lie in the intersection between environment, education, and systems. I prototype using Figma, After Effects, Cinema 4D, JavaScript.
				</Text>
			
			</Layout>


			<Layout gridColumn='1/-1' mb={{min: 4, sm: 6}} pt={{min: '80vh', sm: '64vh'}}>

				<Row
					href='#'
					title='Where'
					desc='What'
					tag='When'
				/>

			</Layout>
			<Layout as='ul' gridColumn='1/-1' mb={{min: 4, sm: 6}}>

			<Row
				title='B-Reel'
				desc='Sr. Designer'
				tag='2019–present'
			/>

			<Row
				title='Rill—Common Connections'
				desc='Everything'
				tag='2019–present'
			/>

			<Row
				title='Four Flowers School'
				desc='Design'
				tag='2019–present'
			/>

			<Row
				title='Perfect Number'
				desc='Consultant'
				tag='2019'
			/>

			<Row
				title='Xsolla, Inc'
				desc='Consultant'
				tag='2019'
			/>

			<Row
				title='Strelka Institute'
				desc='Digital Art Director'
				tag='2015–2018'
			/>

			<Row
				title='ONY Agency'
				desc='Digital Designer'
				tag='2014'
			/>

			<Row
				title='Agente Studio'
				desc='UX/UI Designer'
				tag='2013'
			/>

			<Row
				title='Freelance'
				desc='Design'
				tag='2010–present'
			/>

		</Layout>
			

  </Theme>
  )
}
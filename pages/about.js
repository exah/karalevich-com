import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Meta, Nav, Intro, Layout, GlobalBg } from '../components/bridge'
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
				}}
			>

					<Text
						variant='p'
						gridColumn={{min: '1/-2', sm: '1/4'}}
						pt={{min: 4, sm: 5}}
						pl={{min: 1, sm: 2}}
					>
						<Text as='span' variant='x' color='tinted' pr={2}>(Contact)</Text>
						m@karalevich.com, twitter, arena, github, linkedIn, Los Angeles, California
					</Text>
				
					<Text
						variant='p'
						gridColumn={{min: '1/-2', sm: '5/9'}}
						pt={{min: 1, sm: 5}}
						pl={{min: 1, sm: 2}}
					>
						<Text as='span' variant='x' color='tinted' pr={2}>(Focus & Experience)</Text>
						10 years of multidisciplinary experience in design with primary focus on digital interactions. My interests lie in the intersection between environment, systems, and education. I prototype using Figma, After Effects, Cinema 4D, React.
					</Text>
			
			</Layout>
			<Flex pt='56vh' pb={{min: 4, sm: 6}} width='100%'>

				<Layout gridColumn='1/-1' mb={{min: 4, sm: 6}}>

					<Row
						href='#'
						title='Subject'
						desc='Press'
						tag='Type'
					/>

				</Layout>
				<Layout gridColumn='1/-1' mb={{min: 4, sm: 6}}>

				<Row
					href='#'
					title='The New Normal'
					desc='SiteInspire, Hover States'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Hybrid Urbanism'
					desc='SiteInspire, Hover States'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Hybrid Urbanism: Final Projects'
					desc='SiteInspire'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Advanced Urban Design'
					desc='SiteInspire, MinimalMonday'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Disrupt the(m)all'
					desc='Hallointer, Hover States'
					tag='Feature'
				/>

				<Row
					href='#'
					title='On and On'
					desc='Calvert Journal'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Apply to Strelka'
					desc='SiteInspire, HoverStates'
					tag='Feature'
				/>

				<Row
					href='#'
					title='Strelka Summer 2016'
					desc='European Design'
					tag='Award'
				/>

				<Row
					href='#'
					title='Norilsk Film'
					desc='Awwwards Site of the Day, Red Dot Award'
					tag='Award'
				/>

				<Row
					href='#'
					title='Me'
					desc='Spotlight: Maksim Karalevich, HOW Design, The New Normal Design, Strelka Magazine, Lecturer at Design Madison' 
					tag='Interview'
				/>
			</Layout>
			
			</Flex>
    </Theme>
  )
}
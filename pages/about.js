import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Nav, Intro, SelectWork, Layout, GlobalBg } from '../components/bridge'

const ListItem = props =>

	<Layout
		as='li' gridColumn='1/-1' py={1}
		sx={{':hover': {opacity: '.64'}}}
	>
		<Text
			gridColumn={{min: '1/-2', sm: '1/5'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='x'
			color={props.color}
		>
			{props.subject}
		</Text>
		<Text
			gridColumn={{min: '1/-2', sm: '5/10'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='x'
		>
			{props.press}
		</Text>
		<Text
			gridColumn={{min: '1/-2', sm: '10/-1'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='c'
		>
			{props.type}
		</Text>
	</Layout>

export default function About(props) {
  return (
    <Theme theme='white'>
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
					>
						<Text as='span' variant='x' color='tinted' pr={2}>(Contact)</Text>
						m@karalevich.com, twitter, arena, github, linkedIn, Los Angeles, California
					</Text>
				
					<Text
						variant='p'
						gridColumn={{min: '1/-2', sm: '5/9'}}
						pt={{min: 1, sm: 5}}
					>
						<Text as='span' variant='x' color='tinted' pr={2}>(Focus & Experience)</Text>
						10 years of multidisciplinary experience in design with primary focus on digital interactions. My interests lie in the intersection between environment, systems, and education. I prototype using Figma, After Effects, Cinema4D, React.
					</Text>
			
			</Layout>
			<Flex pt='56vh' pb={{min: 4, sm: 6}} width='100%'>

				<Layout gridColumn='1/-1' mb={{min: 4, sm: 6}}>

					<ListItem
						subject='Subject'
						press='Press'
						type='Type'
					/>

				</Layout>

				<ListItem
					subject='The New Normal'
					press='SiteInspire, Hover States'
					type='Feature'
				/>

				<ListItem
					subject='Hybrid Urbanism'
					press='SiteInspire, Hover States'
					type='Feature'
				/>

				<ListItem
					subject='Hybrid Urbanism: Final Projects'
					press='SiteInspire'
					type='Feature'
				/>

				<ListItem
					subject='Advanced Urban Design'
					press='SiteInspire, MinimalMonday'
					type='Feature'
				/>

				<ListItem
					subject='Disrupt the(m)all'
					press='Hallointer, Hover States'
					type='Feature'
				/>

				<ListItem
					subject='On and On'
					press='Calvert Journal'
					type='Feature'
				/>

				<ListItem
					subject='Apply to Strelka'
					press='SiteInspire, HoverStates'
					type='Feature'
				/>

				<ListItem
					subject='Apply to Strelka'
					press='SiteInspire, HoverStates'
					type='Feature'
				/>

				<ListItem
					subject='Strelka Summer 2016'
					press='European Design'
					type='Award'
				/>

				<ListItem
					subject='Norilsk Film'
					press='Awwwards Site of the Day, Red Dot Award'
					type='Award'
				/>

				<ListItem
					subject='Apply to Strelka'
					press='SiteInspire, HoverStates'
					type='Feature'
				/>

				<ListItem
					subject='Me'
					press='Spotlight: Maksim Karalevich, HOW Design, The New Normal Design, Strelka Magazine, Lecturer at Design Madison' 
					type='Interview'
				/>
			
			</Flex>
    </Theme>
  )
}
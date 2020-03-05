import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Nav, Intro, SelectWork, Layout, GlobalBg } from '../components/bridge'

const ListItem = props =>
	<Layout
		as='ul' gridColumn='1/-1' py={1}
		sx={{':hover': {opacity: '.64'}}}
	>
		<Text as='li' variant='x' gridColumn='1/5'>{props.subject}</Text>
		<Text as='li' variant='x' gridColumn='5/8'>
			{props.press}
		</Text>
		<Text as='li' variant='x' gridColumn='8/-1'>{props.type}</Text>
	</Layout>

export default function About(props) {
  return (
    <Theme theme='palegrey'>
    	<GlobalBg bg='palegrey' />
      <Nav />
		  <Layout
				px={2}
				width='100%'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>

					<Text variant='p' gridColumn='1/4' pt={5}>
						<Text as='span' variant='x' color='tinted' pr={2}>(Contact)</Text>
						maksim@karalevich.com, twitter, arena, github, linkedIn, Los Angeles, California
					</Text>
				
					<Text variant='p' gridColumn='5/9' pt={5}>
						<Text as='span' variant='x' color='tinted' pr={2}>(Focus & Experience)</Text>
						10 years of multidisciplinary experience in design with primary focus on digital interactions. My interests lie in the intersection between environment, systems, and education. I prototype using Figma, After Effects, Cinema4D, React.
					</Text>
			
			</Layout>
			<Flex
				pt='56vh'
				pb={6}
				width='100%'
				px={2}
			>
			
				<Layout as='ul' gridColumn='1/-1' mb={6}>
					<Text as='li' variant='x' gridColumn='1/5'>Subject</Text>
					<Text as='li' variant='x' gridColumn='5/8'>Press</Text>
					<Text as='li' variant='x' gridColumn='8/-1'>Type</Text>
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
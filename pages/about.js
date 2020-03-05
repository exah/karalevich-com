import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Nav, Intro, SelectWork, Layout } from '../components/bridge'

export default function About(props) {
  return (
    <Theme>
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
					<Text as='li' variant='x' gridColumn='5/9'>Press</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Type</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>The New Normal</Text>
					<Text as='li' variant='x' gridColumn='5/9'>SiteInspire<br />
																										Hover States</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Hybrid Urbanism</Text>
					<Text as='li' variant='x' gridColumn='5/9'>SiteInspire<br />
																										Hover States</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Hybrid Urbanism: Final Projects</Text>
					<Text as='li' variant='x' gridColumn='5/9'>SiteInspire</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Advanced Urban Design</Text>
					<Text as='li' variant='x' gridColumn='5/9'>SiteInspire<br />
																										MinimalMonday</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Disrupt the(m)all</Text>
					<Text as='li' variant='x' gridColumn='5/9'>Hallointer<br />
																										Hover States</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>On and On</Text>
					<Text as='li' variant='x' gridColumn='5/9'>Calvert Journal</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Apply to Strelka</Text>
					<Text as='li' variant='x' gridColumn='5/9'>SiteInspire<br />
																										HoverStates</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Feature</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Strelka Summer 2016</Text>
					<Text as='li' variant='x' gridColumn='5/9'>European Design</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Award</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Norilsk Film</Text>
					<Text as='li' variant='x' gridColumn='5/9'>Awwwards Site of the Day<br />
																										Red Dot Award</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Award</Text>
				</Layout>

				<Layout as='ul' gridColumn='1/-1' mb={2}>
					<Text as='li' variant='x' gridColumn='1/5'>Me</Text>
					<Text as='li' variant='x' gridColumn='5/9'>Spotlight: Maksim Karalevich, HOW Design<br />
																										The New Normal Design, Strelka Magazine<br />
																										Lecturer at Design Madison</Text>
					<Text as='li' variant='x' gridColumn='9/-1'>Interview</Text>
				</Layout>
			
			</Flex>
    </Theme>
  )
}
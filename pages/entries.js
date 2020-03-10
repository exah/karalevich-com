import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Meta, Nav, Intro, Layout, GlobalBg } from '../components/bridge'
import { Row } from '../components/ContentViews'

export default function Entries(props) {


	const List = props.entries.map(entry => {
		const meta = entry.document.data
		console.log(meta)
		return (
		<Row
			key={meta.title}
			title={meta.title}
			desc={props.content}
			tag={meta.tags}
			color={meta.color}
		/>
		)
	})


  return (
    <Theme theme='white'>
    	<Meta title='Maksim (Entries)' />
    	<GlobalBg bg='white' />
      <Nav />

			<Flex as='ul' pt='56vh' pb={{min: 4, sm: 6}} width='100%'>
			
				<Layout gridColumn='1/-1' mb={6}>
					<Row title='Title' desc='Body' tag='Tags' />
				</Layout>

				{List}				

			</Flex>
    
    </Theme>
  )
}

Entries.getInitialProps = async () => {
  const entries = (context => {
    const keys = context.keys()
    const values = keys.map(context)


    
    const data = keys.map((key, index) => {
      const slug = key.split('/')[1]
      const value = values[index]
      const document = matter(value.default)

      return {
        document,
        slug,
      }
    })
    return data
  })(require.context('../public/entries', true, /\.md$/))

  return { entries }
}
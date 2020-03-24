import matter from 'gray-matter'

const PROJECTS = require.context('../public/projects', true, /\.md$/).keys()

export const getProject = slug =>
    import(`../public/projects/${slug}/readme.md`).then(module =>
        matter(module.default)
    )

export const getAllProjects = () =>
    Promise.all(
        PROJECTS.map(async key => {
            const slug = key.split('/')[1]
            const document = await getProject(slug)

            return {
                slug,
                document,
            }
        })
    )

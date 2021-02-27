import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPosts() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames.map(name => {
        const id = name.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    // Sort posts by date
    return allPosts.sort((a, b) => a.date < b.date ? 1 : -1)
}

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(name => ({
        params: {
            id: name.replace(/\.md$/, '')
        }
    }))
}

export function getPost(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
        id,
        ...matterResult.data
    }
}
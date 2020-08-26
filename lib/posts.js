import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import remark from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'posts');

export function getPosts() {
    const filenames = fs.readdirSync(postDirectory);
    const allPostData = filenames.map( (filename) => {
        const id = filename.replace(/\.md$/, '')

        const fullPath = path.join(postDirectory, filename);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const postData = matter(fileContent);

        return {
            id,
            ...postData.data
        }
    })

    return allPostData.sort( (a,b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getPostIds() {
    const files = fs.readdirSync(postDirectory);

    return files.map( (file) => {
        return {
            params: {
                id: file.replace(/\.md$/, ''),
            }
        }
    })
}

export async function getPostData(id) {
    const filepath = path.join(postDirectory, `${id}.md`);
    const postContent = fs.readFileSync(filepath, 'utf-8');

    const postData = matter(postContent);

    const procData = await remark().use(html).process(postData.content);
    const procDataHtml = procData.toString();


    return {
        id,
        procDataHtml,
        ...postData.data,
    }
}
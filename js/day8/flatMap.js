// let person = {
//     name: "Hari",
//     programming: "Javascript"
// }

// console.log(person.programming)

const blogPosts = [
    {
        title: 'JavaScript Tips',
        tags: ['js', 'programming']
    },
    {
        title: 'React Guide',
        tags: ['react', 'frontend']
    },
    {
        title: 'MongoDB Tricks',
        tags: ['database', 'nosql']
    }
];

const allTags = blogPosts.flatMap(post => post.tags);
console.log(allTags);
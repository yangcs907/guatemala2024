// {
//     date: "",
//     title: "",
//     content: "",
//     images: {
//         src: "",
//         caption: "",
//     }
// }
const blogPosts = [
    {
        date: "September 7th 1875",
        title: "Lorem ipsum",
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        `,
        images: [
            {
                src: "thyStudents.jpg",
                caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
            },
            {
                src: "chrisHeadShot.jpg",
                caption: "Et harum quidem rerum facilis est et expedita distinctio"
            }
        ],
    },
    {
        date: "September 7th 1875",
        title: "Lorem ipsum",
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        `,
        images: [
            {
                src: "thyStudents.jpg",
                caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
            },
            {
                src: "chrisHeadShot.jpg",
                caption: "Et harum quidem rerum facilis est et expedita distinctio"
            }
        ],
    },
    {
        date: "September 8th 2065",
        title: "Lorem",
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        `,
        images: [
            {
                src: "thyStudents.jpg",
                caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
            },
            {
                src: "chrisHeadShot.jpg",
                caption: "Et harum quidem rerum facilis est et expedita distinctio"
            }
        ],
    }
];

const generateBlogPosts = () => {
    blogPosts.map(post => {
        const blogPost = document.createElement("div");
        blogPost.className = "blogPost";
        const blogDate = document.createElement("div");
        blogDate.className = "blogDate";
        blogDate.innerHTML = `<p>${post.date}</p>`;
        const blogTitle = document.createElement("div");
        blogTitle.className = "blogTitle";
        blogTitle.innerHTML = `<p>${post.title}</p>`;
        const blogContent = document.createElement("div");
        blogContent.className = "blogContent";
        blogContent.innerHTML = `<p>${post.content}</p>`;
        const blogImages = document.createElement("div");
        post.images.map(image => {
            const img = document.createElement("img");
            const caption = document.createElement("p");
            img.src = `./assets/images/blogImages/${image.src}`;
            caption.innerHTML = `${image.caption}`
            blogImages.append(img, caption);
        });
        const blogDivider = document.createElement("p");
        blogDivider.className = "blogDivider";
        blogDivider.innerHTML = "-------◆◆◆-------";
        blogImages.className = "blogImages";
        blogPost.append(blogDate, blogTitle, blogContent, blogImages, blogDivider);
        document.getElementById("blogContainer").prepend(blogPost);
    })
};

generateBlogPosts();
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
        date: "Wednesday, July 24th, 2024",
        dayNumber: "Day 1",
        title: "Arrival in Guatemala",
        content: `
            Thanks be to God that we experienced minimal difficulty in the boarding process.
            At the airport in Guatemala City, we met with Mr. Herman Alb, and were able to give
            him the medicine Mr. Thy brought.
            Although the trip from the airport to Escuintla was a journey for the ages, we were 
            able to stop by a local restaraunt Pollo Campero for a quick lunch; the Lord blessed 
            us with abundant time to familarize ourselves with both each other and our main 
            communication with the school, Sra. Kayla.
            Upon arrival at the Casa around seven o'clock, we were met with a warm dinner and 
            wonderful rooming.
        `,
        images: [
            {
                src: "day1.1.jpg",
                caption: "Nuestro grupo en el aeropuerto"
            },
            {
                src: "day1.2.jpg",
                caption: "Nosotros en la fila por seguridad"
            },
            {
                src: "day1.3.jpg",
                caption: "Almuerzo en Pollo Campero"
            },
            {
                src: "day1.4.jpg",
                caption: "Cena en la Casa"
            },
        ]
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
        blogTitle.innerHTML = `<p><span style="color:#4a86e8">${post.dayNumber}</span>: ${post.title}</p>`;
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

const generateEmpty = () => {
    const displayMessage = document.createElement("p");
    displayMessage.className = "displayMessage";
    displayMessage.innerHTML = "Check back shortly!";
    document.getElementById("blogContainer").append(displayMessage);
    document.getElementById("footer").style = "display: none";
}

generateBlogPosts();
// generateEmpty();
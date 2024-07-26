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
        signature: "Luisa + team",
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
    },
    {
        date: "Thursday, July 25th, 2024",
        dayNumber: "Day 2",
        title: "First Day at Maná de Vida!",
        content: `
            Praise the Lord for a successful first full day at Maná de Vida! We started off with a lovely 
            breakfast prepared by the staff, which was then followed by a presentation from Jose and Kayla, our
            primary coordinators. We learned about the history of Maná de Vida, and how it serves to spread God's Kingdom
            and provide a safe haven for many of the youth in Escuintla. Then, we headed towards the courtyard on
            campus where we were greeted by all of the students! It was truly a blessing as they each took turns giving us
            a hug and welcoming us into their community. It is not a stretch to say that we experienced more hugs this morning
            than any of us have experienced all year 😊. Afterwards, Yuchen helped teach a computer lab class, focusing on the
            basics of AWS cloud computing. Meanwhile, Albert, Chris, Joseph, and Luisa taught the eighth graders and the younger
            children through simple songs meant to help them learn English. Following the lessons, we led worship songs prior to 
            Pastor Nicholas' devotional on belonging, importance, and individuality in God's eyes. Again, the children gave us
            all hugs and we took pictures with the basketball boys championship team and the girls' soccer team. After lunch at
            the Casa, our team split into two groups for the home visits of the day; Albert, Chris, and Pastor Nicholas went to
            home of Caroline and her mother, Francesca, while Joseph, Luisa, Mr. Thy, and Yuchen went to Monica and Maria's
            house. We were blessed with the opportunity to hear about their testimonies and pray over them despite their dilapidated
            living conditions and their poor health. To end our group activities for the day, the Casa staff and Mr. Thy cooked
            a nice dinner for us, and lastly, we debriefed.
            <br></br>
            Overall, we are genuinely excited about being here and serving the students. We look forward to what the Lord has 
            planned for us to do tomorrow!
        `,
        signature: "Chris + Luisa + team",
        images: [
            {
                src: "day2.1.jpg",
                caption: "The beautiful campus of Maná de Vida"
            },
            {
                src: "day2.2.1.jpg",
                caption: "Students greeting our team"
            },
            {
                src: "day2.2.2.jpg",
                caption: "Students greeting our team"
            },
            {
                src: "day2.2.jpg",
                caption: "Yuchen leading a computer class"
            },
            {
                src: "day2.3.jpg",
                caption: "Yuchen helping a student in computer class"
            },
            {
                src: "day2.4.jpg",
                caption: "Chris demonstrating the 'thumbs up' from 'Making Melodies In My Heart'"
            },
            {
                src: "day2.5.jpg",
                caption: "(Left to Right) Chris, Albert, Joseph, and Luisa leading children in singing songs"
            },
            {
                src: "day2.6.jpg",
                caption: "(Left to Right) Luisa, Chris, and Joseph leading worship songs for the students for morning devotion"
            },
            {
                src: "day2.7.jpg",
                caption: "Pastor Nicholas giving a devotional to the students"
            },
            {
                src: "day2.8.jpg",
                caption: "Pastor Nicholas using props during his devotional"
            },
            {
                src: "day2.9.jpg",
                caption: "Escuintla sign while on the road to home visitations"
            },
            {
                src: "day2.10.jpg",
                caption: "Home visitations: Pastor Nicholas, Albert, and Chris visiting the home of Francesca (left middle) and her daughter Caroline (middle)"
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
        blogTitle.innerHTML = `<p><span style="color:#4a86e8; font-weight:bold;">${post.dayNumber}</span>: ${post.title}</p>`;
        const blogContent = document.createElement("div");
        blogContent.className = "blogContent";
        blogContent.innerHTML = `<p>${post.content}</p>`;
        const blogSignature = document.createElement("p");
        blogSignature.className = "blogSignature";
        blogSignature.innerHTML = `<p>- ${post.signature}</p>`;
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
        blogPost.append(blogDate, blogTitle, blogContent, blogSignature, blogImages, blogDivider);
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
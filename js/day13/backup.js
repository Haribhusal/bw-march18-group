const fetchNews = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

// // Display news items on the HTML page
// const displayNews = (newsItems) => {
//     const newsContainer = document.getElementById('news-container');
//     newsItems.forEach(item => {
//         const newsItem = document.createElement('div');
//         newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
//         newsContainer.appendChild(newsItem);
//     });
// };

// Handle the promise resolution and rejection
fetchNews()
    .then(newsItems => {
        console.log(newsItems)
        // displayNews(newsItems); // Display the fetched news items
    })
    .catch(error => {
        console.log(error)
    });
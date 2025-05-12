// Fetch news items from the API
const fetchNews = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Resolve with the fetched data
    } catch (error) {
        console.error('Error fetching news:', error); // Handle any errors
        throw error; // Re-throw the error for further handling if needed
    }
};

// Display news items on the HTML page
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
        console.error('Error in promise chain:', error); // Handle any errors from the promise chain
    });
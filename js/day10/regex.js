// const text = "Contact us at support@example.com or sales@example.org or bhusalhari89@gmail.com";
// const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g);
// console.log(emails); // ["support@example.com", "sales@example.org"]


// const password = "111";
// const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
// console.log(isValid); // true


// const html = "<div>Hello <strong>World</strong>!</div>";
// const plain = html.replace(/<[^>]+>/g, '');
// console.log(plain); // "Hello World!"


// const title = "10 Best Places to Visit in 2025!";
// const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
// console.log(slug); // "10-best-places-to-visit-in-2025"


const input = "9801234567";
const formatted = input.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
console.log(formatted); // (980) 123-4567
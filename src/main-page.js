export default function loadMain() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    //title
    const title = document.createElement("div");
    title.classList.add("content","title");
    title.innerHTML = `<div><h1>Beary's Breakfast Bar</h1></div>`;

    //info
    const info = document.createElement("div");
    info.classList.add('content', 'info', 'home');
    info.innerHTML = `<div><p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p><span>Goldilocks</span></div>`

    //hours
    const hours = document.createElement("div");
    hours.classList.add("content", "home", "hours");
    hours.innerHTML = `<div><h3>Hours</h3><p>Sunday: 8am - 8pm</p><p>Monday: 6am - 6pm</p><p>Tuesday: 6am - 6pm</p><p>Wednesday: 6am - 6pm</p><p>Thursday: 6am - 10pm</p><p>Friday: 6am - 10pm</p><p>Saturday: 8am - 10pm</p></div>`

    //location
    const location = document.createElement('div');
    location.classList.add("content", "home", "location");
    location.innerHTML = `<div><h3>Location</h3><p>123 Forest Drive, Forestville, Maine</p></div>`

    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(hours);
    content.appendChild(location);
}
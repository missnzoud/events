

const eventbrite = new EventBrite();
const ui = new UI();
//console.log(eventbrite);
// Listener for the submit button
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // get values from form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    console.log(eventName + ' : ' + category);
})
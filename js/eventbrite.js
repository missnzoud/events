class EventBrite {
 // Constructor when instanciate
 constructor() {
    this.auth_token = '3525E7NSSPB5WOOTO42V';
    
}
// Get the Events from API
async getCategoriesAPI() { 
 
    const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${ this.auth_token }`);

    //hold the response and then return as json
    const categories = await eventsResponse.json();

    return {
        categories
    } 
}

}
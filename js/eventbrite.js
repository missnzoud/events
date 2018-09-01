class EventBrite {
 // Constructor when instanciate
 constructor() {
    this.auth_token = '3525E7NSSPB5WOOTO42V';
    this.orderby = 'date';
    
}

 // Get the Events from API

 async queryAPI(eventName, category) {
    const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

    // Wait for response and return as json

    const events = await eventsResponse.json();

    return {
         events
    }
}

// Get the Events from API
async getCategoriesAPI() {                                                                                                                                                                                                                                                                                                                                                
    // Query the API
     const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

    //hold the response and then return as json
    const categories = await eventsResponse.json();

    return {
        categories
    } 
}

}
class UI {
    constructor(){
         // App inicialization
         this.init();
    }
    // Method when the app starts
    init(){
         // display categories in <select>
         this.printCategories();
    }
         // prints the categories
        printCategories() {
            const categoriesList = eventbrite.getCategoriesAPI()
            .then(categories => {
                 console.log(categories);
            })
        }

    }
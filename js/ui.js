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
                 //console.log(categories.categories.categories);
                 const categoriesList = categories.categories.categories;
                 const categoriesSelect = document.querySelector('#category');    
                 // Inserts categories into select
                 categoriesList.forEach(category => {
                      // Create the options
                      const option = document.createElement('option');
                      option.value = category.id;
                      option.appendChild(document.createTextNode(category.name));
                      categoriesSelect.appendChild(option);
                 })

            })
        }

    }
const settings = {
  "name": "winfield-eats",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Casual",
              "/category/Casual/"
            ],
            [
              "Coffee",
              "/category/Coffee/"
            ],
            [
              "Dining",
              "/category/Dining/"
            ],
            [
              "Fast Food",
              "/category/Fast-Food/"
            ],
            [
              "Food-Truck",
              "/category/Food-Truck"
            ], 
            [
              "Formal", 
              "/category/formal"
            ], 
            [
              "Vending", 
              "/category/vending"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://winfieldeats.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

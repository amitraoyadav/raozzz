import { BusinessWebsite } from "../types";

export interface SweetCoffeeCategory {
  id: string;
  title: string;
  itemsCount: number;
  items: {
    name: string;
    price: number;
    description: string;
    badge?: string;
  }[];
}

export const SWEET_COFFEE_CATEGORIES: SweetCoffeeCategory[] = [
  {
    "id": "tea",
    "title": "Tea",
    "itemsCount": 8,
    "items": [
      {
        "name": "Classic Tea",
        "price": 20,
        "description": "Freshly brewed milk tea with balanced sweetness—simple, comforting and made to order.",
        "badge": "Bestseller"
      },
      {
        "name": "Masala Tea",
        "price": 30,
        "description": "Fresh milk tea brewed with aromatic Indian spices for a warmer, fuller cup."
      },
      {
        "name": "Ginger Tea",
        "price": 35,
        "description": "Freshly brewed tea lifted with the warming bite of ginger."
      },
      {
        "name": "Tulsi Tea",
        "price": 35,
        "description": "A soothing tea infused with the gentle herbal character of tulsi."
      },
      {
        "name": "Lemon Tea",
        "price": 40,
        "description": "A light, refreshing tea with a bright lemon finish."
      },
      {
        "name": "Black Tea",
        "price": 40,
        "description": "A bold, milk-free tea with a clean and brisk character."
      },
      {
        "name": "Green Tea",
        "price": 50,
        "description": "A clean and calming green tea with a light, refreshing finish."
      },
      {
        "name": "Chocolate Tea",
        "price": 60,
        "description": "Comforting milk tea blended with a smooth chocolate note."
      }
    ]
  },
  {
    "id": "hot-coffee",
    "title": "Hot Coffee",
    "itemsCount": 4,
    "items": [
      {
        "name": "Hot Coffee",
        "price": 39,
        "description": "Freshly prepared coffee with a smooth, balanced café-style flavour.",
        "badge": "Bestseller"
      },
      {
        "name": "Black Coffee",
        "price": 39,
        "description": "Freshly prepared coffee with a smooth, balanced café-style flavour."
      },
      {
        "name": "Café Latte",
        "price": 69,
        "description": "Freshly prepared coffee with a smooth, balanced café-style flavour."
      },
      {
        "name": "Mocha Coffee",
        "price": 79,
        "description": "Freshly prepared coffee with a smooth, balanced café-style flavour."
      }
    ]
  },
  {
    "id": "cold-coffee",
    "title": "Cold Coffee",
    "itemsCount": 10,
    "items": [
      {
        "name": "Classic Cold Coffee",
        "price": 109,
        "description": "Sweet Coffee&#039;s signature thick, chilled and creamy cold coffee—smooth, satisfying and refreshingly bold.",
        "badge": "Bestseller"
      },
      {
        "name": "Dalgona Coffee",
        "price": 129,
        "description": "Chilled coffee crowned with a velvety whipped coffee layer for a rich café-style sip.",
        "badge": "Bestseller"
      },
      {
        "name": "Ice Cream Cold Coffee",
        "price": 129,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "Chocolate Cold Coffee",
        "price": 139,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "Mocha Cold Coffee",
        "price": 149,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "Vanilla Cold Coffee",
        "price": 149,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "Butterscotch Cold Coffee",
        "price": 149,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "Cardamom Cold Coffee",
        "price": 159,
        "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink."
      },
      {
        "name": "KitKat Cold Coffee",
        "price": 159,
        "description": "Creamy cold coffee with a chocolate-wafer crunch in every sip."
      },
      {
        "name": "Choco Chip Cold Coffee",
        "price": 159,
        "description": "Smooth chilled coffee blended with chocolate chips for added texture and indulgence."
      }
    ]
  },
  {
    "id": "maggi",
    "title": "Maggi",
    "itemsCount": 11,
    "items": [
      {
        "name": "Classic Maggi",
        "price": 69,
        "description": "Hot, slurpy Maggi noodles prepared fresh with the familiar classic masala."
      },
      {
        "name": "Special Masala Maggi",
        "price": 79,
        "description": "Classic Maggi noodles tossed with Sweet Coffee&#039;s savoury masala for a spicy, comforting bowl."
      },
      {
        "name": "Veggie Maggi",
        "price": 89,
        "description": "Classic Maggi loaded with fresh vegetables for extra crunch, colour and flavour.",
        "badge": "Bestseller"
      },
      {
        "name": "Cheese Maggi",
        "price": 99,
        "description": "Comforting Maggi made richer with a creamy, cheesy finish."
      },
      {
        "name": "Veg Atta Maggi",
        "price": 99,
        "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl."
      },
      {
        "name": "Corn Cheese Maggi",
        "price": 109,
        "description": "Comforting Maggi made richer with a creamy, cheesy finish."
      },
      {
        "name": "Spicy Cheese Maggi",
        "price": 109,
        "description": "Comforting Maggi made richer with a creamy, cheesy finish."
      },
      {
        "name": "Spicy Garlic Maggi",
        "price": 109,
        "description": "Hot Maggi tossed with a punchy garlic-forward seasoning."
      },
      {
        "name": "Spicy Manchurian Maggi",
        "price": 119,
        "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl."
      },
      {
        "name": "Paneer Cheese Maggi",
        "price": 129,
        "description": "Comforting Maggi made richer with a creamy, cheesy finish."
      },
      {
        "name": "Kimchi Maggi",
        "price": 149,
        "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl."
      }
    ]
  },
  {
    "id": "sandwich",
    "title": "Sandwich",
    "itemsCount": 15,
    "items": [
      {
        "name": "Classic Veg Sandwich",
        "price": 79,
        "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning."
      },
      {
        "name": "Butter Veg Sandwich",
        "price": 89,
        "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning."
      },
      {
        "name": "Cheese Veg Sandwich",
        "price": 99,
        "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning."
      },
      {
        "name": "Masala Aloo Sandwich",
        "price": 99,
        "description": "A comforting sandwich filled with savoury spiced potato masala."
      },
      {
        "name": "Veggie Loaded Sandwich",
        "price": 119,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      },
      {
        "name": "Veggie Grilled Sandwich",
        "price": 119,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      },
      {
        "name": "Chocolate Sandwich",
        "price": 119,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      },
      {
        "name": "Cheese Veg Grilled Sandwich",
        "price": 129,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      },
      {
        "name": "Chocolate Cheese Sandwich",
        "price": 139,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      },
      {
        "name": "Corn Cheese Grilled Sandwich",
        "price": 139,
        "description": "Sweet corn and melted cheese come together on a savoury pizza base."
      },
      {
        "name": "Paneer Grilled Sandwich",
        "price": 149,
        "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite."
      },
      {
        "name": "Paneer Tandoori Sandwich",
        "price": 159,
        "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite."
      },
      {
        "name": "Paneer Peri-Peri Sandwich",
        "price": 159,
        "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite."
      },
      {
        "name": "Paneer Tikka Sandwich",
        "price": 159,
        "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite."
      },
      {
        "name": "Spicy Mexican Sandwich",
        "price": 159,
        "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning."
      }
    ]
  },
  {
    "id": "potato-delights",
    "title": "Potato Delights",
    "itemsCount": 7,
    "items": [
      {
        "name": "Salted Spiral Potato",
        "price": 79,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Peri-Peri Spiral Potato",
        "price": 99,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Salted French Fries",
        "price": 79,
        "description": "Crisp golden fries, lightly salted and served hot."
      },
      {
        "name": "Peri-Peri French Fries",
        "price": 99,
        "description": "Crisp golden fries, lightly salted and served hot.",
        "badge": "Bestseller"
      },
      {
        "name": "Cheesy French Fries",
        "price": 129,
        "description": "Crisp golden fries, lightly salted and served hot."
      },
      {
        "name": "Chilli Potato",
        "price": 149,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Honey Chilli Potato",
        "price": 159,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      }
    ]
  },
  {
    "id": "garlic-bread",
    "title": "Garlic Bread",
    "itemsCount": 2,
    "items": [
      {
        "name": "Classic Garlic Bread",
        "price": 89,
        "description": "Warm toasted bread with a buttery garlic flavour and a crisp golden finish."
      },
      {
        "name": "Cheese Garlic Bread",
        "price": 119,
        "description": "Warm toasted bread with a buttery garlic flavour and a crisp golden finish."
      }
    ]
  },
  {
    "id": "pasta",
    "title": "Pasta",
    "itemsCount": 6,
    "items": [
      {
        "name": "White Sauce Pasta",
        "price": 149,
        "description": "Pasta coated in a smooth, creamy white sauce with balanced herbs and seasoning.",
        "badge": "Bestseller"
      },
      {
        "name": "Red Sauce Pasta",
        "price": 149,
        "description": "Pasta tossed in a tangy tomato sauce with herbs and a lively spicy finish.",
        "badge": "Bestseller"
      },
      {
        "name": "Pink Sauce Pasta",
        "price": 159,
        "description": "A balanced blend of creamy white sauce and tangy tomato sauce coating every bite.",
        "badge": "Bestseller"
      },
      {
        "name": "Arrabbiata Pasta",
        "price": 169,
        "description": "Pasta tossed in a tangy tomato sauce with herbs and a lively spicy finish."
      },
      {
        "name": "Alfredo Pasta",
        "price": 179,
        "description": "Pasta coated in a smooth, creamy white sauce with balanced herbs and seasoning."
      },
      {
        "name": "Paneer Loaded Pasta",
        "price": 199,
        "description": "Saucy pasta loaded with paneer for a richer and more satisfying meal."
      }
    ]
  },
  {
    "id": "pizza",
    "title": "Pizza",
    "itemsCount": 13,
    "items": [
      {
        "name": "Margherita Pizza",
        "price": 0,
        "description": "A timeless cheese pizza with rich tomato sauce and a generous mozzarella melt."
      },
      {
        "name": "Veggie Delight Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "Cheese Overloaded Pizza",
        "price": 0,
        "description": "A seriously cheesy pizza built for customers who want maximum melt and no distractions."
      },
      {
        "name": "Corn N Cheese Pizza",
        "price": 0,
        "description": "Sweet corn and melted cheese come together on a savoury pizza base.",
        "badge": "Bestseller"
      },
      {
        "name": "Peppy Paneer Pizza",
        "price": 0,
        "description": "A flavourful pizza topped with seasoned paneer, vibrant toppings and generous melted cheese.",
        "badge": "Bestseller"
      },
      {
        "name": "Veggie Paradise Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "Paneer Tikka Pizza",
        "price": 0,
        "description": "A robust pizza topped with spiced paneer tikka and generous melted cheese."
      },
      {
        "name": "FarmHouse Pizza",
        "price": 0,
        "description": "A colourful vegetable-loaded pizza with cheese and a balanced savoury bite.",
        "badge": "Bestseller"
      },
      {
        "name": "Tandoori Paneer Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "Peri-Peri Paneer Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "Mushroom Paneer Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "Veg Extravaganza Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      },
      {
        "name": "KH Special Pizza",
        "price": 0,
        "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings."
      }
    ]
  },
  {
    "id": "burger",
    "title": "Burger",
    "itemsCount": 7,
    "items": [
      {
        "name": "Veggie Burger",
        "price": 99,
        "description": "A satisfying vegetable patty burger layered with fresh crunch and flavourful sauces."
      },
      {
        "name": "Cheese Veg Burger",
        "price": 119,
        "description": "A satisfying vegetable patty burger layered with fresh crunch and flavourful sauces."
      },
      {
        "name": "Paneer Burger",
        "price": 139,
        "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces."
      },
      {
        "name": "Tandoori Paneer Burger",
        "price": 159,
        "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces."
      },
      {
        "name": "Peri-Peri Paneer Burger",
        "price": 159,
        "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces."
      },
      {
        "name": "Smoky Garlic Paneer Burger",
        "price": 169,
        "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces."
      },
      {
        "name": "KH Special Burger",
        "price": 199,
        "description": "A freshly assembled burger with a satisfying filling, fresh layers and flavourful sauces."
      }
    ]
  },
  {
    "id": "thick-shakes",
    "title": "Thick Shakes",
    "itemsCount": 10,
    "items": [
      {
        "name": "Vanilla Shake",
        "price": 119,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      },
      {
        "name": "Chocolate Shake",
        "price": 129,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      },
      {
        "name": "Strawberry Shake",
        "price": 129,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      },
      {
        "name": "Butterscotch Shake",
        "price": 129,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      },
      {
        "name": "Mango Shake",
        "price": 139,
        "description": "A smooth, creamy mango shake served chilled for a fruity refresh."
      },
      {
        "name": "Oreo Shake",
        "price": 149,
        "description": "A thick, creamy and chilled shake blended fresh to order.",
        "badge": "Bestseller"
      },
      {
        "name": "KitKat Shake",
        "price": 149,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      },
      {
        "name": "Choco Chip Shake",
        "price": 159,
        "description": "A creamy chocolate shake with chocolate-chip texture in every sip."
      },
      {
        "name": "Brownie Shake",
        "price": 169,
        "description": "A thick and indulgent chocolate shake blended with rich brownie flavour."
      },
      {
        "name": "Mint Chip Shake",
        "price": 169,
        "description": "A thick, creamy and chilled shake blended fresh to order."
      }
    ]
  },
  {
    "id": "mocktails",
    "title": "Mocktails",
    "itemsCount": 4,
    "items": [
      {
        "name": "Mint Mojito",
        "price": 99,
        "description": "A sparkling cooler with fresh mint and lime—crisp, bright and deeply refreshing.",
        "badge": "Bestseller"
      },
      {
        "name": "Green Apple Mojito",
        "price": 109,
        "description": "A fizzy green-apple cooler with a sweet-tart, refreshing finish."
      },
      {
        "name": "Blue Lagoon Mojito",
        "price": 119,
        "description": "A vibrant citrus-forward sparkling cooler served chilled for an instant refresh."
      },
      {
        "name": "Strawberry Mojito",
        "price": 119,
        "description": "A sparkling strawberry cooler with a fruity, refreshing finish."
      }
    ]
  },
  {
    "id": "soft-drinks",
    "title": "Soft Drinks",
    "itemsCount": 3,
    "items": [
      {
        "name": "Coke / Sprite (500 ml) No Sugar",
        "price": 20,
        "description": "A chilled 500 ml Coke No Sugar bottle with bigger refreshment and zero sugar."
      },
      {
        "name": "Pepsi 300 ML Can",
        "price": 40,
        "description": "A sealed 300 ml Pepsi Can served extra chilled for a crisp, classic cola experience.",
        "badge": "Bestseller"
      },
      {
        "name": "Red Bull",
        "price": 125,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      }
    ]
  },
  {
    "id": "mineral-water",
    "title": "Mineral Water",
    "itemsCount": 2,
    "items": [
      {
        "name": "Mineral Water (500 ml)",
        "price": 10,
        "description": "Sealed packaged drinking water served chilled for a clean, refreshing break."
      },
      {
        "name": "Mineral Water (1 Litre)",
        "price": 20,
        "description": "Sealed packaged drinking water served chilled for a clean, refreshing break."
      }
    ]
  },
  {
    "id": "ice-cream",
    "title": "Ice Cream",
    "itemsCount": 6,
    "items": [
      {
        "name": "Vanilla Ice Cream",
        "price": 79,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Butterscotch Ice Cream",
        "price": 89,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Strawberry Ice Cream",
        "price": 89,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Chocolate Ice Cream",
        "price": 89,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Mango Ice Cream",
        "price": 99,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      },
      {
        "name": "Tuti Frooti Ice Cream",
        "price": 89,
        "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour."
      }
    ]
  }
];

export const SWEET_COFFEE_WEBSITE: BusinessWebsite = {
  id: "sweet-coffee",
  slug: "sweet-coffee",
  businessName: "Sweet Coffee",
  category: "cafe",
  templateId: "sweet-coffee",
  tagline: "More Than Coffee. Food · Space · Moments",
  description: "Sweet Coffee in Sidhi — a modern café for coffee, food, conversations, celebrations and online ordering.",
  ownerName: "Shlok Chauhan",
  phone: "+91 74155 96400",
  whatsapp: "917415596400",
  email: "support@sweetcoffee.in",
  address: "Stadium Road, Sidhi, Madhya Pradesh",
  city: "Sidhi",
  state: "Madhya Pradesh",
  mapsUrl: "https://maps.google.com/?q=Stadium+Road+Sidhi+Madhya+Pradesh",
  openingHours: "10:00 AM – 11:00 PM Everyday",
  logoUrl: "/assets/sweet-coffee/logo.webp",
  coverUrl: "/assets/sweet-coffee/hero.webp",
  primaryColor: "#21140f",
  secondaryColor: "#bf8547",
  fontFamily: "Manrope",
  bookingType: "table_reservation",
  bookingCtaLabel: "Book a Table",
  specialBadge: "100% Veg Café",
  status: "published",
  pricingPlanId: "professional",
  amountPaid: 1499,
  paymentStatus: "paid",
  createdAt: "2026-03-20T10:00:00.000Z",
  updatedAt: "2026-09-29T10:00:00.000Z",
  sections: [
    { id: "hero", title: "Atmosphere", isEnabled: true, order: 1 },
    { id: "moments", title: "What Brings You Here", isEnabled: true, order: 2 },
    { id: "story", title: "Our Story", isEnabled: true, order: 3 },
    { id: "signatures", title: "Signatures in Focus", isEnabled: true, order: 4 },
    { id: "craving", title: "The Craving Index", isEnabled: true, order: 5 },
    { id: "experience", title: "The Experience", isEnabled: true, order: 6 },
    { id: "menu", title: "Complete 108-Item Menu", isEnabled: true, order: 7 },
    { id: "book", title: "Book a Table", isEnabled: true, order: 8 },
    { id: "reviews", title: "Google Reviews", isEnabled: true, order: 9 },
    { id: "social", title: "Follow the Hut", isEnabled: true, order: 10 }
  ],
  items: [
  {
    "id": "tea-1",
    "name": "Classic Tea",
    "price": 20,
    "description": "Freshly brewed milk tea with balanced sweetness—simple, comforting and made to order.",
    "category": "Tea",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "tea-2",
    "name": "Masala Tea",
    "price": 30,
    "description": "Fresh milk tea brewed with aromatic Indian spices for a warmer, fuller cup.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-3",
    "name": "Ginger Tea",
    "price": 35,
    "description": "Freshly brewed tea lifted with the warming bite of ginger.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-4",
    "name": "Tulsi Tea",
    "price": 35,
    "description": "A soothing tea infused with the gentle herbal character of tulsi.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-5",
    "name": "Lemon Tea",
    "price": 40,
    "description": "A light, refreshing tea with a bright lemon finish.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-6",
    "name": "Black Tea",
    "price": 40,
    "description": "A bold, milk-free tea with a clean and brisk character.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-7",
    "name": "Green Tea",
    "price": 50,
    "description": "A clean and calming green tea with a light, refreshing finish.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "tea-8",
    "name": "Chocolate Tea",
    "price": 60,
    "description": "Comforting milk tea blended with a smooth chocolate note.",
    "category": "Tea",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "hot-coffee-1",
    "name": "Hot Coffee",
    "price": 39,
    "description": "Freshly prepared coffee with a smooth, balanced café-style flavour.",
    "category": "Hot Coffee",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "hot-coffee-2",
    "name": "Black Coffee",
    "price": 39,
    "description": "Freshly prepared coffee with a smooth, balanced café-style flavour.",
    "category": "Hot Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "hot-coffee-3",
    "name": "Café Latte",
    "price": 69,
    "description": "Freshly prepared coffee with a smooth, balanced café-style flavour.",
    "category": "Hot Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "hot-coffee-4",
    "name": "Mocha Coffee",
    "price": 79,
    "description": "Freshly prepared coffee with a smooth, balanced café-style flavour.",
    "category": "Hot Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-1",
    "name": "Classic Cold Coffee",
    "price": 109,
    "description": "Sweet Coffee&#039;s signature thick, chilled and creamy cold coffee—smooth, satisfying and refreshingly bold.",
    "category": "Cold Coffee",
    "isVeg": true,
    "imageUrl": "/assets/sweet-coffee/dalgona-coffee.webp",
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "cold-coffee-2",
    "name": "Dalgona Coffee",
    "price": 129,
    "description": "Chilled coffee crowned with a velvety whipped coffee layer for a rich café-style sip.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "cold-coffee-3",
    "name": "Ice Cream Cold Coffee",
    "price": 129,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-4",
    "name": "Chocolate Cold Coffee",
    "price": 139,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-5",
    "name": "Mocha Cold Coffee",
    "price": 149,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-6",
    "name": "Vanilla Cold Coffee",
    "price": 149,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-7",
    "name": "Butterscotch Cold Coffee",
    "price": 149,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-8",
    "name": "Cardamom Cold Coffee",
    "price": 159,
    "description": "A smooth and chilled coffee prepared fresh for a creamy, refreshing café-style drink.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-9",
    "name": "KitKat Cold Coffee",
    "price": 159,
    "description": "Creamy cold coffee with a chocolate-wafer crunch in every sip.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "cold-coffee-10",
    "name": "Choco Chip Cold Coffee",
    "price": 159,
    "description": "Smooth chilled coffee blended with chocolate chips for added texture and indulgence.",
    "category": "Cold Coffee",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-1",
    "name": "Classic Maggi",
    "price": 69,
    "description": "Hot, slurpy Maggi noodles prepared fresh with the familiar classic masala.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-2",
    "name": "Special Masala Maggi",
    "price": 79,
    "description": "Classic Maggi noodles tossed with Sweet Coffee&#039;s savoury masala for a spicy, comforting bowl.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-3",
    "name": "Veggie Maggi",
    "price": 89,
    "description": "Classic Maggi loaded with fresh vegetables for extra crunch, colour and flavour.",
    "category": "Maggi",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "maggi-4",
    "name": "Cheese Maggi",
    "price": 99,
    "description": "Comforting Maggi made richer with a creamy, cheesy finish.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-5",
    "name": "Veg Atta Maggi",
    "price": 99,
    "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-6",
    "name": "Corn Cheese Maggi",
    "price": 109,
    "description": "Comforting Maggi made richer with a creamy, cheesy finish.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-7",
    "name": "Spicy Cheese Maggi",
    "price": 109,
    "description": "Comforting Maggi made richer with a creamy, cheesy finish.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-8",
    "name": "Spicy Garlic Maggi",
    "price": 109,
    "description": "Hot Maggi tossed with a punchy garlic-forward seasoning.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-9",
    "name": "Spicy Manchurian Maggi",
    "price": 119,
    "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-10",
    "name": "Paneer Cheese Maggi",
    "price": 129,
    "description": "Comforting Maggi made richer with a creamy, cheesy finish.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "maggi-11",
    "name": "Kimchi Maggi",
    "price": 149,
    "description": "Prepared hot and fresh with flavourful seasoning for a comforting bowl.",
    "category": "Maggi",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-1",
    "name": "Classic Veg Sandwich",
    "price": 79,
    "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "imageUrl": "/assets/sweet-coffee/veggie-sandwich.webp",
    "popular": false
  },
  {
    "id": "sandwich-2",
    "name": "Butter Veg Sandwich",
    "price": 89,
    "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-3",
    "name": "Cheese Veg Sandwich",
    "price": 99,
    "description": "A fresh, soft-bread sandwich layered with crisp vegetables and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-4",
    "name": "Masala Aloo Sandwich",
    "price": 99,
    "description": "A comforting sandwich filled with savoury spiced potato masala.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-5",
    "name": "Veggie Loaded Sandwich",
    "price": 119,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-6",
    "name": "Veggie Grilled Sandwich",
    "price": 119,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-7",
    "name": "Chocolate Sandwich",
    "price": 119,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-8",
    "name": "Cheese Veg Grilled Sandwich",
    "price": 129,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-9",
    "name": "Chocolate Cheese Sandwich",
    "price": 139,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-10",
    "name": "Corn Cheese Grilled Sandwich",
    "price": 139,
    "description": "Sweet corn and melted cheese come together on a savoury pizza base.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-11",
    "name": "Paneer Grilled Sandwich",
    "price": 149,
    "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-12",
    "name": "Paneer Tandoori Sandwich",
    "price": 159,
    "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-13",
    "name": "Paneer Peri-Peri Sandwich",
    "price": 159,
    "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-14",
    "name": "Paneer Tikka Sandwich",
    "price": 159,
    "description": "A filling paneer sandwich with savoury seasoning and a satisfying bite.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "sandwich-15",
    "name": "Spicy Mexican Sandwich",
    "price": 159,
    "description": "Freshly prepared with soft bread, flavourful filling and balanced seasoning.",
    "category": "Sandwich",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-1",
    "name": "Salted Spiral Potato",
    "price": 79,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-2",
    "name": "Peri-Peri Spiral Potato",
    "price": 99,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-3",
    "name": "Salted French Fries",
    "price": 79,
    "description": "Crisp golden fries, lightly salted and served hot.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-4",
    "name": "Peri-Peri French Fries",
    "price": 99,
    "description": "Crisp golden fries, lightly salted and served hot.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "potato-delights-5",
    "name": "Cheesy French Fries",
    "price": 129,
    "description": "Crisp golden fries, lightly salted and served hot.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-6",
    "name": "Chilli Potato",
    "price": 149,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "potato-delights-7",
    "name": "Honey Chilli Potato",
    "price": 159,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Potato Delights",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "garlic-bread-1",
    "name": "Classic Garlic Bread",
    "price": 89,
    "description": "Warm toasted bread with a buttery garlic flavour and a crisp golden finish.",
    "category": "Garlic Bread",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "garlic-bread-2",
    "name": "Cheese Garlic Bread",
    "price": 119,
    "description": "Warm toasted bread with a buttery garlic flavour and a crisp golden finish.",
    "category": "Garlic Bread",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pasta-1",
    "name": "White Sauce Pasta",
    "price": 149,
    "description": "Pasta coated in a smooth, creamy white sauce with balanced herbs and seasoning.",
    "category": "Pasta",
    "isVeg": true,
    "imageUrl": "/assets/sweet-coffee/white-sauce-pasta.webp",
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pasta-2",
    "name": "Red Sauce Pasta",
    "price": 149,
    "description": "Pasta tossed in a tangy tomato sauce with herbs and a lively spicy finish.",
    "category": "Pasta",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pasta-3",
    "name": "Pink Sauce Pasta",
    "price": 159,
    "description": "A balanced blend of creamy white sauce and tangy tomato sauce coating every bite.",
    "category": "Pasta",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pasta-4",
    "name": "Arrabbiata Pasta",
    "price": 169,
    "description": "Pasta tossed in a tangy tomato sauce with herbs and a lively spicy finish.",
    "category": "Pasta",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pasta-5",
    "name": "Alfredo Pasta",
    "price": 179,
    "description": "Pasta coated in a smooth, creamy white sauce with balanced herbs and seasoning.",
    "category": "Pasta",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pasta-6",
    "name": "Paneer Loaded Pasta",
    "price": 199,
    "description": "Saucy pasta loaded with paneer for a richer and more satisfying meal.",
    "category": "Pasta",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-1",
    "name": "Margherita Pizza",
    "price": 0,
    "description": "A timeless cheese pizza with rich tomato sauce and a generous mozzarella melt.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-2",
    "name": "Veggie Delight Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-3",
    "name": "Cheese Overloaded Pizza",
    "price": 0,
    "description": "A seriously cheesy pizza built for customers who want maximum melt and no distractions.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-4",
    "name": "Corn N Cheese Pizza",
    "price": 0,
    "description": "Sweet corn and melted cheese come together on a savoury pizza base.",
    "category": "Pizza",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pizza-5",
    "name": "Peppy Paneer Pizza",
    "price": 0,
    "description": "A flavourful pizza topped with seasoned paneer, vibrant toppings and generous melted cheese.",
    "category": "Pizza",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pizza-6",
    "name": "Veggie Paradise Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-7",
    "name": "Paneer Tikka Pizza",
    "price": 0,
    "description": "A robust pizza topped with spiced paneer tikka and generous melted cheese.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-8",
    "name": "FarmHouse Pizza",
    "price": 0,
    "description": "A colourful vegetable-loaded pizza with cheese and a balanced savoury bite.",
    "category": "Pizza",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "pizza-9",
    "name": "Tandoori Paneer Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-10",
    "name": "Peri-Peri Paneer Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-11",
    "name": "Mushroom Paneer Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-12",
    "name": "Veg Extravaganza Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "pizza-13",
    "name": "KH Special Pizza",
    "price": 0,
    "description": "Freshly baked pizza with rich sauce, melted cheese and flavourful toppings.",
    "category": "Pizza",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-1",
    "name": "Veggie Burger",
    "price": 99,
    "description": "A satisfying vegetable patty burger layered with fresh crunch and flavourful sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-2",
    "name": "Cheese Veg Burger",
    "price": 119,
    "description": "A satisfying vegetable patty burger layered with fresh crunch and flavourful sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-3",
    "name": "Paneer Burger",
    "price": 139,
    "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-4",
    "name": "Tandoori Paneer Burger",
    "price": 159,
    "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-5",
    "name": "Peri-Peri Paneer Burger",
    "price": 159,
    "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-6",
    "name": "Smoky Garlic Paneer Burger",
    "price": 169,
    "description": "A hearty paneer burger with bold seasoning, fresh layers and creamy sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "burger-7",
    "name": "KH Special Burger",
    "price": 199,
    "description": "A freshly assembled burger with a satisfying filling, fresh layers and flavourful sauces.",
    "category": "Burger",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-1",
    "name": "Vanilla Shake",
    "price": 119,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-2",
    "name": "Chocolate Shake",
    "price": 129,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-3",
    "name": "Strawberry Shake",
    "price": 129,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-4",
    "name": "Butterscotch Shake",
    "price": 129,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-5",
    "name": "Mango Shake",
    "price": 139,
    "description": "A smooth, creamy mango shake served chilled for a fruity refresh.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-6",
    "name": "Oreo Shake",
    "price": 149,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "thick-shakes-7",
    "name": "KitKat Shake",
    "price": 149,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-8",
    "name": "Choco Chip Shake",
    "price": 159,
    "description": "A creamy chocolate shake with chocolate-chip texture in every sip.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-9",
    "name": "Brownie Shake",
    "price": 169,
    "description": "A thick and indulgent chocolate shake blended with rich brownie flavour.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "thick-shakes-10",
    "name": "Mint Chip Shake",
    "price": 169,
    "description": "A thick, creamy and chilled shake blended fresh to order.",
    "category": "Thick Shakes",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "mocktails-1",
    "name": "Mint Mojito",
    "price": 99,
    "description": "A sparkling cooler with fresh mint and lime—crisp, bright and deeply refreshing.",
    "category": "Mocktails",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "mocktails-2",
    "name": "Green Apple Mojito",
    "price": 109,
    "description": "A fizzy green-apple cooler with a sweet-tart, refreshing finish.",
    "category": "Mocktails",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "mocktails-3",
    "name": "Blue Lagoon Mojito",
    "price": 119,
    "description": "A vibrant citrus-forward sparkling cooler served chilled for an instant refresh.",
    "category": "Mocktails",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "mocktails-4",
    "name": "Strawberry Mojito",
    "price": 119,
    "description": "A sparkling strawberry cooler with a fruity, refreshing finish.",
    "category": "Mocktails",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "soft-drinks-1",
    "name": "Coke / Sprite (500 ml) No Sugar",
    "price": 20,
    "description": "A chilled 500 ml Coke No Sugar bottle with bigger refreshment and zero sugar.",
    "category": "Soft Drinks",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "soft-drinks-2",
    "name": "Pepsi 300 ML Can",
    "price": 40,
    "description": "A sealed 300 ml Pepsi Can served extra chilled for a crisp, classic cola experience.",
    "category": "Soft Drinks",
    "isVeg": true,
    "popular": true,
    "badge": "Bestseller"
  },
  {
    "id": "soft-drinks-3",
    "name": "Red Bull",
    "price": 125,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Soft Drinks",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "mineral-water-1",
    "name": "Mineral Water (500 ml)",
    "price": 10,
    "description": "Sealed packaged drinking water served chilled for a clean, refreshing break.",
    "category": "Mineral Water",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "mineral-water-2",
    "name": "Mineral Water (1 Litre)",
    "price": 20,
    "description": "Sealed packaged drinking water served chilled for a clean, refreshing break.",
    "category": "Mineral Water",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-1",
    "name": "Vanilla Ice Cream",
    "price": 79,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-2",
    "name": "Butterscotch Ice Cream",
    "price": 89,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-3",
    "name": "Strawberry Ice Cream",
    "price": 89,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-4",
    "name": "Chocolate Ice Cream",
    "price": 89,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-5",
    "name": "Mango Ice Cream",
    "price": 99,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  },
  {
    "id": "ice-cream-6",
    "name": "Tuti Frooti Ice Cream",
    "price": 89,
    "description": "Freshly prepared at Sweet Coffee with careful seasoning and satisfying flavour.",
    "category": "Ice Cream",
    "isVeg": true,
    "popular": false
  }
],
  offers: [
    {
      id: "offer-1",
      title: "Sweet Coffee Welcome Treat",
      discount: "Flat 10% Off",
      code: "SWEET10",
      description: "Get 10% off your direct order or first dine-in reservation at Stadium Road.",
      validTill: "31 Dec 2026"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      imageUrl: "/assets/sweet-coffee/hero.webp",
      title: "Café Atmosphere & Seating",
      category: "interior"
    },
    {
      id: "gal-2",
      imageUrl: "/assets/sweet-coffee/dalgona-coffee.webp",
      title: "Signature Dalgona Coffee",
      category: "food"
    },
    {
      id: "gal-3",
      imageUrl: "/assets/sweet-coffee/veggie-sandwich.webp",
      title: "Veggie Grilled Sandwich",
      category: "food"
    },
    {
      id: "gal-4",
      imageUrl: "/assets/sweet-coffee/white-sauce-pasta.webp",
      title: "White Sauce Pasta",
      category: "food"
    },
    {
      id: "gal-5",
      imageUrl: "/assets/sweet-coffee/experience.webp",
      title: "Evenings & Celebrations",
      category: "events"
    }
  ]
};

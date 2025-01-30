const reviews = [
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "3",
    comment: "Decent selection, but the pasta was undercooked.",
    tags: ["pasta", "average"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
  {
    rating: "5",
    comment: "Terrible experience. Found hair in my food.",
    tags: ["hygiene", "bad experience"],
  },
  {
    rating: "3",
    comment: "Decent selection, but the pasta was undercooked.",
    tags: ["pasta", "average"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "3",
    comment: "Decent selection, but the pasta was undercooked.",
    tags: ["pasta", "average"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "3",
    comment: "Decent selection, but the pasta was undercooked.",
    tags: ["pasta", "average"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "1",
    comment: "Food was okay, but the cleanliness needs improvement.",
    tags: ["cleanliness", "okay food"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "5",
    comment: "The food was amazing! Loved the variety and the dessert section.",
    tags: ["great service", "dessert", "variety"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "1",
    comment: "Excellent service and great vegan options!",
    tags: ["vegan", "service"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "2",
    comment: "The best dining hall I've ever been to! Highly recommend.",
    tags: ["recommend", "best"],
  },
  {
    rating: "4",
    comment: "Loved the live cooking stations! A bit pricey, though.",
    tags: ["live cooking", "pricey"],
  },
  {
    rating: "3",
    comment: "Decent selection, but the pasta was undercooked.",
    tags: ["pasta", "average"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "3",
    comment: "Average food quality, but the staff was friendly.",
    tags: ["friendly staff", "average"],
  },
  {
    rating: "2",
    comment: "Long lines and cold food. Not the best experience.",
    tags: ["cold food", "long lines"],
  },
  {
    rating: "4",
    comment: "Good food, but the seating area was a bit crowded.",
    tags: ["crowded", "good food"],
  },
];

export default reviews;

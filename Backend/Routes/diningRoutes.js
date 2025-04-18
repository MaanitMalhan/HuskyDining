import express from "express";
import dummyReviews from "../Data/dummyReviews.js";
import dummyUsers from "../Data/dummyUsers.js";
import dummyDiningHalls from "../Data/dummyDiningHall.js";

const router = express.Router();

// Get dining hall hours
router.get("/hours", (req, res) => {
  try {
    const diningHallHours = dummyDiningHalls.map(hall => ({
      id: hall.id,
      name: hall.name,
      openTime: hall.hours?.open || "8:00 AM",
      closeTime: hall.hours?.close || "8:00 PM",
      location: hall.location
    }));
    
    res.status(200).json(diningHallHours);
  } catch (error) {
    console.error("Error fetching dining hours:", error);
    res.status(500).json({ message: "Failed to fetch dining hours" });
  }
});

router.get("/specials", (req, res) => {
  try {
    const specials = dummyDiningHalls.flatMap(hall => {
      if (!Array.isArray(hall.menu)) return [];
      
      const hallSpecials = hall.menu
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map(item => ({
          id: item.id || `special-${Math.random().toString(36).substring(2, 9)}`,
          name: item.name || "Special Item",
          description: item.description || "Chef's special of the day",
          price: item.price || 9.99,
          diningHall: hall.name,
          diningHallId: hall.id
        }));
      
      return hallSpecials;
    });
    
    res.status(200).json(specials);
  } catch (error) {
    console.error("Error fetching specials:", error);
    res.status(500).json({ message: "Failed to fetch today's specials" });
  }
});

// Get user favorites
router.get("/favorites", (req, res) => {
  try {
    const { userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    
    //generate some "favorites" based on user ID
    const userIdNum = parseInt(userId, 10) || 1;
    
    const favorites = dummyDiningHalls.flatMap(hall => {
      //handle halls that might not have a menu
      if (!Array.isArray(hall.menu)) return [];
      
      return hall.menu
        .filter((_, index) => (index + userIdNum) % 5 === 0) // Pseudo-random selection based on userId
        .map(item => ({
          id: `fav-${userIdNum}-${item.id || Math.random().toString(36).substring(2, 9)}`,
          itemId: item.id || `item-${Math.random().toString(36).substring(2, 9)}`,
          itemName: item.name || "Menu Item",
          diningHall: hall.name,
          diningHallId: hall.id
        }));
    }).slice(0, 5); // Limit to 5 favorites
    
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ message: "Failed to fetch favorites" });
  }
});

export default router;
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";

export const HomeLoggedIn = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const userName = userInfo?.name || "User";

  const [specials, setSpecials] = useState([]);
  const [diningHalls, setDiningHalls] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState({
    specials: true,
    diningHalls: true,
    favorites: true
  });
  const [error, setError] = useState({
    specials: null,
    diningHalls: null,
    favorites: null
  });

  useEffect(() => {
    //Fetch specials
    const fetchSpecials = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/dining/specials"); 
        if (!response.ok) {
          throw new Error("Failed to fetch specials");
        }
        const data = await response.json();
        const selectedSpecials = data.slice(0, 4);
        setSpecials(selectedSpecials); 
        setLoading(prev => ({ ...prev, specials: false }));
      } catch (error) {
        console.error("Error fetching specials:", error);
        setError(prev => ({ ...prev, specials: error.message })); 
        setLoading(prev => ({ ...prev, specials: false }));
      }
    };

    //Fetch dining hall hours
    const fetchDiningHalls = async () => {
      try {
        const data = [
          {
            id: 1,
            name: "Connecticut Dining Hall",
            hours: { open: "7:00 AM", close: "8:00 PM" }
          },
          {
            id: 2,
            name: "Gelfenbien Commons",
            hours: { open: "7:00 AM", close: "9:00 PM" }
          },
          {
            id: 3,
            name: "McMahon Dining Hall",
            hours: { open: "7:00 AM", close: "7:00 PM" }
          },
          {
            id: 4,
            name: "North Dining Hall",
            hours: { open: "7:00 AM", close: "10:00 PM" }
          },
          {
            id: 5,
            name: "Northwest Dining Hall",
            hours: { open: "10:00 AM", close: "8:00 PM" }
          }
        ];
        setDiningHalls(data);
        setLoading(prev => ({ ...prev, diningHalls: false }));
      } catch (error) {
        console.error("Error fetching dining hall hours:", error);
        setError(prev => ({ ...prev, diningHalls: error.message }));
        setLoading(prev => ({ ...prev, diningHalls: false }));
      }
    };

    //Fetch user favorites
    const fetchFavorites = async () => {
      try {
        const data = [
          {
            id: 101,
            name: "Vegan Burger",
            diningHall: "Connecticut Dining Hall"
          },
          {
            id: 202,
            name: "Late Night Pizza",
            diningHall: "Gelfenbien Commons"
          },
          {
            id: 301,
            name: "Gluten-Free Pancakes",
            diningHall: "McMahon Dining Hall"
          }
        ];
        setFavorites(data);
        setLoading(prev => ({ ...prev, favorites: false }));
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError(prev => ({ ...prev, favorites: error.message }));
        setLoading(prev => ({ ...prev, favorites: false }));
      }
    };

    fetchSpecials();
    fetchDiningHalls();
    fetchFavorites();
  }, []);

  return (
    <main className="overflow-hidden p-6 bg-gray-100 min-h-screen">
      <Navbar />
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome back, {userName}!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the best dining options around campus. Check out the latest menus and dining hours.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Today's Specials Card */}
        <div className="rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Today's Specials</h2>
          <p className="text-gray-600 mb-4">
            Explore chef's special dishes available today.
          </p>

          {loading.specials && <p className="text-gray-500 italic">Loading specials...</p>}
          {error.specials && <p className="text-red-500">Error: {error.specials}</p>}

          <div className="space-y-3 mt-4">
            {!loading.specials && !error.specials && specials.length > 0 ? (
              specials.map((item) => (
                <div key={item.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No specials available at the moment.</p>
            )}
          </div>
        </div>

        {/* Your Favorites Card */}
        <div className="rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Your Favorites</h2>
          <p className="text-gray-600 mb-4">Quickly access your favorite meals and dining spots.</p>
          
          {loading.favorites && <p className="text-gray-500 italic">Loading your favorites...</p>}
          {error.favorites && <p className="text-red-500">Error: {error.favorites}</p>}
          
          <div className="space-y-3 mt-4">
            {!loading.favorites && !error.favorites && favorites.length > 0 ? (
              favorites.map((item) => (
                <div key={item.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <p className="text-sm text-gray-600 mt-1">Available at: {item.diningHall}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No favorites saved yet.</p>
            )}
          </div>
          
          <div className="mt-6">
            <a 
              href="https://nutritionanalysis.dds.uconn.edu/longmenu.aspx?sName=UCONN+Dining+Services&locationNum=07&locationName=North+Campus+Dining+Hall&naFlag=1&WeeksMenus=This+Week%27s+Menus&dtdate=04%2f01%2f2025&mealName=Breakfast"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              Search Menu Items
            </a>
          </div>
        </div>

        {/* Dining Hall Hours Card */}
        <div className="rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Dining Hall Hours</h2>
          <p className="text-gray-600 mb-4">Today's opening and closing times.</p>
          
          {loading.diningHalls && <p className="text-gray-500 italic">Loading dining hall hours...</p>}
          {error.diningHalls && <p className="text-red-500">Error: {error.diningHalls}</p>}
          
          <div className="space-y-3 mt-4">
            {!loading.diningHalls && !error.diningHalls && diningHalls.length > 0 ? (
              diningHalls.map((hall) => (
                <div key={hall.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-800">{hall.name}</span>
                  <p className="text-sm text-gray-600 mt-1">{hall.hours.open} - {hall.hours.close}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No dining hall information available.</p>
            )}
          </div>
          
          <div className="mt-6">
            <a 
              href="https://dining.uconn.edu/hours/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              View Complete Hours
            </a>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center py-6">
        <h2 className="text-3xl font-bold text-gray-800">Need Assistance?</h2>
        <p className="mt-4 text-lg text-gray-700">Reach out to our support team for any questions or concerns.</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-sm">
          Contact Support
        </button>
      </section>
    </main>
  );
};
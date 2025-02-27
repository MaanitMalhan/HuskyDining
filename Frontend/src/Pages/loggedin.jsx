import React from "react";
import { Navbar } from "../components/navigation/Nav";
import { useSelector } from "react-redux";

export const HomeLoggedIn = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const userName = userInfo?.name || "User"; // Fetching logged-in user's name dynamically

  return (
    <main className={`overflow-hidden p-6 bg-gray-100 min-h-screen`}>
      <Navbar />
      <section className={`mt-10 text-center`}>
        <h1 className={`text-4xl font-bold text-gray-800`}>Welcome back, {userName}!</h1>
        <p className={`mt-4 text-lg text-gray-600`}>
          Discover the best dining options around campus. Check out the latest menus and dining hours.
        </p>
      </section>

      <section className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4`}>
        <div className={`rounded-lg shadow-md p-6 bg-white`}>
          <h2 className={`text-2xl font-semibold`}>Today's Specials</h2>
          <p className={`mt-2 text-gray-600`}>
            Explore the chef's special dishes available today across all dining halls.
          </p>
        </div>

        <div className={`rounded-lg shadow-md p-6 bg-white`}>
          <h2 className={`text-2xl font-semibold`}>Your Favorites</h2>
          <p className={`mt-2 text-gray-600`}>
            Quickly access your favorite meals and dining spots.
          </p>
        </div>

        <div className={`rounded-lg shadow-md p-6 bg-white`}>
          <h2 className={`text-2xl font-semibold`}>Dining Hall Hours</h2>
          <p className={`mt-2 text-gray-600`}>
            Stay updated with the latest opening and closing times for each location.
          </p>
        </div>
      </section>

      <section className={`mt-16 text-center`}>
        <h2 className={`text-3xl font-bold`}>Need Assistance?</h2>
        <p className={`mt-4 text-lg text-gray-700`}>Reach out to our support team for any questions or concerns.</p>
        <button className={`mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600`}>Contact Support</button>
      </section>
    </main>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
  console.log(user);
  return (
    <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-md shadow-md">
      {user && (
        <div className="flex gap-2 items-center">
          <img
            className="w-32 h-32 mx-auto mb-4 rounded-full"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="details">
            <h2 className="text-xl font-semibold mb-2">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600">{user.gender}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-600 font-semibold">{user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

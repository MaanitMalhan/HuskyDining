import React from "react";
import { FaCarSide, FaAddressBook, FaWallet, FaAtlas } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaAtlas className="text-2xl md:text-7xl text-primary" />,
    title: "Step 1",
    description:
      "Request FlexPass or Put up that you are willing to give FlexPass at certain dinig hall at certain time",
  },
  {
    id: 2,
    icon: <FaCarSide className="text-4xl md:text-7xl text-primary" />,
    title: "Step 2 ",
    description:
      "Be at correct dinning hall at time that was specified and listed and meet up with person.",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-7xl text-primary" />,
    title: "Step 3",
    description:
      "Fufill request/ticket by swiping in person or be swiped in at intended dining hall and time.",
  },
  {
    id: 4,
    icon: <FaAddressBook className="text-4xl md:text-7xl text-primary" />,
    title: "Step 4",
    description:
      "Review Request/Person to see how trustworth person is, untrustworty will have less weight",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

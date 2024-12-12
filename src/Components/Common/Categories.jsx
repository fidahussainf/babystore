import React from 'react'

function Categories() {
    const categories = [
        { name: "Gear", image: "./images/gear.png" },
        { name: "Nursery", image: "./images/nursery.png" },
        { name: "Feeding", image: "./images/feeding.png" },
        { name: "Diapering", image: "./images/diapering.png" },
        { name: "Toys", image: "./images/toys.png" },
        { name: "Skincare", image: "./images/skincare.png" },
        { name: "Outdoor", image: "./images/outdoor.png" },
        { name: "School", image: "./images/school.png" },
        { name: "Mommy", image: "./images/mommy.png" },
        { name: "Party", image: "./images/party.png" },
        { name: "Fashion", image: "./images/fashion.png" },
        { name: "SALE", image: "./images/presentage.png" },
      ];
  return (
    <div className="px-5 flex  justify-between items-center">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center cursor-pointer hover:opacity-80"
          >
            <div className="bg-primary rounded-2xl p-2">
              <img
                src={category.image}
                alt={category.name}
                className="h-12 w-12  "
              />
            </div>
            <span className="text-base font-medium mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
  )
}

export default Categories
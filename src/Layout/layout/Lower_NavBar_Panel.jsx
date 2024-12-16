import React from "react";

const data = [
  {
    title: "Men's Fashion",
    subcategories: ["Watches", "Clothes", "Shoes"],
  },
  {
    title: "Women's Fashion",
    subcategories: ["Bags", "Dresses", "Jewelry"],
  },
];

const Navbar = () => {
  return (
    <div className="nav-item">
      <span className="nav-title">Categories</span>
      <div className="dropdown">
        {data.map((category, index) => (
          <div className="dropdown-section" key={index}>
            <span className="category">{category.title}</span>
            <div className="sub-dropdown">
              <ul>
                {category.subcategories.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;




```
/* Main Navbar */
.nav-item {
  position: relative;
}

.nav-title {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

/* Dropdown for Categories */
.dropdown {
  position: absolute;
  top: 100%; /* Below the Categories button */
  left: 0;
  background-color: white;
  color: black;
  display: none; /* Hidden by default */
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  border-radius: 8px;
}

.dropdown-section {
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.category {
  font-size: 14px;
  font-weight: bold;
}

/* Sub-dropdown for Subcategories */
.sub-dropdown {
  position: absolute;
  top: 0;
  left: 100%; /* Aligns to the right of the main dropdown */
  background-color: white;
  color: black;
  display: none; /* Hidden by default */
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 150px;
  border-radius: 8px;
}

/* Hover Effects */
/* Show dropdown when hovering on Categories */
.nav-item:hover .dropdown {
  display: block;
}

/* Show sub-dropdown when hovering on a main category */
.dropdown-section:hover .sub-dropdown {
  display: block;
}

```
import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  // State for the new menu item input
  let [newMenuItem, setNewMenuItem] = useState("");

  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems);

  // State for the filter input
  let [filter, setFilter] = useState("");

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item");

    // TODO: 3. Add a new menu item to the correct variable associated with this class.
    // This involves adding a parameter and changing a class instance variable (props).
    if (newMenuItem.trim() !== "") {
      setMenuItems([...menuItems, newMenuItem]); // Add the new item to the menuItems array
      setNewMenuItem(""); // Clear the input field after adding
    }
  }, [newMenuItem, menuItems]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  const filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      {/* Input for adding a new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      {/* Button to add the new menu item */}
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      {/* Input for filtering menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <br />
      {/* Render the filtered menu items as an unordered list */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
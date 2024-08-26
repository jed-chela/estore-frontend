import React, {useState} from 'react'

function OutOfStock() {
    const[isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

return (
    <div className="flex items-center">
    <input
      type="checkbox"
      id="checkbox"
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
    <label htmlFor="checkbox" className="ml-2 text-gray-700">
      {isChecked ? "Out of stock" : "Out of stock"}
    </label>
  </div>
  );
}




export default OutOfStock
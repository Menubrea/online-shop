import { useState, useEffect } from 'react';

export const FilterHook = (data) => {
  const [filterData, setFilterData] = useState([]);
  const [headline, setHeadline] = useState('All');

  // Sets the initial filterData to include all data.
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  // Reset states
  const Reset = () => {
    setFilterData(data);
    setHeadline('All');
  };

  // Function for handling different <categories>
  function FilterTag(category) {
    const filtered = data.filter((product) => {
      return product.tags.includes(category.toLowerCase());
    });
    setFilterData(filtered);
    setHeadline(category);
  }

  return { filterData, headline, Reset, FilterTag };
};

import { useState, useEffect } from 'react';

/**
 * Filter function for filtering products depending on the content of tags key in product object.
 * @param {array} data An array of objects, in the application, data is always defined as the returned array of objects from the API.
 * @returns Returns filterData, headline, Reset and FilterTag
 */
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

  /**
   * Function for filtering data based on tags/category.
   * @param {string} category
   * @Returns filterData and headline based on the value provided in category.
   * @example ```js
   *  FilterTag('Shoes')
   *  // Expect the returned filtered array to only include objects with tag of shoes.
   * ```
   */
  function FilterTag(category) {
    const filtered = data.filter((product) => {
      return product.tags.includes(category.toLowerCase());
    });

    setHeadline(category);
    return setFilterData(filtered);
  }

  return { filterData, headline, Reset, FilterTag };
};

const filterMobileArray = (array, filter) => {
  const filterLowerCase = filter.toLowerCase();
  return array.filter(
    (item) => item.brand.toLowerCase().includes(filterLowerCase) || item.model.toLowerCase().includes(filterLowerCase)
  );
};

export default filterMobileArray;

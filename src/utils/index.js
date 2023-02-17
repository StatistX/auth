function setTableHeaders(array, { sortable }) {
  const headers = [];
  for (let index = 0; index < array.length; index++) {
    for (const key in array[index]) {
      if (!headers.includes(key)) {
        headers.push(key);
      }
    }
  }
  const tableHeaders = headers.map((item) => {
    return {
      title: item,
      key: item,
      sortable,
    };
  });

  return tableHeaders;
}

export { setTableHeaders };

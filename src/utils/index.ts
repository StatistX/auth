function setTableHeaders(array, { sortable }) {
  const headers: [string?] = [];
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

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { setTableHeaders, emailPattern };

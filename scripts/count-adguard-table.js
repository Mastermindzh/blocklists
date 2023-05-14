(() => {
  clear();
  let rows = document.getElementsByClassName("rt-tr");
  let totalCount = 0;
  // remove header
  rows = Array.prototype.slice.call(rows, 1);
  rows.forEach((row) => {
    const textContent = row.children[3].textContent;
    const count = parseInt(textContent.replace(",", ""));
    if (!isNaN(count)) {
      totalCount += count;
    }
  });
  console.log(totalCount.toLocaleString());
})();

class Table {
  constructor(el, data, time) {
    this.el = document.querySelector(el);
    this.data = data;
    this.time = time;
    this.counter = 0;

    this._createRows();
  }

  sortBy() {
    let i = 0;
    const arrowSort = document.querySelector('#arrow-sort');

    this.data = this.data.sort((a, b) => {
      if (i <= this.counter) {
        i++;
        arrowSort.innerHTML = '&#x2191';
        return a.id - b.id;
      } else {
        arrowSort.innerHTML = '&#x2193';
      }
    });
    this.el.innerHTML = '';
    this._createRows();
    this.counter++;
  }

  _createRows() {
    for (const row of this.data) {
      const tr = document.createElement('tr');

      tr.innerHTML = `<td>#${row.id}</td><td>${row.title}</td><td>(${row.year})</td><td>imdb: ${row.imdb}</td>`;

      tr.className = 'js-table-tr';
      tr.setAttribute('data-id', row.id);
      tr.setAttribute('data-title', row.title);
      tr.setAttribute('data-year', row.year);
      tr.setAttribute('data-imdb', row.imdb);

      this.el.appendChild(tr);
    }
  }
}

export default Table;

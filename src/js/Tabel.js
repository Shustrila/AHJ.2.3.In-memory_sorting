class Table {
  constructor(el, data, time) {
    this.el = document.querySelector(el);
    this.data = data;
    this.time = time;
    this.counter = 0;

    this.init();
  }

  init() {
    this.createRow(this.data);
    this.sortByInterval();
  }

  sortByInterval() {
    setInterval(() => {
      let i = 0;
      this.data = this.data.sort((a, b) => {
        if (i <= this.counter) {
          i++;
          return a.id - b.id;
        }
      });
      this.el.innerHTML = '';
      this.createRow(this.data);
      this.counter++;
    }, this.time);
  }

  createRow(rows) {
    for (const row of rows) {
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

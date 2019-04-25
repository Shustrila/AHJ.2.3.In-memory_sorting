class Table {
  constructor(el, data, time) {
    this.el = el;
    this.data = data;
    this.time = time;
    this.selectAttr = 0;
    this.selectData = ['id', 'title', 'year', 'imdb'];
    this.ascending = true;
    this.counter = 0;

    this._createRows();
  }

  static _generateArrow(nameAttr, code) {
    const head = document.querySelector(`[data-name-head=${nameAttr}]`);
    const arrowSort = document.querySelector('.js-arrow-sort');
    const span = document.createElement('span');

    if (arrowSort !== null) {
      arrowSort.remove();
    }

    span.className = 'js-arrow-sort';
    span.innerHTML = code;

    head.appendChild(span);
  }

  sortBy() {
    const el = document.querySelector(this.el);
    const nameAttr = this.selectData[this.selectAttr];
    const self = this.data[this.counter];

    if (this.counter + 1 === this.data.length) this.ascending = false;

    if (this.ascending && this.counter + 1 < this.data.length) {
      const next = this.data[this.counter + 1];

      if (self[nameAttr] > next[nameAttr]) {
        this.data.splice(this.counter, 1, next);
        this.data.splice(this.counter + 1, 1, self);
      }

      Table._generateArrow(nameAttr, '&#x2193');
      this.counter += 1;
    } else {
      const prev = this.data[this.counter - 1];

      if (self[nameAttr] > prev[nameAttr]) {
        this.data.splice(this.counter - 1, 1, self);
        this.data.splice(this.counter, 1, prev);
      }

      Table._generateArrow(nameAttr, '&#x2191');

      if (this.counter === 1) {
        this.selectAttr += 1;
        if (this.selectAttr === this.selectData.length) {
          this.selectAttr = 0;
        }
        this.ascending = true;
      }
      this.counter -= 1;
    }

    console.log(this.counter);

    el.innerHTML = '';
    this._createRows();
  }

  _createRows() {
    const el = document.querySelector(this.el);

    for (const row of this.data) {
      const tr = document.createElement('tr');

      tr.innerHTML = `<td>${row.id}</td><td>${row.title}</td><td>(${row.year})</td><td>imdb: ${row.imdb}</td>`;

      tr.className = 'js-table-tr';
      tr.setAttribute('data-id', row.id);
      tr.setAttribute('data-title', row.title);
      tr.setAttribute('data-year', row.year);
      tr.setAttribute('data-imdb', row.imdb);

      el.appendChild(tr);
    }
  }
}

export default Table;

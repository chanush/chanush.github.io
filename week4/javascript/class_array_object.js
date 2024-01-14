class array_object {
    static current_list_isitClicked = 1;
    constructor(content, time, date) {
      const autodate = new Date();
      this._code = `${autodate.getDay()}${autodate.getMonth() + 1}${autodate.getFullYear()}${autodate.getHours()}${autodate.getMinutes()}${autodate.getSeconds()}`;
      this._content = content;
      this._time = time;
      this._date = date;
    }
    get content() {
      return this.content;
    }
    get time() {
      return this.time;
    }
    get date() {
      return this.date;
    }
    get code() {
      return this.code;
    }
  }
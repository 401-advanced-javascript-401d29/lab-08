"use strict";

const uuid = require("uuid/v4");

const schema = {
  name: { required: true, type: "string" },
  display_name: { required: true, type: "string" },
  description: { required: true, type: "string" },
  _id: { required: true, type: "string" }
};
class Categories {
  constructor() {
    this.database = [];
  }

  get(_id) {
      let response = _id
        ? this.database.filter( record => record._id === _id)[0]
        : this.database;

      return response;
  }

  post(record) {
    record._id = uuid();
    this.validation(record);
    this.database.push(record);
    // console.log(this.validation(record), 'validation')

    return record;

  }

  put(_id, record) {}

  delete(_id) {}

  validation(record) {
    let boolean = true;
    Object.keys(schema).forEach(field => {
      if (record[field] === undefined || typeof record[field] !== 'string') {
        boolean = false;
      }
    });
    return boolean;
  }
}

module.exports = Categories;

"use strict";

const CategoryDatabase = require("../src/models/categories.js");

const categories = new CategoryDatabase();

describe("Categories", () => {
  it("post() -- can create a category", () => {
    let category = {
      name: "Pet Products",
      display_name: 'Pet',
      description: "Items your pet will love"
    };
    let newCategory = categories.post(category);
    expect(categories.validation(category)).toBeTruthy();
    expect(newCategory.name).toEqual(category.name);
  });
});

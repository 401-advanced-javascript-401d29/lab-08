"use strict";

const CategoryDatabase = require("../src/models/categories.js");

const categories = new CategoryDatabase();

describe("Categories", () => {
  it('post() -- can create a category', () => {
    let category = {
      name: 'Pet Products',
      display_name: 'Pet',
      description: 'Items your pet will love'
    };

    let newCategory = categories.post(category);

    expect(categories.validation(category)).toBeTruthy();
    expect(newCategory.name).toEqual(category.name);
  });

  it('get() -- can get a list of categories', () => {
    let category = {
      name: 'Pet Products',
      display_name: 'Pet',
      description: 'Items your pet will love'
    };

    let createdCategory = categories.post(category);
    let foundCategory = categories.get(createdCategory._id);

    expect(foundCategory._id).toEqual(createdCategory._id);
  })

  it()
});

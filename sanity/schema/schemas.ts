export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }
  ],
};

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price per Unit",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      validation: (Rule) => Rule.required().min(4).max(4),
      of: [{ type: "image" }],
      options: {
        layout: "grid",
        columns: 3,
        hotspot: true,
      },
    },
    {
      name: "specialty",
      title: "Specialty",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          "Recommended",
          "Hot",
          "Best Rated",
          "Top Selling",
          "Black Friday",
        ],
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};

export const users = {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "otherName",
      title: "Other Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
}

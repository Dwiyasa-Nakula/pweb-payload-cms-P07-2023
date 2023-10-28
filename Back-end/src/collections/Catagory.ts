import { CollectionConfig } from "payload/types";
import payload from "payload";

const catagory: CollectionConfig = {
  slug: "catagory",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "catagory",
              action: "Create",
              Timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "catagory",
              action: "Update",
              Timestamp: new Date(),
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "catagory",
              action: "Delete",
              Timestamp: new Date(),
            },
          });
        }
      },
    ],
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
      required: true,
    },
  ],
};

export default catagory;

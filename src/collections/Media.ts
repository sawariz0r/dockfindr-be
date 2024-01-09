import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "uploadedBy",
      label: "Uploaded by",
      type: "relationship",
      relationTo: "users",
    },
  ],
};

export default Media;

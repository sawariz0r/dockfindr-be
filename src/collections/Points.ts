import { CollectionConfig } from "payload/types";

const Points: CollectionConfig = {
  slug: "points",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    // Points on a map, with coordinates.
    {
      name: "location",
      type: "point",
      required: true,
    },
    {
      name: "createdBy",
      type: "email",
      required: true,
    },
    {
      name: "reviewed",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "locked",
      label: "Locked Ramp",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "number",
      name: "price",
      admin: {
        position: "sidebar",
      },
    },
    // Also in sidebar: Type of ramps (Naturramp, Anlagd ramp, etc.)
    // Om den är låst, övrig info och array med bilder
    {
      name: "rampType",
      type: "select",
      hasMany: true,
      required: true,
      options: [
        {
          label: "Naturramp",
          value: "naturramp",
        },
        {
          label: "Anlagd ramp",
          value: "anlagd-ramp",
        },
        {
          label: "Annat",
          value: "annat",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "additionalInfo",
      type: "textarea",
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default Points;

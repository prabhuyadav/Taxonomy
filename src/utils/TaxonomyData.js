// Nested Taxonomy
export const taxonomyData = [
  {
    name: "object",
    classId: 0,
    children: [
      {
        name: "car",
        classId: 1,
        children: [
          { name: "sedan", classId: 6, children: [] },
          { name: "suv", classId: 7, children: [] },
          {
            name: "truck",
            classId: 8,
            children: [
              { name: "big", classId: 11, children: [] },
              { name: "small", classId: 12, children: [] },
            ],
          },
        ],
      },
      { name: "traffic light", classId: 2, children: [] },
      { name: "traffic sign", classId: 3, children: [] },
      { name: "tree", classId: 4, children: [] },
      {
        name: "person",
        classId: 5,
        children: [
          { name: "male", classId: 9, children: [] },
          { name: "female", classId: 10, children: [] },
        ],
      },
    ],
  },
];

// Completely flat taxonomy
// export const flatTaxonomy = [
//   {
//     name: "flatObject",
//     classId: 0,
//     children: [
//       { name: "chair", classId: 1, children: [] },
//       { name: "table", classId: 2, children: [] },
//       { name: "computer", classId: 3, children: [] },
//       { name: "bed", classId: 4, children: [] },
//       { name: "glass", classId: 5, children: [] },
//       { name: "television", classId: 6, children: [] },
//     ],
//   },
// ];

const galery = [
  {
    name: "/galery/main/g1vert.jpg",
  },
  {
    name: "/galery/main/g2.jpg",
  },
  {
    name: "/galery/main/g3.jpg",
  },
  {
    name: "/galery/main/g4vert.jpg",
  },
  {
    name: "/galery/main/g5vert.jpg",
  },
  {
    name: "/galery/main/g6.jpg",
  },
  {
    name: "/galery/main/g7.jpg",
  },
];

export const splitedGalery = (spitLength = 1) => {
  const arr = [];
  arr.push([]);
  galery.forEach((item) => {
    if (arr[arr.length - 1].length === spitLength) {
      arr.push([]);
    }
    arr[arr.length - 1].push(item);
  });
  return arr;
};

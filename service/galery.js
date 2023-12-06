const galery = [
  {
    name: "galery1.jpg",
  },
  {
    name: "galery2.jpg",
  },
  {
    name: "galery2.jpg",
  },
  {
    name: "galery1.jpg",
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

const services = [
  {
    name: "Ботулінотерапія",
  },
  {
    name: "Контурна пластика",
  },
  {
    name: "Векторний ліфтинг",
  },
  {
    name: "Тредліфтинг",
  },
  {
    name: "Біоревіталізація",
  },
  {
    name: "Доглядові процедури",
  },
  {
    name: "Чистка обличчя",
  },
  {
    name: "Мезотерапія",
  },
  {
    name: "Пілінг",
  },
  {
    name: "Смас-ліфтинг",
  },
  {
    name: "Мезотерапія",
  },
  {
    name: "Масаж",
  },
];

export const splitedService = (spitLength = 1) => {
  const arr = [];
  arr.push([]);
  services.forEach((item) => {
    if (arr[arr.length - 1].length === spitLength) {
      arr.push([]);
    }
    arr[arr.length - 1].push(item);
  });
  return arr;
};

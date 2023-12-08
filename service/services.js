const services = [
  {
    name: "Ботулінотерапія",
    href: "/botulinoterapiya.jpg",
  },
  {
    name: "Контурна пластика",
    href: "/kPlast.jpg",
  },
  {
    name: "Векторний ліфтинг",
    href: "/vLift.jpg",
  },
  {
    name: "Тредліфтинг",
    href: "/tred.jpg",
  },
  {
    name: "Біоревіталізація",
    href: "/biorev.jpg",
  },
  {
    name: "Доглядові процедури",
    href: "/dogliad.jpg",
  },
  {
    name: "Чистка обличчя",
    href: "/clean.jpg",
  },
  {
    name: "Пілінг",
    href: "/piling.jpg",
  },
  {
    name: "Смас-ліфтинг",
    href: "/smas.jpg",
  },
  {
    name: "Мезотерапія",
    href: "/mezo.jpg",
  },
  {
    name: "Масаж",
    href: "/massazh.jpg",
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

const services = [
  {
    name: "Ботулінотерапія",
    href: "/botulinoterapiya.jpg",
    link: "/butulinotherapia",
  },
  {
    name: "Контурна пластика",
    href: "/kPlast.jpg",
  },
  {
    name: "Плазмотерапія",
    href: "/vLift.jpg",
  },
  {
    name: "Duolift",
    href: "/dogliad.jpg",
    link: "/duolift",
  },
  {
    name: "Лікувальні процедури",
    href: "/clean.jpg",
  },
  {
    name: "Смас-ліфтинг",
    href: "/smas.jpg",
    link: "/smas-lifting",
  },
  {
    name: "Масаж",
    href: "/massazh.jpg",
    link: "/masage",
  },
  {
    name: "Доглядові процедури",
    href: "/dogliad.jpg",
    link: "/biorevit",
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

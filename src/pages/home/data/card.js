import CartIcon from "components/icons/CartIcon";
import MarkIcon from "components/icons/MarkIcon";

const cards = [
  {
    title: "This month renewal rate",
    progress: 45,
    logoBg: "#E01E5A",
    logo: MarkIcon,
    diff: -23,
    time: "than last month",
  },
  {
    title: "Welearn course progress",
    progress: 45,
    logoBg: "#E01E5A",
    logo: MarkIcon,
    diff: -2,
    time: "than last week",
  },
  {
    title: "Teaching hour ",
    progress: 45,
    logoBg: "#009A58",
    logo: CartIcon,
    diff: 5,
    time: "than last month",
  },
  {
    title: "Conversion rate ",
    progress: 45,
    logoBg: "#009A58",
    logo: CartIcon,
    diff: +2,
    time: "than last month",
  },
];

export { cards };

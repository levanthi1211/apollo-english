import CategoryBoxIcon from "components/icons/CategoryBoxIcon";
import CategoryPhoneIcon from "components/icons/CategoryPhoneIcon";
import CategoryTagIcon from "components/icons/CategoryTagIcon";

const categories = [
  {
    header: "Access to work station",
    items: [
      {
        logo: <CategoryBoxIcon />,
        title: "HUB 24",
        subtitle: "CRM, SIS, Ticket",
      },
      {
        logo: <CategoryPhoneIcon />,
        title: "Slack",
        subtitle: "Communication Channel",
      },
      {
        logo: <CategoryTagIcon />,
        title: "Teacher Drive ",
        subtitle: "Teaching Materials",
      },
      {
        logo: <CategoryTagIcon />,
        title: "Teacher Drive ",
        subtitle: "Teaching Materials",
      },
      {
        logo: <CategoryTagIcon />,
        title: "Teacher Drive ",
        subtitle: "Teaching Materials",
      },
    ],
  },
  {
    header: "Useful link",
    items: [
      {
        logo: <CategoryBoxIcon />,
        title: "IELTS",
        subtitle: "30 Categories",
      },
      {
        logo: <CategoryPhoneIcon />,
        title: "My centre info",
        subtitle: "01 categories",
      },
      {
        logo: <CategoryTagIcon />,
        title: "FAQs",
        subtitle: "12 categories ",
      },
      {
        logo: <CategoryTagIcon />,
        title: "Teacher Drive ",
        subtitle: "Teaching Materials",
      },
    ],
  },
];

export default categories;

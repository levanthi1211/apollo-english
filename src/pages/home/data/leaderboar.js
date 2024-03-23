const leaderboards = [
  {
    header: "CENTRE LEADERBOARD",
    tags: true,
    subtitle: "Your Centre Ranking",
    ranking: 21,
    users: [
      {
        ranking: 1,
        avatar: false,
        avatarAlt: "CT1",
        avatarAltBg: "#63B3ED",
        name: "Center Name 1",
        change: +1,
      },
      {
        ranking: 2,
        avatar: false,
        avatarAlt: "CT2",
        avatarAltBg: "#CED4DA",
        name: "Center Name 2",
        change: -1,
      },
      {
        ranking: 3,
        avatar: false,
        avatarAlt: "CT3",
        avatarAltBg: "linear-gradient(338deg, #2DCEC6 27.53%, #2DCE94 61.45%)",
        name: "Center Name 2",
        change: 0,
      },
      {
        ranking: 4,
        avatar: false,
        avatarAlt: "CT4",
        avatarAltBg: "linear-gradient(92deg, #FBB140 1.1%, #FB6340 99.77%)",
        name: "Center Name 4",
        change: +3,
      },
      {
        ranking: 5,
        avatar: false,
        avatarAlt: "CT5",
        avatarAltBg: "linear-gradient(338deg, #2DCEC6 27.53%, #2DCE94 61.45%)",
        name: "Center Name 5",
        change: -1,
      },
    ],
  },
  {
    header: "TEACHER LEADER BOARD",
    tags: false,
    subtitle: "Yourself Ranking",
    ranking: 10,
    users: [
      {
        ranking: 1,
        avatar:
          "https://s3-alpha-sig.figma.com/img/5979/8e2f/d5c25d622d1f7ce8682d925b6296412d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcTfvO42PuLTg5itaWZsfngNweMeMCcsvHlGIzZCn9axknIDAjrxptNUMyPvy1AQkNGZ3EYjavXRD42AS7ezUrb6cLKV-8-Ce2yxpvQrwGHMQ3~JKvq4MLGE1no6uPB-23YsNj9Eh3R-l6iHwxUq1OCQIL1AtQ7jYbvOcFyv6THKVzubFkguMHfTvVRiF46uKqPyjuEo3SaGAFKKwCamV9ftaWHtlyxsDmi0PcSwX4aEEwf6FFNnqLFoCG4FDRFwDiVf8kDrhp7WloKw-8yU9hPpfY0VrS8qK9oB-ZgryEcQRG6zjjINoV7Foinxfg6Pi55~M4s9NpSYetlCjP8TuQ__",
        name: "Lizzy Ann",
        online: false,
        change: +3,
      },
      {
        ranking: 2,
        avatar:
          "https://s3-alpha-sig.figma.com/img/6cf2/6015/f5608389b7c6856796ca724179207098?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEn0xV2Obi6rve7BV-5fvgtHuJ7sakMfAuIwazKjonyfmufKnPcW3BfXHF7caLg9T3bag9HXpRSTN6dvAzVg59Haqqk5l6XA6QzYi~IaNeXDqjGqhMuqBMgmaQi3BGRUhyhxEtFx-UwsJG9XA-dKBOnF692b89b5ldyOR7vdl0sEmcJ7WY4UyE54Tc~sQHlFw0j0pFm-mY8TQt2Fl-q8dMfFWoeXvJzLd4PhLbooihvWHS0Uk3p2DlmL2nI5XRMTjVostKVG2lQx4Nea7uWC3PmzYjxvzB3cca-onMqecHoPKjnvXlPEmSoFRRVlGN6av3kYsOh5uM1yQXIYJ0gFHQ__",
        name: "Johnson Sonn",
        online: false,
        change: -3,
      },
      {
        ranking: 3,
        avatar:
          "https://s3-alpha-sig.figma.com/img/59be/858e/d458c63c05c0c45aeaf0d75772d3fc66?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TB2M4ADYOSavTeRxsYrQHd0l5knXg2FXwzUtUM~ZEi1EeAkFmcAgYfzG9tSIi8HE-o77ME6Ys2c5OX2AbYD8YomRPc-IW6yXuDMe~0h1NgvkYxYCS6-wpaJqhu7V3zkoay3arQ1y-tTnBEv9JxgISuxSeMp7ptWu2B2~p9XYrOOq6Sg0gpdHbPDRDG9KGm3Dl9HxlO1VLbHyC-wvlBYWDaMJh04kBen0qm7N0kUhWb~1z60aWpvvC4V6iAxl-p4kM8kUBC6tS8MRoP7YaGBhx8vak9590Vg7eiEMabSB7lfmeCr7bH3Nv1dffKegFqCJvQErgbjsaQRJEZ6WohkmqQ__",

        name: "Bobby Bob",
        online: true,
        change: 0,
      },
      {
        ranking: 4,
        avatar:
          "https://s3-alpha-sig.figma.com/img/bd5c/81fe/e158efb0a5bc2ae0e192929835b09d60?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=em9cuO2~4OMlml7TDbkKItCn4MQl45ijlVLy36O2zBAJlYQJE0Ydzxq6xTFQYJ9umuPNiiU3UgRx6dKlY15MU3DMOkQ1d3c-A77N-faTegbOqryUSUk9dkoT9bcoQIUUWfXiIAV8NPAcZZt1cEn2UCBJqOuWKJ6h-0Fx8jU6Ol4XVyJ~c5u2cqiMkko0UDCzptxsXLlqwiKgZ6nvO9AW3kDzPbC3BkYGBIDw5dMe4Dkl-3K6CjJhDWIinv07XnVCt0XGym~En91WWlx0tus948Sm41~T9Rhu0Q2mRGcuA7282FjSiStm2rKNQvA5aUL9hzTx0iAKaidbM60r3iEVZw__",

        name: "Mattty Matt",
        online: false,
        change: +1,
      },
      {
        ranking: 5,
        avatar:
          "https://s3-alpha-sig.figma.com/img/f578/ebf6/e66204d114881722502ec2d04a69f2f8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CU-P53fe~ExiilbW4Y5G4TaKZdOHEAhkngfQZoSwZwxRRIUF2LCcQSppxbV~lZpHtX2uGwFHf55OjmEEqaMMEwlHuFGmpJu5wsWWof0RB6RyX5ff8nZyaiEz6Sbx7eNr0WOeYk-5ADSEl-En6ZrzLc7ly8aG0OlqNZbQgpbNpsB3baSCSkCX-8Jy0VlOmMJ-Hz6kx2oHxQs8KephfTN4O6pZRJ8mJlJB1PXK6uniGSvRUW4TxcegPxb7i0hG9zjb~QabynecFsiYWiTUOh7HSuM8R0CZIunpCMGl-7qkwwdn4MAuEm3VnRgSzSJeerCXopEOxmnW-WHTtTwIBTiZQA__",
        online: false,
        name: "Lessy  Lyle",
        change: -1,
      },
    ],
  },
];

export default leaderboards;

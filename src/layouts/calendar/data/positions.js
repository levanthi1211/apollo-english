const positions = [
  {
    name: "Position 1",
    bg: "#FFEBDA",
    color: "#FD7E14",
  },
  {
    name: "Position 2",
    bg: "#A5F4FF",
    color: "#006BA7",
  },
  {
    name: "Position 3",
    bg: "#FFCBF4",
    color: "#710084",
  },
];

const tabs = [
  {
    title: "All",
  },
  { title: "Position 1" },
  { title: "Position 2" },
];

const users = [
  {
    name: "Johnson Sonn",
    avatar:
      "https://s3-alpha-sig.figma.com/img/6cf2/6015/f5608389b7c6856796ca724179207098?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZjwzCDwMpf4oaRWh9DYISrzM-cuXoXMPqjtAL5V1LvIOEY1LNKaaSY-grD5ji~skbrxbFXgbogGTc3kU9sp1nCoWi2nK0RaSC2S-d8YZ-Gw4rZn8PQsY5RdGTcdzXl4s6~UYzCByS7CQuBc8UcMQFT3c6-x2N6VdVG4-7gjVYqZqNWs8yUsrd4~IWR9YvvpVZ7v3~5XHUu3FT1H7uq5QCfhbceSE3pU1jhGOUQVmJvyBcUPUjLZHIlgKozU~7LXeH4wTVuVEh23uwm97X0GVoayWZIcmuevVPGfKJ4BxIVbEoWuQ2-tH3JX6Ig-dndD9yd49RHRsC1pzdyGW2ctSLA__",
    tag: "Position 1",
  },
  {
    name: "Jack",
    avatar:
      "https://s3-alpha-sig.figma.com/img/59be/858e/d458c63c05c0c45aeaf0d75772d3fc66?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpyHfWoF2E0B34iYjHN7vCm36aOhNoA-k7~IduosiIBlrZP504StJJ1-2SayaBHHkU-KT3zwGpmkRe6vM8YblDIaxUZaHgbnhq7sxi8T1CRuTJqgbIHlInABtZvczVoTE4QTgIrGiDAOsL~4Ena4LRzBSLOkO-IRLgFUIYv85N094CEWPfPjiCugS09w4rEnexJ3p55Pe~UnDJkBgRWZLd5pKTq2HVR~j4kcc6qs1wmJ1VVSf6kC5nkX-SmcCBcXpzvJmvrMeDszGl4N7HSf2kUgLtOySujOMLWBeb7p5spTZiY2mdgDs40iBvU~SidYii8dkBrXNWhTfw5mqagRSw__",
    tag: "Position 1",
  },
  {
    name: "Abby",
    avatar:
      "https://s3-alpha-sig.figma.com/img/fcad/73e6/dc9d7414e6349ad730f3f9565e3136c5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dIPCXTQFfjf5AwdCgN-m7y8CwclbpE24zLToJG46v9SBIj25TtQANHTdvo0kPauG3W97P9JBe35bkZcb8rxvvECuEiXMxFT0IcBhcAFKiSW237Ia1ybBbudsIyyb2RHD0Ly3luZB5wPvmXpDEZMdvTB5V6EdHdRFMm~qxYUVl4QxLkGHh9L7~wq7pJK7p1fvbZ-TMZbC3PLWflEH5k9kmqxCtS6ZQHFv9RSPQyQ-Cid2k8XZqpcOHx5b9FZ7OIoFzAVVrYiD0bBGGZqdsBQHbuFAs3BVcDy5F-Zmv5QhtHoUaKJ6PCq6--xlVF~AlIWOfiUoJJQF3kt7HdDW9VJGgg__",
    tag: "Position 2",
  },
  {
    name: "Teddy",
    avatar:
      "https://s3-alpha-sig.figma.com/img/3a85/fd4d/36a0708142df9551e8895366c62a4dd1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJsTEq5HdZ5uKQulPJmlE-IhoVjug5B6zKYZ7qqQ6eWO-ZFOB-TdhN~~mCCYGkL-t-rw2vTrSMZLxt84xYDyRsRNfnVSMV0C8cvmx7IRp42IuSznXBctRlnjwwTV80X1JOqsjZ161NGN5-q6xIeVQ5HhH1hESYiglVIWv1E6TInZjIlYfHp5tlpcxTEiiG7p56Zk6k2fbU0bLJJyePs1CkawtZw8~U5YkpbTwRXjlYijrwMENm4J5a~q3qGLsEqfN-lF6z0UC-9ZAfWe1Vy620fiTWXmC5bsJsKWJs~RD2hCFnO-A1BNZQW5VsIOeK193IemG2u26cb7jnehWuPUwQ__",
    tag: "Position 2",
  },
  {
    name: "Ronald",
    avatar:
      "https://s3-alpha-sig.figma.com/img/2664/ae14/37c4720cdcff903b6a5f1283864192b1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azPPHSByA0ebkKJ~0hzx~xhLj2M6zeKGCdD5PCjFga3JoisJ6CKO-lhDNVakIUaLWuB2lcoalrnyGVtHea4kDDRutPZc~ZrHzuVqdfv7UdmO0n97Ra2-ywVaMjTJrbh~QCzlWYggwboaFW0~Eji70hjefilj0ZTFcqCHpH5h5bI~PHfMSUEOHZyyCqIbpGJKU6VzWKIDp5Wt2L9Pk0EqWeMVptgRzvZJRSuY1CyjmTumYCfp9y-l7tj~1QOs14chnzL87e995pd41igE4wlH-SuDTmAtnyKfV67Pd1cNqMIp1wKWgFD8xN4jDRxjaDByTIaojNX0s6bIHZzwNAH1Wg__",
    tag: "Position 3",
  },
];

export { positions, users, tabs };

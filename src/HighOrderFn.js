const HighOrderFn = () => {
  const users = [
    {
      id: 1,
      email: "john@mail.com",
      password: "changeme",
      name: "Jhon",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=7078",
      creationAt: "2023-02-27T01:11:07.000Z",
      updatedAt: "2023-02-27T01:11:07.000Z",
    },
    {
      id: 2,
      email: "maria@mail.com",
      password: "12345",
      name: "Maria",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=3476",
      creationAt: "2023-02-27T01:11:07.000Z",
      updatedAt: "2023-02-27T01:11:07.000Z",
    },
    {
      id: 3,
      email: "admin@mail.com",
      password: "admin123",
      name: "Admin",
      role: "admin",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=453",
      creationAt: "2023-02-27T01:11:07.000Z",
      updatedAt: "2023-02-27T01:11:07.000Z",
    },
    {
      id: 4,
      email: "test123@mail.com",
      password: "test1234",
      name: "test123@mail.com",
      role: "admin",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      creationAt: "2023-02-27T02:24:26.000Z",
      updatedAt: "2023-02-27T02:24:26.000Z",
    },
    {
      id: 5,
      email: "jasurkurbanov96@gmail.com",
      password: "welcome2",
      name: "Jasur",
      role: "customer",
      avatar: "some.com/png",
      creationAt: "2023-02-27T06:40:11.000Z",
      updatedAt: "2023-02-27T06:40:11.000Z",
    },
    {
      id: 6,
      email: "sad@gmail.com",
      password: "67978888888",
      name: "asd",
      role: "customer",
      avatar:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190710%2Fourmid%2Fpngtree-user-vector-avatar-png-image_1541962.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Favatar&tbnid=cPXYODj90LFBgM&vet=12ahUKEwiFyu7CxLX9AhXZB3cKHbrABC8QMygDegUIARDAAQ..i&docid=UUPtDBJdc_Dc4M&w=360&h=360&q=avatar%20png&ved=2ahUKEwiFyu7CxLX9AhXZB3cKHbrABC8QMygDegUIARDAAQ",
      creationAt: "2023-02-27T10:59:50.000Z",
      updatedAt: "2023-02-27T10:59:50.000Z",
    },
  ];
  const numbers = [
    2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ];
  /* for (let i = 0; i < users.length; i++) {
    console.log(users[i], "output:-- for loop");
  }*/
  /*
  //forEach...
  users.forEach((user, index) => {
    console.log(user.name, index);
  });

  users.forEach((user, index) => console.log(user.name, index));
  */

  //filter...

  /*
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 25) {
      console.log(numbers[i]);
    }
  }
  
  const customize = numbers.filter((number) => number > 20);
  console.log(customize);
  
  const roles = users.filter((user) => user.role === "admin");
  console.log(roles);
  */

  //map function

  users.map((user, index) => console.log(user.name, index));

  return <>{}</>;
};

export default HighOrderFn;

const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: "mehran@gmail.com",
      });
    }, 4000);
  });
};

const userCourses = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 21, title: "Js Expert", price: "Free" },
        { id: 34, title: "Redux Expert", price: "Free" },
      ]);
    }, 3000);
  });
};

const mainCourseInfo = (courseTitle) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
              id: 34,
              title: "Redux Expert",
              price: "Free",
              teacher: "Saeedi rad",
              student: 2291,
            });
          }, 2000);
    });
  
};

console.log("site loded");

// const loginInfos = userLogin("mehran", "0101", (userObject) => {
//   console.log("user log: ", userObject);
//   userCourses(userObject.username, (userAllCourses) => {
//     console.log("User Courses", userAllCourses);

//     mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
//       console.log("main Course Info: ", mainInfos);
//     });
//   });
// });

userLogin()
    .then(userObject => userCourses(userObject.username))
    .then(userAllCourses => mainCourseInfo(userAllCourses[1].title))
    .then( mainInfos => console.log(mainInfos))


console.log("login was success");

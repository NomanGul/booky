const randomQuery = () => {
  const query = [
    "React",
    "Node js",
    "Express js",
    "React Native",
    "Javascript",
    "HTML",
    "CSS",
    "Progressive Web App",
    "PWA",
    "Firebase",
    "Git",
    "MERN",
    "Web Designing",
    "Web Development",
    "SPA",
    "Open Source",
    "Redux",
    "Redux Saga"
  ];

  return query[Math.floor(Math.random() * query.length)];
};
export default randomQuery;

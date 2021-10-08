import { Link } from "react-router-dom";

const Lessons = () => {
  const lesson_map = [
    {
      path: "/lesson-one",
      name: "Hobbies",
    },
    {
      path: "/lesson-two",
      name: "School",
    },
  ];

  return (
    <div className="home">
      <div id="content">
        {lesson_map.map(({ path, name }) => (
          <Link to={path}>
            <li>{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lessons;

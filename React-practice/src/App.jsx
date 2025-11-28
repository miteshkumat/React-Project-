import React from "react";
import Card from "./components/Card";

const App = () => {
  const companies = [
    {
      id: 1,
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      daysAgo: "4 days ago",
      position: "Senior UI/UX Designer",
      type: ["Part-Time", "Senior Level"],
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      company: "Apple",
      daysAgo: "2 days ago",
      position: "Frontend Developer",
      type: ["Full-Time", "Mid Level"],
      salary: "$90/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      logo: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
      company: "Google",
      daysAgo: "1 day ago",
      position: "Product Designer",
      type: ["Full-Time", "Senior Level"],
      salary: "$150/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXSm9P-VjKcP3F0S029OPFlHdLXUTmPzZ1Sv2sonc1bdBiCprsCaUekizUpZAVGi2S5c&usqp=CAU",
      company: "Meta",
      daysAgo: "5 days ago",
      position: "React Developer",
      type: ["Remote", "Junior Level"],
      salary: "$70/hr",
      location: "Remote",
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepKeWBgMPzXoyqkUWTvlP3SwegF5To2EYow&s",
      company: "Microsoft",
      daysAgo: "3 days ago",
      position: "Backend Engineer",
      type: ["Full-Time", "Senior Level"],
      salary: "$140/hr",
      location: "Noida, India",
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdIKhjLy_qfZbEbnANDwC38Xzf13WoDyBPA&s",
      company: "Tesla",
      daysAgo: "6 days ago",
      position: "UI Designer",
      type: ["Part-Time", "Junior Level"],
      salary: "$60/hr",
      location: "Pune, India",
    },
    {
      id: 7,
      logo: "data:image/png;base64,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",
      company: "IBM",
      daysAgo: "8 days ago",
      position: "Full Stack Developer",
      type: ["Full-Time", "Mid Level"],
      salary: "$110/hr",
      location: "Delhi, India",
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt63wr2CeWRM-I0Cuwp85LrZ1Z4rnIrFl4jw&s",
      company: "Samsung",
      daysAgo: "7 days ago",
      position: "Mobile App Developer",
      type: ["Contract", "Mid Level"],
      salary: "$95/hr",
      location: "Chennai, India",
    },
    {
      id: 9,
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Oracle-logo.png",
      company: "Oracle",
      daysAgo: "2 days ago",
      position: "Database Engineer",
      type: ["Full-Time", "Senior Level"],
      salary: "$130/hr",
      location: "Gurgaon, India",
    },
    {
      id: 10,
      logo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
      company: "Netflix",
      daysAgo: "9 days ago",
      position: "UI Engineer",
      type: ["Remote", "Mid Level"],
      salary: "$105/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {companies.map(function (elem) {
        return (
          <Card
            brandlogo={elem.logo}
            company={elem.company}
            daysAgo={elem.daysAgo}
            position={elem.position}
            type={elem.type}
            salary={elem.salary}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;

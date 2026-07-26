import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      companyName: "Google",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
      datePosted: "2 days ago",
      post: "Senior Frontend Developer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$65/hr",
      location: "Bengaluru, India",
    },
    {
      companyName: "Microsoft",
      brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      companyName: "Amazon",
      brandLogo:
        "https://th.bing.com/th/id/OIP.AuggztWv8Hwzt2zjbJcztAHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$35/hr",
      location: "Mumbai, India",
    },
    {
      companyName: "Netflix",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png",
      datePosted: "4 days ago",
      post: "DevOps Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$80/hr",
      location: "Remote, India",
    },
    {
      companyName: "Spotify",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
      datePosted: "5 days ago",
      post: "Data Analyst",
      tag1: "Part time",
      tag2: "Mid level",
      pay: "$40/hr",
      location: "Mumbai, India",
    },
    {
      companyName: "Adobe",
      brandLogo:
        "https://www.bing.com/th/id/OIP.Xc79egD4HYqtOXjTgq_4fwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgMag&rm=2",
      datePosted: "1 day ago",
      post: "Product Designer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      companyName: "Meta",
      brandLogo:
        "https://th.bing.com/th/id/OIP.Tga1xjCwFhIXBGZHDif92AHaEK?w=315&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$90/hr",
      location: "Gurugram, India",
    },
    {
      companyName: "Uber",
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5969/5969072.png",
      datePosted: "3 days ago",
      post: "QA Automation Specialist",
      tag1: "Part time",
      tag2: "Junior level",
      pay: "$25/hr",
      location: "Bengaluru, India",
    },
    {
      companyName: "Zomato",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      datePosted: "6 days ago",
      post: "Technical Content Writer",
      tag1: "Part time",
      tag2: "Junior level",
      pay: "$20/hr",
      location: "Delhi, India",
    },
    {
      companyName: "Swiggy",
      brandLogo:
        "https://th.bing.com/th/id/OIP.EuN0YR4JXUdYkbPGVa9KhQHaFj?w=223&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      datePosted: "1 week ago",
      post: "Mobile App Developer (Flutter)",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$50/hr",
      location: "Pune, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              logo={elem.brandLogo}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;

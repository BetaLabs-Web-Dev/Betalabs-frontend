import React from "react";
import CardContainer from "./CardContainer";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  const cardsData = [
    {
      id: 1,
      title: "CARD 1",
      content: "Clark Kent",
      imgUrl: "https://unsplash.it/200/200",
    },
    {
      id: 2,
      title: "CARD 2",
      content: "Bruce Wayne",
      imgUrl: "https://unsplash.it/201/200",
    },
    {
      id: 3,
      title: "CARD 3",
      content: "Peter Parker",
      imgUrl: "https://unsplash.it/200/201",
    },
    {
      id: 4,
      title: "CARD 4",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title: "CARD 5",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title: "CARD 6",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title: "CARD 7",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    },
    {
      id: 8,
      title: "CARD 8",
      content: "Steven Rogers",
      imgUrl: "https://unsplash.it/199/200",
    },
    {
      id: 9,
      title: "CARD 9",
      content: "Bruce Banner",
      imgUrl: "https://unsplash.it/200/198",
    },
    {
      id: 10,
      title: "CARD 10",
      content: "Vincent Strange",
      imgUrl: "https://unsplash.it/198/199",
    },
  ];

  return (
    <div className="flex flex-col items-center m-[20px] my-10 font-global">
      <h1 className="text-[48px] text-[#01DEDE] font-semibold m-3">Our Team</h1>
      <CardContainer cards={cardsData} />
    </div>
  );
};

export default MeetTheTeam;

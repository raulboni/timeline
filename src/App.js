import Timeline from "./components/timeline/Timeline";

function App() {
  let events = [
    {
      name: "first event",
      date: "2012-03-01",
      positionY: "0",
    },

    { name: "second event", date: "2011-04-20", positionY: "3rem" },
  ];

  let periods = [
    {
      name: "first period",
      startDate: "2002-01-01",
      endDate: "2007-12-16",
      positionY: "3rem",
      bg: "lightyellow",
    },
  ];

  return (
    <div className="container">
      <Timeline
        title="My Timeline"
        startDate="1996-01-01"
        endDate="2022-01-01"
        bg="lightgrey"
        height="6rem"
        events={events}
        periods={periods}
        intervals={{ showIntervals: true, interval: 5 }}
      ></Timeline>
    </div>
  );
}

export default App;

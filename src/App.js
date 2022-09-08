import Timeline from "./components/timeline/Timeline";

function App() {
  let events = [
    {
      name: "first event",
      date: { year: 40, month: 1, day: 1 },
      positionY: "0",
    },
  ];

  let periods = [
    {
      name: "first period",
      startDate: { year: 10, month: 1, day: 1 },
      endDate: { year: 50, month: 1, day: 1 },
      positionY: "3rem",
      bg: "lightyellow",
    },
  ];

  return (
    <div className="container">
      <Timeline
        title="My Timeline"
        startDate={{ year: 0, month: 1, day: 1 }}
        endDate={{ year: 200, month: 1, day: 1 }}
        bg="lightgrey"
        height="6rem"
        events={events}
        periods={periods}
        intervals={{ showIntervals: true, interval: 50 }}
      ></Timeline>
    </div>
  );
}

export default App;

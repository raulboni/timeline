import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";
import {
  StyledTimeline,
  StyledEvent,
  StyledEventIcon,
  StyledPeriod,
  StyledInterval,
} from "./StyledComponents";

Date.prototype.toTemporalInstant = toTemporalInstant;

function getDays(date1, date2) {
  const start = Temporal.PlainDate.from(date1);
  const end = Temporal.PlainDate.from(date2);
  const days = start.until(end).days;
  return days;
}

function getYears(date1, date2, interval) {
  const year1 = Number(date1.split("-")[0]);
  const year2 = Number(date2.split("-")[0]);
  const years = year2 - year1;
  let arr = [];
  for (let i = 0; i < years; i = i + interval) {
    arr.push({ date: `${year1 + i}-01-01`, year: year1 + i });
  }
  return arr;
}

const Timeline = ({
  title,
  startDate,
  endDate,
  bg,
  height,
  events,
  periods,
  intervals,
}) => {
  const [length, setLength] = useState(null);

  useEffect(() => {
    if (getDays(startDate, endDate) > 0) {
      setLength(getDays(startDate, endDate));
    } else {
      alert("Start date should come before than end date");
    }
  }, [startDate, endDate]);

  return (
    <>
      <h1>{title && title}</h1>
      <StyledTimeline length={length} bg={bg} height={height}>
        {intervals &&
          getYears(startDate, endDate, intervals.interval).map((i) => (
            <StyledInterval key={i.year} positionX={getDays(startDate, i.date)}>
              {i.year}
            </StyledInterval>
          ))}
        {events &&
          events.map((e) => (
            <StyledEvent
              key={e.name}
              positionY={e.positionY}
              positionX={getDays(startDate, e.date)}
            >
              <StyledEventIcon /> {e.name}
            </StyledEvent>
          ))}

        {periods.map((p) => (
          <StyledPeriod
            key={p.name}
            start={getDays(startDate, p.startDate)}
            end={getDays(startDate, p.endDate)}
            positionY={p.positionY}
            bg={p.bg}
          >
            {p.name}
          </StyledPeriod>
        ))}
      </StyledTimeline>
    </>
  );
};

export default Timeline;

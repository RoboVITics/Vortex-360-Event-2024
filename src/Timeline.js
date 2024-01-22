import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./Timeline.css";

/*
const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageAddresses = [  
//    timelineGif,
    gff,

    // Add more image addresses as needed
  ];

  const targetTimes = [
    "2024-01-06T21:05:00",
    "2024-01-07T12:30:00",
    "2024-01-08T15:45:00",
  ]; // Specify target date and times

  useEffect(() => {
    const updateIndex = () => {
      const currentTime = new Date();
      const targetTime = new Date(targetTimes[currentIndex]);

      if (currentTime >= targetTime) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageAddresses.length);
      }
    };

    const intervalId = setInterval(updateIndex, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, imageAddresses.length, targetTimes]);

  return (
    <div id="timeline" style={{ backgroundColor: "#000" }}>
      <div className="container px-4 py-5">
        <h2 className="border-bottom">Timeline</h2>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <img src="https://picsum.photos/1000" />
      </motion.div>
    </div>
  );
};

export default Timeline;*/


const Timeline1 = () => {
  return (<>
    <hr id="timeline" style={{ marginBottom: "1.5rem", visibility: "hidden" }} />
    <h2>Timeline</h2>

    <h3>Day 1</h3>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Participation Registration</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Introduction to Event</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          11:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Introduction to Machine Design</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          8:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Ideation Continues</TimelineContent>
      </TimelineItem>
    </Timeline>
    <h3>Day 2</h3>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          1:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>First Ideation Check</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          4:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Crisis Challenge</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Review : One</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          8:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Project Showcase</TimelineContent>
      </TimelineItem>
    </Timeline>

    <h3>Day 3</h3>
    <Timeline position="alternate">
 
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          1:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Review : Two</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          12:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Review : Three</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          4:15 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Final Pitches</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color=" grey">
          7:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Results</TimelineContent>
      </TimelineItem>
    </Timeline>

  </>
  );
};

export default Timeline1;
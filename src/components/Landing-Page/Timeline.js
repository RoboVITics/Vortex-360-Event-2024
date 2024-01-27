import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timeline1;

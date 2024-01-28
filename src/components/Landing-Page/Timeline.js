import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Timeline1 = () => {
  return (
    <>
      <hr
        id="timeline"
        style={{ marginBottom: "1.5rem", visibility: "hidden" }}
      />
      <h2 style={{ textAlign: "center" }}>Timeline</h2>

      <h3
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Day 1
      </h3>
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
      <h3
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Day 2
      </h3>
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

      <h3
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Day 3
      </h3>
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

import React from "react";
import {
    TimelineContainer,
    Timeline,
    Title,
    TimelineItem,
    Line,
    Point,
    DateLabel,
} from "../styles/about/Timeline.styles";
const timelineData = [
    { year: 1998, month: "04", event: "출생" },
    { year: 2014, month: "03", event: "고등학교 입학" },
    { year: 2017, month: "02", event: "고등학교 졸업" },
    { year: 2018, month: "03", event: "대학교 입학" },

    { year: 2024, month: "02", event: "대학교 졸업" },
];
const calculatePosition = (
    year: number,
    startYear: number,
    endYear: number
) => {
    const totalYears = endYear - startYear;
    let relativePosition = (year - startYear) / totalYears;

    if (year === 2018) {
        relativePosition += 0.05;
    } else if (year === 2014) {
        relativePosition -= 0.1;
    } else if (year === 2017) {
        relativePosition -= 0.03;
    }

    return `${relativePosition * 90}%`;
};

const TimelineComponent: React.FC = () => {
    const startYear = timelineData[0].year;
    const endYear = timelineData[timelineData.length - 1].year;
    return (
        <TimelineContainer>
            <Title>TimeLine</Title>
            <Timeline>
                <Line />
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        style={{
                            left: calculatePosition(
                                item.year,
                                startYear,
                                endYear
                            ),
                        }}
                    >
                        <Point
                            data-event={`${item.year}년 ${item.month}월 - ${item.event}`}
                        />
                        <DateLabel>
                            {item.year}.{item.month}
                        </DateLabel>
                    </TimelineItem>
                ))}
            </Timeline>
        </TimelineContainer>
    );
};

export default TimelineComponent;

import React, { Component } from "react";
import { ResponsiveBar } from "@nivo/bar";
export class CatagoryStatistics extends Component {
  render() {
    const data = [
      {
        country: "논문",
        "석사/1": 13,
        "석사/2": 18,
        "석사/2+": 187,
        "박사/1~2": 50,
        "박사/2~3": 196,
        "박사/4+": 141,
      },
      {
        country: "국제 논문",
        "석사/1": 129,
        "석사/2": 145,
        "석사/2+": 36,
        "박사/1~2": 126,
        "박사/2~3": 54,
        "박사/4+": 79,
      },
      {
        country: "세미나",
        "석사/1": 34,
        "석사/2": 29,
        "석사/2+": 116,
        "박사/1~2": 174,
        "박사/2~3": 2,
        "박사/4+": 191,
      },
      {
        country: "특허",
        "석사/1": 35,
        "석사/2": 45,
        "석사/2+": 110,
        "박사/1~2": 39,
        "박사/2~3": 120,
        "박사/4+": 125,
      },
      {
        country: "AI",
        "석사/1": 175,
        "석사/2": 122,
        "석사/2+": 20,
        "박사/1~2": 111,
        "박사/2~3": 75,
        "박사/4+": 106,
      },
      //   {
      //     country: "AL",
      //     "석사/1": 57,
      //     석사/2: 178,
      //     sandwich: 1,
      //     "박사/1~2": 114,
      //     "박사/2~3": 70,
      //     "박사/4+": 130,
      //   },
      //   {
      //     country: "AM",
      //     "석사/1": 158,
      //     석사/2: 36,
      //     sandwich: 94,
      //     "박사/1~2": 140,
      //     "박사/2~3": 127,
      //     "박사/4+": 55,
      //   },
    ];
    return (
      <ResponsiveBar
        data={data}
        keys={[
          "석사/1",
          "석사/2",
          "석사/2+",
          "박사/1~2",
          "박사/2~3",
          "박사/4+",
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.15}
        groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "박사/2~3",
            },
            id: "dots",
          },
          {
            match: {
              id: "석사/2+",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Catagory/Diploma(grage)",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          //   legend: "Catagory",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    );
  }
}

export default CatagoryStatistics;

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

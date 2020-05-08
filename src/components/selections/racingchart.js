import React, { useRef, useEffect } from "react";
import { select, scaleBand, scaleLinear, max} from "d3";
import useResizeObserver from "./useresizeobserver";

function RacingBarChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  
  // console.log(data.length);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // sorting the data

    
    // data.sort((a, b) => b.value - a.value);
   

    
    const xScale = scaleBand()
     
      .domain(data.map((value, index) => index)) // [0,1,2,3,4,5]
      .range([500,dimensions.width]); // [0, 200]

    const yScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)]) // [0, 65 (example)]
      .range([0, dimensions.height-200]); // [0, 400 (example)]

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter.append("rect")
      )
      .attr("fill", entr => entr.color)
      .attr("class", "bar")
      .attr("x", (entry, index) => xScale(index))   
      .transition()
      .attr("width",xScale.bandwidth()/1.4)
      
      .attr("y", 0)

      .attr("height", entry => yScale(entry.value))
      .attr("transform",(entry,index)=>"rotate(180,"+ xScale(index) +`,${dimensions.height/2.8})`);

    // draw the labels
    svg
      .selectAll(".label")
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter
          .append("text")
          .attr(
            "x",
            (entry, index) => xScale(index) -xScale.bandwidth()/2
          )
          
      )
      .text(entry =>entry.value)
      .attr("class", "label")
      .attr("y",  entry => dimensions.height-yScale(entry.value)-160)
      .attr("height", entry => yScale(entry.value))
      .transition()
      .attr("x", (entry, index) => xScale(index)-xScale.bandwidth()/2 )
      
  }, [data, dimensions]);
// console.log(Math.max([...data].value))
  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
         <svg ref={svgRef}></svg>
    </div>
  );
}

export default RacingBarChart;
import React from "react";
import DatePicker from "react-datepicker";
// import styled from "styled-components";
// import "/react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Dateselecter2 extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        width="73px"
        height="20px"
        border-style="hidden"
      />
    );
  }
}

export default Dateselecter2;

// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

// const Date = () => {

//     const startDate = new Date()
//     const [date, setDate] = useState(startDate)
//     const handleChange = date => {
//         setDate(startDate => date)
//     }

//     return(
//       <DatePicker
//         selected={startDate}
//         onChange={handleChange}
//       />
// }

// export default Date;
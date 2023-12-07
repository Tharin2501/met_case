import { useEffect, useState } from "react";
import "./App.css";
import { notification } from "antd";
import Time from "./Time";
import Temperature from "./Temperature";

type TimeSlot = {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
      };
    };
  };
};

function App() {
  const [timeSlots, setLastTimeSlots] = useState<TimeSlot[]>();

  const customHeaders = {
    headers: {
      "User-Agent": "Your_Custom_User_Agent_Here",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58",
      customHeaders
    )
      .then((response) => {
        if (!response.ok) {
          return notification.error({
            message: `Message: ${response}`,
            duration: 3,
          });
        }
        return response.json();
      })
      .then((data) => {
        setLastTimeSlots(data.properties.timeseries.slice(-3));
      })
      .catch((error) => {
        return notification.error({
          message: `Message: ${error.message}`,
          duration: 2.5,
        });
      });
  }, []);

  if (!timeSlots) {
    return <h1>No timeslots found</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Time data={timeSlots} />
      <Temperature data={timeSlots} />
    </div>
  );
}

export default App;

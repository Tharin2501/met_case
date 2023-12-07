import TemperatureDataItem from "./types/temperatureType";

const Time = ({ data }: { data: TemperatureDataItem[] | undefined }) => {
  if (!data) {
    return <div>No time found</div>;
  }

  return (
    <ul style={{ listStyle: "none" }}>
      <h2>Time: </h2>
      {data.map((item) => (
        <li key={item.time}>
          <p>Time: {item.time}</p>
        </li>
      ))}
    </ul>
  );
};

export default Time;

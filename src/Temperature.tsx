import TemperatureDataItem from "./types/temperatureType";

const Temperature = ({ data }: { data: TemperatureDataItem[] | undefined }) => {
  if (!data) {
    return <div>No temperature data found</div>;
  }

  return (
    <ul style={{ listStyle: "none" }}>
      <h2>Temperature: </h2>
      {data.map((item) => (
        <li key={item.time}>{item.data.instant.details.air_temperature}</li>
      ))}
    </ul>
  );
};

export default Temperature;

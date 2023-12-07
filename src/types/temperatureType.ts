interface TemperatureDataItem {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
      };
    };
  };
}

export default TemperatureDataItem;

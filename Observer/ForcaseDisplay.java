public class ForecastDisaplay implements Observer, DisplayElement {
    WeatherData weatherData;
    private float currentPressure = 29.92f;
    private float lastPressure;

   public ForecastDisaplay(WeatherData weatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
   } 

   public void update() {
    lastPressure = currentPressure;
    currentPressure = weatherData.getPressure();
    display();
   }

   public void display() {}
}


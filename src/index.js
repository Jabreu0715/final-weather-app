let apiKey = "23ftbd4aecd5fa6f4304ea2800dofdbf";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(url).then(displayTemperature);

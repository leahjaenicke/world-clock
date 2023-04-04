function currentime() {
  let londontimezone = document.querySelector("#londonTime");
  let londondatezone = document.querySelector("#londonDate");

  let currentmoment = moment().tz("Europe/London");

  londontimezone.innerHTML = currentmoment.format("HH:mm:ss");
  londondatezone.innerHTML = currentmoment.format("ddd D MMM");

  let newyorktimezone = document.querySelector("#newYorkTime");
  let newyorkdatezone = document.querySelector("#newYorkDate");

  let currentmomentny = moment().tz("America/New_York");

  newyorktimezone.innerHTML = currentmomentny.format("HH:mm:ss");
  newyorkdatezone.innerHTML = currentmomentny.format("ddd D MMM");

  let telavivtimezone = document.querySelector("#telAvivTime");
  let telavivdatezone = document.querySelector("#telAvivDate");

  let currentmomenttl = moment().tz("Asia/Tel_Aviv");

  telavivtimezone.innerHTML = currentmomenttl.format("HH:mm:ss");
  telavivdatezone.innerHTML = currentmomenttl.format("ddd D MMM");
}

currentime();
setInterval(currentime, 1000);

function newcity(event) {
  let originalplace = event.target.value;
  if (event.target.value === "location") {
    originalplace = moment.tz.guess();
  }
  let capital = originalplace.split("/")[1];
  let citychange = document.querySelector(".cities");
  let newtime = moment().tz(originalplace);

  citychange.innerHTML = `
    <div class="capital middle">
      <h2>${capital}</h2>
      <div class="time">${newtime.format("HH:mm:ss")}</div>
      <div class="date">${newtime.format("ddd D MMM")}</div>
    </div>
    `;

  let h5 = document.querySelector("h5");
  h5.innerHTML = "⬇️ back to homepage";
}

let citydropdown = document.querySelector("#city");
citydropdown.addEventListener("change", newcity);

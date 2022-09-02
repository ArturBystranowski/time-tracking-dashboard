const time = document.querySelectorAll(".time");
const timePrevious = document.querySelectorAll(".time-previous");
const timeSelect = document.querySelectorAll(".menu-item");

const removeActiveClass = () =>
	timeSelect.forEach((select) => select.classList.remove("active"));

const showDaily = () => {
	fetch("./data.json")
		.then((res) => res.json())
		.then((res) => {
			removeActiveClass();
			timeSelect[0].classList.add("active");
			for (i = 0; i < res.length; i++) {
				time[i].innerHTML = res[i].timeframes.daily.current + "hrs";
				timePrevious[i].innerHTML =
					"Yesterday - " + res[i].timeframes.daily.previous + "hrs";
			}
		});
};

const showWeekly = () => {
	fetch("./data.json")
		.then((res) => res.json())
		.then((res) => {
			removeActiveClass();
			timeSelect[1].classList.add("active");
			for (i = 0; i < res.length; i++) {
				time[i].innerHTML = res[i].timeframes.weekly.current + "hrs";
				timePrevious[i].innerHTML =
					"Last week - " + res[i].timeframes.weekly.previous + "hrs";
			}
		});
};

const showMonthly = () => {
	fetch("./data.json")
		.then((res) => res.json())
		.then((res) => {
			removeActiveClass();
			timeSelect[2].classList.add("active");
			for (i = 0; i < res.length; i++) {
				time[i].innerHTML = res[i].timeframes.monthly.current + "hrs";
				timePrevious[i].innerHTML =
					"Last month - " +
					res[i].timeframes.monthly.previous +
					"hrs";
			}
		});
};

timeSelect[0].addEventListener("click", showDaily);
timeSelect[1].addEventListener("click", showWeekly);
timeSelect[2].addEventListener("click", showMonthly);

showDaily();

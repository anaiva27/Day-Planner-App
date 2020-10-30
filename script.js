// display current day/month

$("#currentDay").text(moment().format('dddd, MMMM Do'));

// array of containers to add text, initially set to an empty value
var arrText = [{ textarea: "#9AM", text: "" },
{ textarea: "#10AM", text: "" },
{ textarea: "#11AM", text: "" },
{ textarea: "#12PM", text: "" },
{ textarea: "#1PM", text: "" },
{ textarea: "#2PM", text: "" },
{ textarea: "#3PM", text: "" },
{ textarea: "#4PM", text: "" },
{ textarea: "#5PM", text: "" },
{ textarea: "#6PM", text: "" },
];

// grab textarea value, add to local storage
var storedData = JSON.parse(localStorage.getItem("keyTextarea"));
for (i = 0; i < storedData.length; i++) {
    $(storedData[i].textarea).val(storedData[i].text);
}

$("button").click(function () {
    for (j = 0; j < arrText.length; j++) {
        var addValueID = $(this).prev().attr("id");
        var addValue = $(this).prev().val();
        if (arrText[j].textarea == "#" + addValueID) {
            arrText[j].text = addValue;
        }
    }

    // grabbing value of the users input, saving it to local storage
    localStorage.setItem("keyTextarea", JSON.stringify(arrText));
})

// compare times, add color classes

var timeForm = "hh:mm:ss";
var arrTimes = [{ textarea: $("#9AM"), begin: "09:00:00", end: "09:59:59" },
{ textarea: $("#10AM"), begin: "10:00:00", end: "10:59:59" },
{ textarea: $("#11AM"), begin: "11:00:00", end: "11:59:59" },
{ textarea: $("#12PM"), begin: "12:00:00", end: "12:59:59" },
{ textarea: $("#1PM"), begin: "13:00:00", end: "13:59:59" },
{ textarea: $("#2PM"), begin: "14:00:00", end: "14:59:59" },
{ textarea: $("#3PM"), begin: "15:00:00", end: "15:59:59" },
{ textarea: $("#4PM"), begin: "16:00:00", end: "16:59:59" },
{ textarea: $("#5PM"), begin: "17:00:00", end: "17:59:59" },
{ textarea: $("#6PM"), begin: "18:00:00", end: "18:59:59" },
];

colorSwitch();
function colorSwitch() {
    for (i = 0; i < arrTimes.length; i++) {
        let colorBefore = moment(arrTimes[i].begin, timeForm);
        let colorAfter = moment(arrTimes[i].end, timeForm);
        if (moment().isBetween(colorBefore, colorAfter)) {
            arrTimes[i].textarea.addClass("present");
        } else if (moment().isBefore(colorBefore)) {
            arrTimes[i].textarea.addClass("future");
        } else if (moment().isAfter(colorAfter)) {
            arrTimes[i].textarea.addClass("past");
        }
    }
}

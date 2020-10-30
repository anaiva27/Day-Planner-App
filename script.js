// display current day/month
$("#currentDay").text(moment().format('dddd, MMMM Do'));

var row = $(".row");

// grab users input value, add to local storage
$("button").click(function () {
    var addValueID = $(this).prev().attr("id");
    var addValue = $(this).prev().val();
    localStorage.setItem(addValueID, addValue);
})

// retrieve text from storage to the screen
for (i = 0; i < row.length; i++) {
    $("#"+i).val(localStorage.getItem(i))
}

// compare times, add color classes
var timeForm = "hh:mm:ss";
var arrTimes = [{ textarea: $("#0"), begin: "09:00:00", end: "09:59:59" },
{ textarea: $("#1"), begin: "10:00:00", end: "10:59:59" },
{ textarea: $("#2"), begin: "11:00:00", end: "11:59:59" },
{ textarea: $("#3"), begin: "12:00:00", end: "12:59:59" },
{ textarea: $("#4"), begin: "13:00:00", end: "13:59:59" },
{ textarea: $("#5"), begin: "14:00:00", end: "14:59:59" },
{ textarea: $("#6"), begin: "15:00:00", end: "15:59:59" },
{ textarea: $("#7"), begin: "16:00:00", end: "16:59:59" },
{ textarea: $("#8"), begin: "17:00:00", end: "17:59:59" },
{ textarea: $("#9"), begin: "18:00:00", end: "18:59:59" },
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

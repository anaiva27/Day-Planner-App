# Day Planner Application

## Description 

The client has requested a simple calendar planner application for efficient time management, that saves events for each hour. The program should easy to use, also each time block needs to be colored in different colors for the past, present and future tasks. The events have to stay inside the blocks, after being saved, even if the browser window will be closed and reloaded.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Credits](#credits)
* [License](#license)

## Installation

To complete this task, various libraries needed to be installed, such as jQuery, Moment.js and Bootstrap to ensure the best functionality and appropriate styles. Also we added links to fonts from [google.com](https://fonts.googleapis.com/) and [fontawesome.com](https://fontawesome.com/). Google Chrome Dev Tools were used to test the applications and to make sure that everything is working properly. Software ScreenCastify was installed to capture the screenshots of the application to present it and explain the usage. The file structure contains index, style and script files, written in HTML, CSS and JavaScript languages. Quality comments added for better understanding the code, in case it needs to be modified in the future.

## Usage

After the application has been launched, the user will be presented with a page, containing current day and a month, and the times blocks below for each business hour (9am-6pm) and fleids to be filled up with various tasks. Each filled has a background color that represents certain timeframes - gray for block that are in the past, pink for the current hour and green for the time blocks in the future.<br>
The client can click on any container to add a task, then on a blue button to save the event to the local storage, where it would stay even if the the page will be reloaded or brower window will be closed, until the client will decide to delete it or to modify it.<br>
To get the current time, we used a script template from the Moment.js library. To ensure the best functionality and easy execution the jQuery library was implemented in the code structure. The application is launched at live URL, it's very intuitive, runs with no errors and resembles the provided mock-up functionality. The repository has an easy to navigate structure. Every file containes discriptive comments and follows the best practices of naming conventions. <br><br>

Attached below the screenshots of the 100% functional applicaton:<br>
![User's interface](assets/Screenshot.png)

<br>

![Events, saved to local storage ](assets/Screenshot2.png)

<br>

## Links

[Day Planner App](https://anaiva27.github.io/Day-Planner-App/) <br>
[GitHub repository](https://github.com/anaiva27/Day-Planner-App)<br>
Libraries:<br>
[jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js) <br>
[Moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js) <br>

## Credits

Useful articles about Javascript functions, statements and loops, local storage:<br>
[jQuery API](https://api.jquery.com/) <br>
[Moment.js tutorial](https://www.sitepoint.com/managing-dates-times-using-moment-js/) <br>
[JavaScript objects](https://www.w3schools.com/js/js_objects.asp)<br>
[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)<br>
[CSS selectors](https://www.w3schools.com/css/css_selectors.asp)

## License

MIT License

Copyright &copy; 2020 Anastasia Ivashchenko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.





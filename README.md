# Sprinter

![Node.js CI](https://github.com/mwalter/Sprinter/workflows/Node.js%20CI/badge.svg)

Sprinter is a tool to help agile teams calculating their availability.

## Prerequisites

In order to run Sprinter all you need is a webserver or webhosting able so serve HTML and JavaScript files.

## Installation

Download the release distribution files from the [releases page](https://github.com/mwalter/Sprinter/releases), unpack the files and
upload them to your webserver. 

## Usage

![Sprinter](https://i.imgur.com/jjQxTGK.png)

1. First select the sprint length of your team in weeks. Default is two weeks.<br/>
2. [Optional] Provide an amount of time the teams is not working on the project. For example, you can exclude time the team has to
spend for meetings or non-project related work during the sprint. This amount is substracted from the team's total availability.
Default is zero percent.
3. Add the availability of each team member by entering her availability in days and hitting the `Enter` key or clicking the Add button.
4. The teams' availability will be calculated in the blue area.

The calculated availability is shown in the blue area on the right. There are three values:
* The calculated availability of your team in days.
* The maximum number of days the team could spend in the sprint (based on 5 workdays per week).
* The ratio between the first two values.

You can remove team members from the list by clicking the Remove button next to a team member.<br/>
To reset the form you have to click the Reset button.

A live demo of Sprinter can be found [here](https://sprinter.newinstance.ch/).

## Technology

The app is based on [Angular](http://angular.io) and [Bootstrap](https://getbootstrap.com/) UI components.

## Contributing

Feel free to contribute to Sprinter by proposing improvements, committing code and making pull requests.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sprinter is licensed under the MIT License - see the LICENSE file for details.

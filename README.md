# Sprinter

![Node.js CI](https://github.com/mwalter/Sprinter/workflows/Node.js%20CI/badge.svg)

Sprinter is an Angular application to calculate the total availability of agile teams.

## Prerequisites

In order to run Sprinter all you need is a webserver able so serve HTML and JavaScript files.

## Installation

Download the release distribution files from the [releases page](https://github.com/mwalter/Sprinter/releases), unpack the files and
upload them to your webserver. 

## Usage

![Sprinter](https://i.imgur.com/75eAL00.png)

1. First select the sprint duration of your team in weeks. Default is two weeks.<br/>
2. [Optional] If there are any public holidays during this sprint you can enter the number in the holidays field. Note: As soon as
you add the first team member the holidays value can't be changed anymore.<br/>
3. [Optional] Provide an amount of time the team is not working on the project. For example, you can exclude time the team has to
spend for meetings or non-project related work during the sprint. This amount is subtracted from the team's total availability.
Default is zero percent.
4. Add the availability of each team member by entering her availability in days and hitting the `Enter` key or clicking the Add button.
5. The teams' availability will be calculated immediately if a value changes.

The calculated availability is shown in the blue area on the right. There are three values:
* The calculated availability of your team in days.
* The maximum number of days the team could spend in the sprint (based on 5 workdays per week).
* The ratio between the first two values.

You can remove team members from the list by clicking the Remove button next to a team member.<br/>
To clear everything you have to click the Reset button just below the availability area.

A live demo of Sprinter can be found [here](https://sprinter.newinstance.ch/).

## Technology

The app is based on [Angular](http://angular.io), [Bootstrap](https://getbootstrap.com/) UI components and [Fontawesome](https://fontawesome.com) icons.

## Contributing

Feel free to contribute to Sprinter by proposing improvements, committing code and making pull requests.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sprinter is licensed under the MIT License - see the LICENSE file for details.

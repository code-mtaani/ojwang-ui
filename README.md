
[![Docker Image CI](https://github.com/code-mtaani/ojwang-ui/actions/workflows/docker-image.yml/badge.svg)](https://github.com/code-mtaani/ojwang-ui/actions/workflows/docker-image.yml) [![NPM Installation](https://github.com/code-mtaani/ojwang-ui/actions/workflows/npm.yml/badge.svg)](https://github.com/code-mtaani/ojwang-ui/actions/workflows/npm.yml)



# Ojwang frontend

This is the front end for the Ojwang project. This project is react based and contains user functionality alongside bond functionality.

## Table of Contents

* [Installation](#installation)
  * [Localhost](#localhost)
  * [Staging](#staging)
  * [Production](#production)
* [Documentation](#documentation)
* [Creators](#creators)
* [Copyright and License](#copyright-and-license)



### Installation
#### Localhost
 - To get started with this project, clone this repository `git clone https://github.com/code-mtaani/ojwang-ui.git`
 - Change directory to the ojwang-ui `cd ojwang-ui`
 - Run the project locally using docker-compose `docker-compose up`
 - The application should be running on http://localhost:3000
#### Staging
We have skipped the staging environment for now to minimize server costs
#### Production
 - Once a change is merged to master, the change will be deployed to production in the next deployment cycle(twenty minute window)

## Contribuition
Below is the workflow for contributing to this repository:
 - Pick an issue from [here](https://github.com/code-mtaani/ojwang-ui/issues) and assign yourself
 - On you dev machine, create a branch that resembles the issue name and work on the change
 - Once you have made the changes and tested locally create a pull request against the main/master branch
 - For a pull request to be merged, it has to fullfill the following requirements:
  - The feature added should have all the necessary unit tests
  - The CI automated checks must pass
 - Once the pull request is merged into the main branch, the work will be deployed to production automatically in the next deployment cycle (deployment occurs once every 20 minutes).

## Documentation

TODO Add documentation

## Creators

**Code-Mtaani team**
* https://github.com/orgs/code-mtaani/people

## Copyright and License

copyright 2022 Code-Mtaani.   

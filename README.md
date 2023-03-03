# Event_Scheduler
## Schedules events and manages time
# Description
## User Story
* AS AN employee with a busy schedule
* I WANT to add important events to a daily planner
* SO THAT I can manage my time effectively
## Acceptance Criteria
* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
* THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
* THEN I can enter an event
* WHEN I click the save button for that timeblock
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist
# Getting Started
## Dependencies
## Prerequisites
### Browsers - Chrome, Safari, Mozilla Firefox
* Operating Systems - Windows and Mac
* Version Control Systems - Git and Github
* Coding Platform - Microsoft Visual Studio Code *Programming languages - HTML *Stylesheets - CSS *Script-file - Javascript
* Commands - Git and MS-DOS commands
### Installations and Repository creations
* Install - Gitbash, Microsoft Visual Studio Code
* Repository - Go to 'Github.com' and create a public repository in your Github account
* Execution of the program
Go to Github.com, create a public account, and go to 'Create Repository' at the top right corner of the page

![Screenshot 2023-03-02 234441](https://user-images.githubusercontent.com/122113060/222635558-4c891feb-0494-4cb2-b0d9-42503ed83efa.png)

Click on the tab 'Code' and copy the link to the repository

![Screenshot 2023-03-02 234455](https://user-images.githubusercontent.com/122113060/222635661-8cd97945-7662-41e1-b38c-169b310eb35f.png)

* Go to the Gitbash window and go to the desktop folder and use the following command: 'git clone (github repository link copied earlier from the repository)'
* The Git folder with the same repository name is created in the present directory
* Type 'cd (folder name)' and type 'code .' to go to Visual studio code to type the code. 

* In the HTML file, create the appropriate hour-ids for the hour of the day on the planner and their respective data attribute in the button tag

![Screenshot 2023-03-02 235659](https://user-images.githubusercontent.com/122113060/222635976-93fb362b-c540-4667-b7ac-6759175be860.png)

![Screenshot 2023-03-02 235712](https://user-images.githubusercontent.com/122113060/222636007-5780d6f1-cca5-43b5-9098-b08d1889a628.png)

* The style sheets provided for the color coding of the past, present and the future events on the planner are as follows:

![Screenshot 2023-03-02 235851](https://user-images.githubusercontent.com/122113060/222636137-568fdaa9-6631-466b-a79c-af86d49ea773.png)

* In the Javascript file, create a time array and spot the index of the current time in it. Color code the past, present and the future events accordingly as given in their respective conditions

![Screenshot 2023-03-02 233830](https://user-images.githubusercontent.com/122113060/222636411-26fcc408-43f0-4c9e-bf27-45570f605f5d.png)

![Screenshot 2023-03-02 233858](https://user-images.githubusercontent.com/122113060/222636461-f507ef37-5017-4c42-87fd-be431790cffd.png)

* Create an array of objects containing the time and their respective event created or updated by the user on the interface and store it in the localStorage

![Screenshot 2023-03-02 233935](https://user-images.githubusercontent.com/122113060/222636902-6a65049c-5628-44af-9063-fd724e5db26d.png)

* When the page is loaded, that same event is displayed on the textbox provided

![Screenshot 2023-03-02 233921](https://user-images.githubusercontent.com/122113060/222636994-6dbe24c2-51c2-4388-a8c1-008cb683b8b1.png)

* Add the changes done then and there to the Github repository by doing the following steps provided in the screenshots: Add the files and commit the changes from the Git to the Github repository by going to the local Git repository

![Screenshot 2023-03-02 234001](https://user-images.githubusercontent.com/122113060/222637088-ac987a14-7920-4fc3-bb43-853ce44c874f.png)

* The changes committed to the Github folder looks like this

![Screenshot 2023-03-02 234420](https://user-images.githubusercontent.com/122113060/222637129-6143e3d9-e157-4f98-8032-27fd015193a6.png)

* Deploy the code using Github Pages

# Acknowledgements

https://day.js.org/docs/en/durations/format

https://api.jquery.com/

https://stackoverflow.com/questions/14935191/adding-data-attribute-to-dom

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex












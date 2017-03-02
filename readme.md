## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install

or if you prefer using Yarn

    sudo yarn

## Running App
This build system can be run in two modes: development and production.  Use development when you are developing your app.  In this mode your JS will not be minified, CSS will contain sourcemaps to the original Stylus files.  When you are ready to deploy you can start the app in production mode which will uglify your JS, and turn off sourcemaps for both JS and CSS.

    gulp  (starts app in development mode)  
    gulp --production (starts app in production mode)

________________________
# Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

1. **Look at the provided web app dashboard mockup: dashboard.png**
2. **Create an HTML file for the app dashboard.**
3. **Create a responsive web page with the following**
    - Header with app name, notification icon badge and profile avatar and name.
    - SVG Icon based navigation with the following links: Dashboard, Members, Visits, and Settings. 
*NOTE:* You only have to build out the main dashboard page, not any of the other pages.
    - Main content area where the specific dashboard widgets will go.
    - Ensure that the design responds well from mobile (320px), to tablet and desktop screen sizes.
4. **Make sure header, navigation and main widget area respond well to common mobile, tablet and desktop device sizes.**
5. **Create a demo alert notification.**
    - In the dashboard.png, this appears as the purple bar near the top of the page with the word "Alert" in it. When the page loads this alert should be visible, but the user should be able to close the alert by clicking the X button.
    - Include a notification icon in the navigation header. Use the icon-bell.svg file. In the mockup this is the bell in the top right corner of the page.
6. **Create a Web Traffic widget**
    - Use chartjs.org or a similar library to create a line chart line like the top chart pictured in the mockup.
    - Display number of visits along the y axis and date/time on the x axis. You will need to make up this data -- you can see the mockup for sample data.
    - Style the chart to match the style of the overall dashboard.
7. **Daily Traffic Bar Chart Widget**
    - Use chartjs.org or a similar library create a bar chart like the one in the mockup.
    - Display number of visits along the y axis and day of the week on the x axis.
    - Style the chart to match the style of the overall dashboard.
8. **Mobile User Pie Chart Widget**
    - Use chartjs.org or a similar library create a donut chart like the one in the mockup.
    - Add a legend for mobile, tablet and desktop users.
    - Style the chart to match the style of the overall dashboard.
9. **Social Stats Widget**
    - Create a widget (or three separate widgets) to display social network stats for Facebook, Twitter and Google+ .
    - Use the provided SVG icons for each of the social networks.
    - Style the social information to match the corresponding social network.
    - Style to match the overall look and feel of the dashboard.
10. **New Members Widget**
    - Create a widget that lists out new members in a table.
    - Include avatar for each member, member name, email and join date (you can use UI Faces for member images, see Project Resources for the link). Make up the information for the names, e-mail address and dates.
    - Style to match the overall look and feel of the dashboard.
11. **Recent Activity**
    - Create a widget to display recent activity from members.
    - Include the following types of activity: made a post, commented, new member signup.
    - Style to match the overall look and feel of the dashboard.
12. **Message User Widget**
    - Create a widget for searching for a member and sending them a message.
    - You don't have to add real search functionality, but if you attempt to get the exceeds grade you'll need to make up some user data.
    - Add a message textarea field that lets you add a message.
    - Use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.
    - Use JS to display error messages if user isn’t selected or message field is empty.
    - Style to match the overall look and feel of the dashboard.
13. **Settings Widget**
    - Create a settings widget to display various setting options using different form elements.
    - Create an on/off widget for whether to send email notifications.
    - Create an on/off widget for whether to set profile to public or private.
    - Create a dropdown to select timezone.
    - Add Save and Cancel buttons (these do not have to do anything functional).
    - Style to match the overall look and feel of the dashboard.
14. **Put your project in a new GitHub repository on your GitHub account:**
    - See the workshop 'Share Your Projects With GitHub Desktop' in the Project Resources. The GitHub Desktop application can automatically create a new repository for you.
    - Make sure that you're only putting the files for this project in that repository.
15. **Make sure to check your code is valid by running it through an HTML and CSS validator**
    - Links to the validators can be found in the Project Resources. This will help you spot any errors that might be in your code.
    - There are a few exceptions that you don’t need to fix:
        - Don’t worry about any warnings, we just need you to check any errors that might be there.
        - If CSS validator flags use of calc, vendor prefixes or pseudo-elements/pseudo-classes these errors should be ignored.
        - If HTML validator flags use of pipe (‘|’) in Google font links/URLs this error can also be ignored.
16. **You should also check for issues with your JavaScript code using JSHint, linked in the Project Resources.**
    - JSHint may show you some warnings, so make sure to check through those for any potential problems.
    - You do not need to fix every warning listed but reviewing them can be useful.
# Extra Credit
To get an "exceeds" rating, you can expand on the project in the following ways:
1. **Display at least two notifications when the user clicks the alerts icon (this could be a pop-up window or dropdown menu)**
2. **Traffic chart widget: Create a navigation similar to the one in the mockup to display different data when the Hourly, Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that a different line chart is displayed on click.**
3. **Daily traffic bar chart widget: Add at least one additional data set to the widget to create a grouped bar chart (each day should display two bars)**
4. **Mobile user pie chart: Add at least one additional data category to the pie chart.**
5. **Add at least 2 additional social network icons and stats**
6. **Add an "autocomplete" feature for the "Search for User" box, listing names that match the search term.**
7. **Use local storage to save the settings. When page is reloaded the settings are remembered.**

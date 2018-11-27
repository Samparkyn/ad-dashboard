##### Sam's Online Advertisement Dashboard

#### To Run
`yarn && yarn start`

#### Docker
To run the app from a Docker container:

(from https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f)
1. `docker build . -t ad-dashboard`
2. `docker run -p 8080:80 ad-dashboard`
3. Open browser on `http://localhost:8080`

#### Testing
I didn’t end up writing tests, but here’s how I would do it:
Using Enzyme, I’d mount the root components (campaign-overview and campaigns-list), and assert that the data is displayed as expected, and the child components have the right props.

https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c

I would use this package to help test the redux actions / reducers
https://github.com/dmitry-zaets/redux-mock-store

#### Deployment
Either deploy the static assets to a service like netlify, surge, or the github pages (simple upload), or run the docker image from a hosted server


#### Error handling
- Since I was in full control of the data flow and time was short, I didn’t include any error handling besides the redux actions.

- If a component received an error (through the mapStateToProps), we could render a special screen, or redirect the user to a special page.

- For errors originating from react components I would use componentDidCatch()


#### Bonus point
For the extra screen, I would use a charts library like highcharts, and include some nice bar and pie charts based on the data being loaded from the server.


#### Notes
- This app didn’t need any dependencies other than React/React-Router. Due to its simplicity, just using State would be enough to keep and pass the data around.

- I’ve included Redux to demonstrate how it could be done using Axios to fetch the data and redux-thunk middleware to handle the promises.

 - Since this app didn’t require complex side-effects, there was no need for redux-saga.

 - I used Material UI for certain aspects, such as the Grid in places and for Icons. However, then chose to use mainly css to style the app.

 - I used `create-react-app` to initially set up the project.


#### Improvements
- Add a bit of extra polishing, for example some hover and active effects on more of the links, or on each campaign row.
- Tests
- The app is currently optimized for desktop screen sizes, as per the designs. In order to make the app look good on all screen sizes I would add media queries to change the layout, reduce the font size as the screen size decreases. 

Thanks for looking! :-)
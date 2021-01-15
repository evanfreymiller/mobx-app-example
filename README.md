# Mobx App Example

This project shows how Mobx State Tree can be used in conjunction with the Context API, and does not cause re-renders app wide.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### View Live App Renders

With the app running, open the Chrome Developer Tools, and go to the console.  
On initial rendering, you will see three console logs for the three components, `Count`, `BidPackageIndex`, and `BidPackageView`.

- [ ] Click the `Show` Button.  This will console log a render for `BidPackageIndex` as a div is revealed.  
Notice that the child component of `Count` does not re-render.

Next click the `Add` button, the `BidPackageView`, and `Count` component will re-render.  
Notice that the partent of `Count` (i.e. `BidPackageIndex`) does not re-render in this instance.

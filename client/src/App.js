import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/login";
import NavComponent from "./component/nav";
import Home from "./component/home/home";
import TicketPage from "./component/ticket/ticketPage";
import Flight from "./component/ticket/flight";
import Paypal_Flight from "./component/paypal/paypal_flight";
import Bus from "./component/ticket/bus";
import Paypal_Bus from "./component/paypal/paypal_bus";
import Hotel from "./component/ticket/hotel";
import Paypal_Hotel from "./component/paypal/paypal_hotel";
import TravelGuide from "./component/travelGuide/travelGuide";
import TravelGuideDetails from "./component/travelGuide/travelGuideDetail";
import GroupTour from "./component/groupTour/groupTour";
import GroupTourDetail from "./component/groupTour/groupTourDetail";
import Paypal_GroupTour from "./component/paypal/paypal_grouptour";
import Blog from "./component/blog/blog";
import postTopic from "./component/blog/postTopic";
import TopicDetail from "./component/blog/topicDetail";
import PersonalCenter from "./component/personalCenter/personalCenter";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <NavComponent />
        {/* <br /> <br/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/tickets" exact component={TicketPage} />
          <Route path="/tickets/flight" exact component={Flight} />
          <Route path="/tickets/bus" exact component={Bus} />
          <Route path="/tickets/hotel" exact component={Hotel} />
          <Route
            path="/tickets/flight/paypal/:_id"
            exact
            component={Paypal_Flight}
          />
          <Route path="/tickets/bus/paypal/:_id" exact component={Paypal_Bus} />
          <Route
            path="/tickets/hotel/paypal/:_id"
            exact
            component={Paypal_Hotel}
          />

          <Route path="/travelGuides" exact component={TravelGuide} />
          <Route
            path="/travelGuides/details/:_id"
            exact
            component={TravelGuideDetails}
          />

          <Route path="/groupTours" exact component={GroupTour} />
          <Route path="/groupTours/:_id" exact component={GroupTourDetail} />
          <Route
            path="/groupTours/:_id/paypal"
            exact
            component={Paypal_GroupTour}
          />

          <Route path="/society" exact component={Blog} />
          <Route path="/society/postTopic" exact component={postTopic} />
          <Route
            path="/society/topicDetail/:_id"
            exact
            component={TopicDetail}
          />
          <Route path="/personalcenter" exact component={PersonalCenter} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { SideBar } from "./style";
import { MovieContext } from "../../context/movie";

import Home from "../../assets/libs/Home";
import Explore from "../../assets/libs/Explore";
import Subscription from "../../assets/libs/Subscriptions";
import Library from "../../assets/libs/Library";
import History from "../../assets/libs/History";
import YourVideos from "../../assets/libs/YourVideos";
import WatchLater from "../../assets/libs/WatchLater";
import Liked from "../../assets/libs/Liked";
import More from "../../assets/libs/More";
import { StyledLink } from "./style";

const Sidebar = () => {
  const [state] = useContext(MovieContext);
  return (
    <SideBar>
      <StyledLink activeClassName="any" exact to="/">
        <Home />
        <SideBar.Heading>Home</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/explore">
        <Explore />
        <SideBar.Heading>Explore</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/subscriptions">
        <Subscription />
        <SideBar.Heading>Subscriptions</SideBar.Heading>
      </StyledLink>

      <SideBar.Line />

      <StyledLink activeClassName="any" to="/library">
        <Library />
        <SideBar.Heading>Library</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/history">
        <History />
        <SideBar.Heading>History</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/yourvideos">
        <YourVideos />
        <SideBar.Heading>Your videos</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/watchlater">
        <WatchLater />
        <SideBar.Heading>Watch Later</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/likedvideos">
        <Liked />
        <SideBar.Heading>Liked videos</SideBar.Heading>
      </StyledLink>
      <StyledLink activeClassName="any" to="/showmore">
        <More />
        <SideBar.Heading>Show more</SideBar.Heading>
      </StyledLink>

      <SideBar.Line />

      <SideBar.Title>Subscriptions</SideBar.Title>
      {state.slice(0, 7).map((value) => {
        return (
          <SideBar.Chanels key={value.id}>
            <SideBar.User>
              <img src={value.user} alt="" />
              <SideBar.ChanelName>{value.title}</SideBar.ChanelName>
            </SideBar.User>
            <img src={value.status} alt="" />
          </SideBar.Chanels>
        );
      })}
      <SideBar.ShowMore>
        <More />
        <SideBar.Heading>Show more</SideBar.Heading>
      </SideBar.ShowMore>

      <SideBar.Line />

      <SideBar.ShowMore>
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features © 2021
        Google LLC
      </SideBar.ShowMore>
    </SideBar>
  );
};

export default Sidebar;

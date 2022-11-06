import React from "react";
import styled from "styled-components";
import YouTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  font-size: 14px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 20px;
  font-family: fantasy;
  font-weight: 300;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  padding: 4px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
            YouTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon fontSize="small" />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon fontSize="small" />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon fontSize="small" />
          Library
        </Item>
        <Item>
          <RestoreOutlinedIcon fontSize="small" />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlinedIcon fontSize="small" />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Item>
          <LibraryMusicOutlinedIcon fontSize="small" />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon fontSize="small" />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon fontSize="small" />
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlinedIcon fontSize="small" />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon fontSize="small" />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon fontSize="small" />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon fontSize="small" />
          Settings
        </Item>
        <Item>
          <OutlinedFlagOutlinedIcon fontSize="small" />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon fontSize="small" />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon fontSize="small" />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

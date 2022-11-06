import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import netflix from "../img/netflix.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Comments from "../components/Comments";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  gap: 12px;
`;
const Content = styled.div`
  flex: 6;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 420;
  margin-top: 20px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2.5;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 15px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #999;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Icon = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelCounter = styled.span`
  margin-top: 2px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;
const Description = styled.p`
  font-size: 15px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  margin-top: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/L6P3nI6VnlY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Extraction Official Trailer | Chris Hemsworth | Netflix</Title>
        <Details>
          <Info>209,102 views • Jan 22, 2019</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 69k
            </Button>
            <Button>
              <ThumbDownIcon /> Dislike
            </Button>
            <Button>
              <ReplyIcon /> Share
            </Button>
            <Button>
              <AddTaskIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={netflix} />
            <ChannelDetail>
              <ChannelName>
                Netflix
                <Icon>
                  <CheckCircleIcon fontSize="1px" />
                </Icon>
              </ChannelName>
              <ChannelCounter>24.9M subscribers</ChannelCounter>
              <Description>
                Tyler Rake (Chris Hemsworth) is a fearless black market
                mercenary who embarks on the deadliest mission of his career
                when he’s enlisted to rescue the kidnapped son of an
                international crime lord. Directed by Sam Hargrave, this
                action-packed, edge-of-your-seat thriller is produced by Joe and
                Anthony Russo, the visionary directors of Avengers: Endgame.{" "}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;

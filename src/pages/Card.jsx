import React from "react";
import styled from "styled-components";
import thumbnail from "../img/thumbnail.png";
import netflix from "../img/netflix.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 270px;
  margin-bottom: 45px;
  cursor: pointer;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 10px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin: 6px 0px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src={thumbnail} />
        <Details>
          <ChannelImage src={netflix} />
          <Texts>
            <Title>
              Extraction Official Trailer | Chris Hemsworth | Netflix
            </Title>
            <ChannelName>
              Netflix <CheckCircleIcon fontSize="2px" />
            </ChannelName>
            <Info>209,102 views • 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

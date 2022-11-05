import React from "react";
import styled from "styled-components";
import avatar from "../img/avatar.jpeg";

const Container = styled.div`
  display: flex;
  margin: 30px 6px;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 3px;
`;
const Text = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Details>
        <Name>
          Aman Mandal <Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          exercitationem asperiores fugiat tenetur voluptatum earum vel unde
          obcaecati corporis.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;

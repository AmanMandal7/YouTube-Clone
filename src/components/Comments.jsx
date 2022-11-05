import React from "react";
import styled from "styled-components";
import avatar from "../img/avatar.jpeg";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #999;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  color: ${({ theme }) => theme.softText};
  outline: none;
  width: 85%;
  height: 20px;
  font-size: 16px;
  padding: 5px;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={avatar} />
        <Input placeholder="Enter a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;

import React, { useState } from "react";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import img from "../img/profile.jpg";
const ProfileActive = () => {
  return <></>;
};

const LinkDiv = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default ProfileActive;

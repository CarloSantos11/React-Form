import styled from "styled-components";

const OnlineDot = styled.div`
  background-image: linear-gradient(to left,rgb(8 8 8),rgb(63 255 0));
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  right: 40px;
  top: 40px;
`;

const OfflineDot = styled.div`
  background-image: linear-gradient(to left,rgb(88 15 15),rgb(255 0 0));  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  right: 40px;
  top: 40px;
`;

const OnlineStatus = (props) => {

  return (
    <>
      {props.activeStatus ? <OnlineDot /> : <OfflineDot />}
    </>
  );
};

export default OnlineStatus;

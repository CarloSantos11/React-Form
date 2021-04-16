//what will we be mentored on
//

const ActiveUsers = ({ activeUser }) => {
  //const [isActive, setIsActive];

  return (
    <div>
      {activeUser ? (
        <h5 style={{ color: "green" }}>online</h5>
      ) : (
        !activeUser && <h5 style={{ color: "gray" }}>offline</h5>
      )}

      {/* {activeUser && <h5 style={{ color: "green" }}>online</h5>}
        {!activeUser && <h5 style={{ display: "none" }}>online</h5>} */}
    </div>
  );
};

export default ActiveUsers;

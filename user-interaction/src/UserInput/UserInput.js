import React from 'react';

const UserInput = (props) => {
  const style = {
    borderRadius: 9999,
  };

  return (
    <div className="UserInput">
      <input style={style} type="text" placeholder="Enter new name..." defaultValue={props.username} onChange={props.nameChanged} />
    </div>
  );
};

export default UserInput;

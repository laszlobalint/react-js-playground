import React from 'react';

const userHoc = (WrappedComponent1, WrappedComponent2, arg1) => {
  return (props) => (
    <div>
      {arg1}
      <WrappedComponent1 {...props} />
      <WrappedComponent2 {...props} />
    </div>
  );
};

export default userHoc;

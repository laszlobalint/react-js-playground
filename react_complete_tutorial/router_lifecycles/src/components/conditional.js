import React from 'react';

const Conditional = () => {
  const returnValue = () => {
    return false;
  };

  const showIt = () => {
    return (returnValue()
      ? <div>
        Hello, it's true!
      </div>
      : <div>
        Hello, it's false!
      </div>
    );
  };

  return (
    <div>
      { showIt() }
    </div>
  );
};

export default Conditional;

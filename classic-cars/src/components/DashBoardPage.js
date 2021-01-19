import React, { useEffect, useState } from 'react';

const DashBoardPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      <div className='dashboard-page'>
        <div className='dashboard-header'>
          <h1>Dashboard</h1>
        </div>
        {/* photo upload here */}
        <div className='photo-gallery'>
          {/* ......photo gallery will be here...... */}
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;

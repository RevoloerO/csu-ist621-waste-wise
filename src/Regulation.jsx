import React, { useEffect } from 'react';

function Regulation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="regulation">
      {/* Add your regulation content here */}
    </div>
  );
}

export default Regulation;
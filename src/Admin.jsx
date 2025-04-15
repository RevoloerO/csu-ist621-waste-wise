import React, { useEffect } from 'react';

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="admin">
      {/* Add your admin page content here */}
    </div>
  );
}

export default Admin;
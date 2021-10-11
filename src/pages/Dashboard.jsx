import React from 'react';
import CrudHeader from '../components/admin/components/CrudHeader';
import CrudApi from '../components/admin/CrudApi';

function Dashboard() {
  return (
    <>
      <CrudHeader />
      <main className="container">
        <h3>Dashboard | Products</h3>
        <CrudApi />
      </main>
    </>
  );
}

export default Dashboard;

import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import Overview from '../components/admin/Overview'
import AppointmentTable from '../components/admin/AppointmentTable'

const Dashboard = () => {
  return (
    <AdminLayout>
        <Overview />
        <AppointmentTable />
    </AdminLayout>
  )
}

export default Dashboard

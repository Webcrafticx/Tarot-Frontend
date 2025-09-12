import React, { useState, useEffect, Suspense, lazy } from 'react'
import AdminLayout from '../layout/AdminLayout'
import { getAllAppointments } from '../services/appointment'
import { Loader } from 'lucide-react'

// Lazy imports (code splitting)
const Overview = lazy(() => import('../components/admin/Overview'))
const AppointmentTable = lazy(() => import('../components/admin/AppointmentTable'))

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({
    totalAppointments: 0,
    totalPages: 1,
    currentPage: 1,
    limit: 10,
    prevPage: null,
    nextPage: null
  });

  // Fetch appointments from API
  const fetchAppointments = async (page = 1, limit = 10) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllAppointments(page, limit);
      
      if (response && response.success) {
        setAppointments(response.data || []);
        setPaginationInfo(response.pagination || {
          totalAppointments: response.data?.length || 0,
          totalPages: 1,
          currentPage: 1,
          limit: limit,
          prevPage: null,
          nextPage: null
        });
      } else {
        throw new Error(response.message || "Invalid data format received from server");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch appointments");
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center h-64">
          <Loader className="animate-spin h-8 w-8 text-blue-500" />
          <span className="ml-2 text-gray-600 mt-2">Loading appointments...</span>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center h-64">
          <Loader className="animate-spin h-8 w-8 text-blue-500" />
          <span className="ml-2 text-gray-600 mt-2">Loading component...</span>
        </div>
      }>
        <Overview 
          appointments={appointments} 
          error={error} 
        />
        <AppointmentTable 
          appointments={appointments}
          error={error}
          paginationInfo={paginationInfo}
          fetchAppointments={fetchAppointments}
        />
      </Suspense>
    </AdminLayout>
  )
}

export default Dashboard

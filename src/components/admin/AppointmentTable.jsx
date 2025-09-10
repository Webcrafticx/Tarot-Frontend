import React, { useState, useEffect } from "react";
import { 
  ChevronUp, ChevronDown, Calendar, MessageCircle, 
  ChevronLeft, ChevronRight, Loader,
  Search, Phone, Mail, Clock, IndianRupee
} from "lucide-react";
import { getAllAppointments } from "../../services/appointment";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'descending'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationInfo, setPaginationInfo] = useState({
    totalAppointments: 0,
    totalPages: 1,
    currentPage: 1,
    limit: 10,
    prevPage: null,
    nextPage: null
  });
  const [expandedRow, setExpandedRow] = useState(null);

  // Fetch appointments from API
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllAppointments();
      
      // If API returns data, use it
      if (response && response.success) {
        setAppointments(response.data || []);
        setPaginationInfo(response.pagination || {
          totalAppointments: response.data?.length || 0,
          totalPages: 1,
          currentPage: 1,
          limit: 10,
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

  // Format duration to show minutes
  const formatDuration = (duration) => {
    if (!duration) return '60 min';
    return `${duration} min`;
  };

  // Format price in INR
  const formatPrice = (price) => {
    if (!price) return '₹0';
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Function to handle WhatsApp redirect
  const handleWhatsAppClick = (phone) => {
    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    window.open(`https://wa.me/${cleanedPhone}`, '_blank');
  };

  // Toggle row expansion for mobile view
  const toggleRowExpansion = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Get sorting icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  // Safely filter appointments based on search
  const filteredAppointments = appointments.filter(appointment => 
    (appointment.name?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (appointment.email?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (appointment.phone?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (appointment.serviceType?.toLowerCase() || '').includes(search.toLowerCase())
  );

  // Sort appointments
  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.key === 'selectedWindow') {
      const dayOrder = {
        "Monday - Wednesday": 1,
        "Thursday - Friday": 2,
        "Saturday - Sunday": 3,
        "Mon-Wed": 1, "Thu-Fri": 2, "Sat-Sun": 3,
        "Monday": 1, "Tuesday": 1, "Wednesday": 1,
        "Thursday": 2, "Friday": 2,
        "Saturday": 3, "Sunday": 3
      };
      
      const valueA = dayOrder[a[sortConfig.key]] || 99;
      const valueB = dayOrder[b[sortConfig.key]] || 99;
      
      return sortConfig.direction === 'ascending' ? 
        valueA - valueB : valueB - valueA;
    }

    if (sortConfig.key === 'paymentStatus') {
      const paymentStatusOrder = {
        "pending": 1,
        "completed": 2,
        "failed": 3
      };
      
      const valueA = paymentStatusOrder[a[sortConfig.key]] || 99;
      const valueB = paymentStatusOrder[b[sortConfig.key]] || 99;
      
      return sortConfig.direction === 'ascending' ? 
        valueA - valueB : valueB - valueA;
    }

    const valueA = a[sortConfig.key] || '';
    const valueB = b[sortConfig.key] || '';
    
    if (valueA < valueB) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const totalItems = sortedAppointments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = sortedAppointments.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaymentStatusBadge = (status) => {
    const statusColors = {
      'pending': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      'completed': 'bg-green-100 text-green-800 border border-green-200',
      'failed': 'bg-red-100 text-red-800 border border-red-200',
    };

    const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800 border border-gray-200';

    return (
      <span className={`text-xs px-2 py-1 ${colorClass} rounded-full whitespace-nowrap cursor-default capitalize`}>
        {status || 'N/A'}
      </span>
    );
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-2 py-1 rounded-md text-xs sm:text-sm ${
            currentPage === i
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  if (loading) {
    return (
      <div className="mt-4 px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center h-64">
          <Loader className="animate-spin h-8 w-8 text-blue-500" />
          <span className="ml-2 text-gray-600 mt-2">Loading appointments...</span>
        </div>
      </div>
    );
  }

  if (error && appointments.length === 0) {
    return (
      <div className="mt-4 px-4 sm:px-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-sm">Error: {error}</span>
            <button 
              onClick={fetchAppointments}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm flex items-center"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Appointments</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <span className="text-xs sm:text-sm text-gray-600">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-md px-2 py-1 text-xs sm:text-sm cursor-pointer"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-xs sm:text-sm text-gray-600">entries</span>
          </div>
          
          <div className="relative order-1 sm:order-2 w-full sm:w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search appointments..."
              className="pl-9 pr-4 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-text w-full"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>

      {error && appointments.length > 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-md mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-sm">Note: {error}</span>
            <button 
              onClick={fetchAppointments}
              className="px-3 py-1 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Desktop Table View */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-xs sm:text-sm text-gray-600 text-left">
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Client
                    {getSortIcon('name')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('phone')}
                >
                  <div className="flex items-center gap-1">
                    Phone
                    {getSortIcon('phone')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('serviceType')}
                >
                  <div className="flex items-center gap-1">
                    Service
                    {getSortIcon('serviceType')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('selectedWindow')}
                >
                  <div className="flex items-center gap-1">
                    Day Window
                    {getSortIcon('selectedWindow')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('duration')}
                >
                  <div className="flex items-center gap-1">
                    Duration
                    {getSortIcon('duration')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('price')}
                >
                  <div className="flex items-center gap-1">
                    Price
                    {getSortIcon('price')}
                  </div>
                </th>
                <th 
                  className="py-3 px-2 sm:px-4 font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={() => requestSort('paymentStatus')}
                >
                  <div className="flex items-center gap-1">
                    Payment
                    {getSortIcon('paymentStatus')}
                  </div>
                </th>
                <th className="py-3 px-2 sm:px-4 font-medium whitespace-nowrap cursor-default text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
              {currentAppointments.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-gray-500">
                    No appointments found
                  </td>
                </tr>
              ) : (
                currentAppointments.map((appointment) => (
                  <tr key={appointment._id} className="hover:bg-gray-50 cursor-default">
                    <td className="py-4 px-2 sm:px-4">
                      <div>
                        <div className="font-medium text-gray-900">{appointment.name || 'N/A'}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[120px] sm:max-w-none">{appointment.email || 'N/A'}</div>
                      </div>
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      {appointment.phone || 'N/A'}
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap capitalize">{appointment.serviceType || 'N/A'}</td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                        {appointment.selectedWindow || 'N/A'}
                      </div>
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      {formatDuration(appointment.duration)}
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        {/* <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" /> */}
                        {formatPrice(appointment.price)}
                      </div>
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      {renderPaymentStatusBadge(appointment.paymentStatus)}
                    </td>
                    <td className="py-4 px-2 sm:px-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {appointment.phone && (
                          <button
                            onClick={() => handleWhatsAppClick(appointment.phone)}
                            className="text-green-600 hover:text-green-800 cursor-pointer p-1 rounded hover:bg-green-50"
                            title="Message on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {currentAppointments.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-0">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              {renderPaginationButtons()}
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {currentAppointments.length === 0 ? (
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center text-gray-500 py-8">
            No appointments found
          </div>
        ) : (
          currentAppointments.map((appointment) => (
            <div key={appointment._id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleRowExpansion(appointment._id)}
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-sm">{appointment.name || 'N/A'}</div>
                  <div className="text-xs text-gray-500 mt-1 capitalize">{appointment.serviceType || 'N/A'}</div>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform ${expandedRow === appointment._id ? 'rotate-180' : ''}`} 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                  <Phone className="w-3 h-3" />
                  <span>{appointment.phone || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="w-3 h-3" />
                  <span className="truncate">{appointment.selectedWindow || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>{formatDuration(appointment.duration)}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  {/* <IndianRupee className="w-3 h-3" /> */}
                  <span>{formatPrice(appointment.price)}</span>
                </div>
              </div>

              {expandedRow === appointment._id && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-700">Payment Status:</span>
                    {renderPaymentStatusBadge(appointment.paymentStatus)}
                  </div>
                  
                  <div className="text-xs text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> {appointment.email || 'N/A'}
                  </div>
                  
                  <div className="flex justify-end mt-3">
                    {appointment.phone && (
                      <button
                        onClick={() => handleWhatsAppClick(appointment.phone)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-md text-xs hover:bg-green-200"
                      >
                        <MessageCircle className="w-3 h-3" />
                        WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}

        {/* Mobile Pagination */}
        {currentAppointments.length > 0 && (
          <div className="flex flex-col items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-600 mb-4">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-xs text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentTable;
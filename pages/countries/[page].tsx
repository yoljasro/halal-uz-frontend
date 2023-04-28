// pages/countries/[page].tsx

import React from 'react';
import { useRouter } from 'next/router';
import PaginationComponent from '../../components/Pagination';

const CountriesPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page as string, 10) || 1; // Joriy sahifa raqamini olish

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    router.push(`/countries/${page}`);
  };

  return (
    <div>
      {/* Davlatlar ro'yhati */}
      
      {/* Davlatlarni qo'llab-quvvatlovchi komponentlar */}
      <PaginationComponent totalPages={10} currentPage={currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default CountriesPage;

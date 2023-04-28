// components/Pagination.tsx

import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onChange }) => {
  return (
    <Stack spacing={2} direction="row">
      <Pagination count={totalPages} page={currentPage} onChange={onChange} />
    </Stack>
  );
};

export default CustomPagination;

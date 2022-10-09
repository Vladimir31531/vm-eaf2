import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MuiPagination({ pagesCount, setPage, sx }) {

    return (
        <Stack spacing={2}>
            <Pagination sx={sx} count={pagesCount} onChange={(e, a) => setPage(a)} defaultPage={1} /> {/* Default ranges */}
        </Stack>
    );
}
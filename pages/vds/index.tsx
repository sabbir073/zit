import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/router';

const rowData = [
    {
        id: 1,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00001',
        certificate_no: '00001',
        transaction_date: '10-04-23',
    },
    {
        id: 2,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00002',
        certificate_no: '00002',
        transaction_date: '10-04-23',
    },
    {
        id: 3,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00003',
        certificate_no: '00003',
        transaction_date: '10-04-23',
    },
    {
        id: 4,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00004',
        certificate_no: '00004',
        transaction_date: '10-04-23',
    },
    {
        id: 5,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00005',
        certificate_no: '00005',
        transaction_date: '10-04-23',
    },
    {
        id: 6,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00006',
        certificate_no: '00006',
        transaction_date: '10-04-23',
    },
    {
        id: 7,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00007',
        certificate_no: '00007',
        transaction_date: '10-04-23',
    },
    {
        id: 8,
        supplier_name: 'Rahim Varieties Store',
        treasure_challan_no: 'TCM-23-00008',
        certificate_no: '00008',
        transaction_date: '10-04-23',
    },
];

const MultipleTables = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('6D_1 VDS For Purchaser'));
    });

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    });

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.supplier_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.treasure_challan_no.toLowerCase().includes(search.toLowerCase()) ||
                    item.certificate_no.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.transaction_date.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
    }, [sortStatus]);

    const options3 = [
        { value: 'orange', label: 'Orange' },
        { value: 'white', label: 'White' },
        { value: 'purple', label: 'Purple' },
    ];

    const animatedComponents = makeAnimated();

    const customStyles = {
        menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
      };

    const router = useRouter();

    return (

            <div className="panel mt-5">
                <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                    <h5 className="text-lg font-semibold dark:text-white-light">6D_VDS For Purchaser</h5>
                    
                </div>
                <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                <button 
                    type="button" 
                    className="btn btn-primary py-1 px-3"
                    onClick={() => router.push('vds/create')}
                >
                    <svg 
                    width="20" height="20" viewBox="0 0 24 24" 
                    stroke="currentColor" stroke-width="1.5" 
                    fill="none" stroke-linecap="round" 
                    stroke-linejoin="round" 
                    className="w-6 h-6"
                    >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add New
                </button>
                
                <div className="ltr:ml-auto">
                    <Select
                    styles={customStyles}
                    className="min-w-[300px] w-full"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options3}
                    />
                </div>
                
                <div className="rtl:mr-auto">
                    <input 
                    type="text" 
                    className="form-input min-w-[300px] w-full"
                    placeholder="Search..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
                </div>


                
                <div className="datatables">
                    {isMounted && (
                        <DataTable
                            className="table-hover whitespace-nowrap"
                            records={recordsData}
                            columns={[
                                {
                                    accessor: 'id',
                                    title: 'SL',
                                    sortable: true,
                                    render: ({ id }) => (
                                        <div className="flex w-max items-center">
                                            <div>{id}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'supplier_name',
                                    title: 'Supplier name',
                                    sortable: true,
                                    render: ({ supplier_name }) => (
                                        <div className="flex w-max items-center">
                                            <div>{supplier_name}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'treasure_challan_no',
                                    title: 'Treasury Challan No',
                                    sortable: true,
                                    render: ({ treasure_challan_no }) => (
                                        <div className="flex w-max items-center">
                                            <div>{treasure_challan_no}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'certificate_no',
                                    title: 'Certificate No',
                                    sortable: true,
                                    render: ({ certificate_no }) => (
                                        <div className="flex w-max items-center">
                                            <div>{certificate_no}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'transaction_date',
                                    title: 'Transaction Date',
                                    sortable: true,
                                    render: ({ transaction_date }) => (
                                        <div className="flex w-max items-center">
                                            <div>{transaction_date}</div>
                                        </div>
                                    ),
                                },
                                
                                
                                
                                {
                                    accessor: 'action',
                                    title: 'Action',
                                    titleClassName: '!text-center',
                                    render: () => (
                                        <div className="mx-auto flex w-max items-center gap-2">
                                            <Tippy content="View">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                            </Tippy>
                                            
                                        </div>
                                    ),
                                },
                            ]}
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            minHeight={200}
                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                        />
                    )}
                </div>
            </div>
    );
};

export default MultipleTables;

import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/router';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';


const ImportPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('6D_1 VDS For Purchaser'));
    });

    const submitForm = () => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Form submitted successfully',
            padding: '10px 20px',
        });
    };

    const SubmittedForm = Yup.object().shape({
        recieveNo: Yup.string().required('Please fill the Name'),
    });

    const [rows, setRows] = useState([{ isChecked: false }]);  // Initial row
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setRows(rows.map(row => ({ ...row, isChecked: newSelectAll })));
    };

    const handleCheckRow = index => {
        const newRows = [...rows];
        newRows[index].isChecked = !newRows[index].isChecked;
        setRows(newRows);
    };

    const handleAddRow = () => {
        setRows([...rows, { isChecked: false }]);
    };

    const handleDeleteCheckedRows = () => {
        const uncheckedRows = rows.filter(row => !row.isChecked);
        setRows(uncheckedRows);
    };

    return (

            <div className="panel mt-5">
                <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                    <h5 className="text-lg font-semibold dark:text-white-light">6D_VDS For Purchaser - Insert</h5>
                    
                </div>

                <div className="grid grid-cols-1 gap-0 pt-5 lg:grid-cols-1">
               
               <div className="panel" id="forms_grid">
                   
               <Formik
                   initialValues={{
                       recieveNo: '',
                       recieveDate: '',
                       vatMonth: '',
                       rebateType: '',
                       suppliername: '',
                       supplierBinNo: '',
                       challanType: '',
                       challanNumber: '',
                       challanDate: '',
                       totalVatAmount: '',
                       grandTotalAmount: '',
                       remarks: '',
                       isBond: '',
                       lcNumber: '',
                   }}
                   validationSchema={SubmittedForm}
                   onSubmit={() => {}}
               >
                   {({ errors, submitCount, touched }) => (
                       <Form className="space-y-5">

                           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                               <div className={submitCount ? (errors.recieveNo ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="recieveNo">VDS Purchaser ID* </label>
                                   <Field name="recieveNo" type="text" id="recieveNo" placeholder="<<</NEW/>>>" className="form-input md:col-span-2" />

                                   {submitCount ? errors.recieveNo ? <div className="mt-1 text-danger">{errors.recieveNo}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.recieveDate ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="recieveDate">Transaction Date* </label>
                                   <Field name="recieveDate" type="date" id="recieveDate" className="form-input md:col-span-2" />

                                   {submitCount ? errors.recieveDate ? <div className="mt-1 text-danger">{errors.recieveDate}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               
                               <div className={submitCount ? (errors.vatMonth ? 'has-error' : 'has-success') : ''}>
                               <label htmlFor="vatMonth">VAT Month*</label>
                                    <select id="vatMonth" name="vatMonth" className="form-input md:col-span-2" required>
                                        <option>Select VAT Month</option>
                                        <option>July 23</option>
                                        <option>August 23</option>
                                        <option>September 23</option>
                                    </select>
                                    {submitCount ? errors.vatMonth ? <div className="mt-1 text-danger">{errors.vatMonth}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.vatMonth ? 'has-error' : 'has-success') : ''}>
                               <label htmlFor="suppliername">Supplier Name*</label>
                                    <select id="suppliername" name="suppliername" className="form-input md:col-span-2" required>
                                        <option>Select Supplier Name*</option>
                                        <option>Sabbir</option>
                                        <option>Sabbir</option>
                                        <option>Sabbir</option>
                                    </select>
                                    {submitCount ? errors.vatMonth ? <div className="mt-1 text-danger">{errors.vatMonth}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                               <div className={submitCount ? (errors.suppliername ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="suppliername">Certificate No* </label>
                                   <Field name="suppliername" type="text" id="suppliername" placeholder="Certificate NO" className="form-input md:col-span-2" />

                                   {submitCount ? errors.suppliername ? <div className="mt-1 text-danger">{errors.suppliername}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.supplierBinNo ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="supplierBinNo">Tresury Challan No* </label>
                                   <Field name="supplierBinNo" type="text" id="supplierBinNo" placeholder="TCM-23-000001" className="form-input md:col-span-2" />

                                   {submitCount ? errors.supplierBinNo ? <div className="mt-1 text-danger">{errors.supplierBinNo}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.challanDate ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="challanDate">Tresure Challan Date* </label>
                                   <Field name="challanDate" type="date" id="challanDate" placeholder="11-07-23" className="form-input md:col-span-2" disabled/>

                                   {submitCount ? errors.challanDate ? <div className="mt-1 text-danger">{errors.challanDate}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.challanType ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="challanType">Total Purchase Amount* </label>
                                   <Field name="challanType" type="text" id="challanType" className="form-input md:col-span-2" disabled/>

                                   {submitCount ? errors.challanType ? <div className="mt-1 text-danger">{errors.challanType}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.challanNumber ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="challanNumber">Total VAT Amount* </label>
                                   <Field name="challanNumber" type="text" id="challanNumber" className="form-input md:col-span-2" disabled/>

                                   {submitCount ? errors.challanNumber ? <div className="mt-1 text-danger">{errors.challanNumber}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.totalVatAmount ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="totalVatAmount">Deducted Vat Amount* </label>
                                   <Field name="totalVatAmount" type="text" id="totalVatAmount" className="form-input md:col-span-2" disabled/>

                                   {submitCount ? errors.totalVatAmount ? <div className="mt-1 text-danger">{errors.challanNumber}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                               <div className={submitCount ? (errors.remarks ? 'has-error' : 'has-success') : ''}>
                                   <label htmlFor="remarks">Remarks </label>
                                   <Field name="remarks" type="text" id="remarks" placeholder="Remarks" className="form-input md:col-span-2" />

                                   {submitCount ? errors.remarks ? <div className="mt-1 text-danger">{errors.remarks}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                               </div>
                           </div>

                           <div className="my-4" style={{ marginTop: '50px' }}>
            <table className="min-w-full border-collapse border">
                <thead className="bg-gray-300">
                    <tr>
                        <th><input type="checkbox" checked={selectAll} onChange={handleCheckAll} /></th>
                        <th>Receive Master ID</th>
                        <th>Receive Amount</th>
                        <th>VAT Amount</th>
                        <th>Deducted Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="border-b">
                            <td className="border-r"><input type="checkbox" checked={row.isChecked} onChange={() => handleCheckRow(index)} /></td>
                            <td className="border-r">
                                <select className="border p-1 w-full">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                </select>
                            </td>
                            <td className="bg-gray-300 border-r"></td>
                            <td className="bg-gray-300 border-r"></td>
                            <td className="bg-gray-300"></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-4 border p-2">
                <div>
                    <span className="mr-2 cursor-pointer" onClick={handleAddRow}>➕</span>
                    <span className="cursor-pointer" onClick={handleDeleteCheckedRows}>❌</span>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-3 py-1 mr-2">Close</button>
                    <button className="bg-yellow-500 text-white px-3 py-1 mr-2">Reset</button>
                    <button className="bg-green-500 text-white px-3 py-1">Save</button>
                </div>
            </div>
        </div>
                           



                    

                           
                       </Form>
                   )}
               </Formik>
               </div>
               
           </div>
                                
                
            </div>
    );
};

export default ImportPage;

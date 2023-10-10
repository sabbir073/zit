import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';

const ImportPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Import'));
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
    

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Import Trading Item</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 gap-0 pt-5 lg:grid-cols-1">
                {/* Stack */}

                {/* Horizontal */}

                {/* Registration */}

                {/* Login */}

                {/* Grid */}
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
                                    <label htmlFor="recieveNo">Receive No* </label>
                                    <Field name="recieveNo" type="text" id="recieveNo" placeholder="Receive No" className="form-input md:col-span-2" />

                                    {submitCount ? errors.recieveNo ? <div className="mt-1 text-danger">{errors.recieveNo}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.recieveDate ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="recieveDate">Receive Date* </label>
                                    <Field name="recieveDate" type="date" id="recieveDate" className="form-input md:col-span-2" />

                                    {submitCount ? errors.recieveDate ? <div className="mt-1 text-danger">{errors.recieveDate}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.vatMonth ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="vatMonth">Vat Month*</label>
                                    <Field name="vatMonth" type="text" id="vatMonth" placeholder="July-23" className="form-input md:col-span-2" />

                                    {submitCount ? errors.vatMonth ? <div className="mt-1 text-danger">{errors.vatMonth}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.rebateType ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="rebateType">Rebate Type* </label>
                                    <Field name="rebateType" type="text" id="rebateType" placeholder="Non Rebatable" className="form-input md:col-span-2" />

                                    {submitCount ? errors.rebateType ? <div className="mt-1 text-danger">{errors.rebateType}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.suppliername ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="suppliername">Supplier Name* </label>
                                    <Field name="suppliername" type="text" id="suppliername" placeholder="Supplier Name" className="form-input md:col-span-2" />

                                    {submitCount ? errors.suppliername ? <div className="mt-1 text-danger">{errors.suppliername}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.supplierBinNo ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="supplierBinNo">Supplier BIN No* </label>
                                    <Field name="supplierBinNo" type="text" id="supplierBinNo" placeholder="Supplier BIN No." className="form-input md:col-span-2" />

                                    {submitCount ? errors.supplierBinNo ? <div className="mt-1 text-danger">{errors.supplierBinNo}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.challanType ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="challanType">Challan Type* </label>
                                    <Field name="challanType" type="text" id="challanType" placeholder="Challan Type" className="form-input md:col-span-2" />

                                    {submitCount ? errors.challanType ? <div className="mt-1 text-danger">{errors.challanType}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.challanNumber ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="challanNumber">Challan Number* </label>
                                    <Field name="challanNumber" type="text" id="challanNumber" placeholder="Challan Number" className="form-input md:col-span-2" />

                                    {submitCount ? errors.challanNumber ? <div className="mt-1 text-danger">{errors.challanNumber}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.challanDate ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="challanDate">Challan Date* </label>
                                    <Field name="challanDate" type="date" id="challanDate" className="form-input md:col-span-2" />

                                    {submitCount ? errors.challanDate ? <div className="mt-1 text-danger">{errors.challanDate}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.totalVatAmount ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="totalVatAmount">Total Vat Amount* </label>
                                    <Field name="totalVatAmount" type="text" id="totalVatAmount" placeholder="Total Vat Amount" className="form-input md:col-span-2" />

                                    {submitCount ? errors.totalVatAmount ? <div className="mt-1 text-danger">{errors.challanNumber}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.grandTotalAmount ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="grandTotalAmount">Grand Total Amount* </label>
                                    <Field name="grandTotalAmount" type="text" id="grandTotalAmount" placeholder="Grand Total Amount" className="form-input md:col-span-2" />

                                    {submitCount ? errors.grandTotalAmount ? <div className="mt-1 text-danger">{errors.grandTotalAmount}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                                <div className={submitCount ? (errors.remarks ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="remarks">Remarks </label>
                                    <Field name="remarks" type="text" id="remarks" placeholder="Remarks" className="form-input md:col-span-2" />

                                    {submitCount ? errors.remarks ? <div className="mt-1 text-danger">{errors.remarks}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                            </div>
                            



                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                                onClick={() => {
                                    if (touched.recieveNo && !errors.recieveNo) {
                                        submitForm();
                                    }
                                }}
                            >
                                Submit Form
                            </button>
                        </Form>
                    )}
                </Formik>
                </div>

                {/* Inline */}

                {/* Auto-sizing */}

                {/* Actions Buttons */}
                
            </div>
        </div>
    );
};

export default ImportPage;

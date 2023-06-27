'use client'

import { AiFillCloseCircle } from "react-icons/ai";


const AddModal = ({ handleAddNewModalClose }) => {


    const handleAddUser = async (e) => {
        e.preventDefault();

        const form = e.target;
        const vendor_name = form.vendor_name.value;
        const bank_account = form.bank_account.value;
        const bank_name = form.bank_name.value;
        const address_1 = form.address_1.value;
        const address_2 = form.address_2.value;
        const city = form.city.value;
        const country = form.country.value;
        const zip = form.zip.value;

        console.log({ vendor_name, bank_account, bank_name, address_1, address_2, city, country, zip });


        fetch('/api/connect', {
            method: 'POST',
            headers: { "Content_Type": "application/json" },
            body: JSON.stringify({
                vendor_name: vendor_name,
                bank_account: bank_account,
                bank_name: bank_name,
                address_1: address_1,
                address_2: address_2,
                city: city,
                country: country,
                zip: zip
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log('added', data);
            })
            .catch((err) => {
                console.log(err)
            })


    }


    return (
        <div>
            <div className="modal-wrapper"> </div>
            <div className="modal-container">
                <div className="md:w-[30rem] w-[20rem] bg-white p-5 rounded-xl">
                    <div className="border-b-2 pb-2 flex justify-between items-center">
                        <h2 className="text-xl" >Add Vendor</h2>
                        <button onClick={handleAddNewModalClose} title='close' ><AiFillCloseCircle className='text-2xl text-red-600' /></button>
                    </div>
                    <form onSubmit={handleAddUser} className='flex flex-col gap-5 my-5' >
                        <input type="text" name='vendor_name' placeholder='Vendor Name*' required />
                        <input type="text" name='bank_account' placeholder='Bank Account No.*' required />
                        <input type="text" name='bank_name' placeholder='Bank Name*' required />
                        <input type="text" name='address_1' placeholder='Address Line 1*' required />
                        <input type="text" name='address_2' placeholder='Address Line 2' />
                        <input type="text" name='city' placeholder='City*' required />
                        <input type="text" name='country' placeholder='Country*' required />
                        <input type="number" name='zip' placeholder='Enter Zip Code*' required />
                        <button type='submit' className='bg-[#9ea1ff] px-3 py-1 font-semibold text-white hover:bg-[#6b70ff] mx-auto' >Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
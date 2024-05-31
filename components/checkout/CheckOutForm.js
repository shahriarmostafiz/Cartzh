import React from 'react';

const CheckOutForm = ({ userInfo, dictionary }) => {


    return (
        <div className="col-span-8 border border-gray-200 p-4 rounded">
            <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="lname" className="text-gray-600">
                            {dictionary?.fName} <span className="text-primary">*</span>
                        </label>
                        <input

                            type="text"
                            required
                            name="fname"
                            id="fname"
                            className="input-box"
                            defaultValue={
                                userInfo?.shippingAddress?.name?.split(" ")[0] ?? ""
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="lname" className="text-gray-600">
                            {dictionary?.lName} <span className="text-primary">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="lname"
                            id="lname"
                            className="input-box"
                            defaultValue={
                                userInfo?.shippingAddress?.name?.split(" ")[1] ?? ""
                            }
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="region" className="text-gray-600">
                        {dictionary?.country} <span className="text-primary">*</span>
                    </label>
                    <input type="text"
                        defaultValue={
                            userInfo?.shippingAddress?.region ?? ""
                        }
                        required name="region" id="region" className="input-box" />
                </div>
                <div>
                    <label htmlFor="address" className="text-gray-600">
                        {dictionary?.streetAddress} <span className="text-primary">*</span>
                    </label>
                    <input type="text"
                        defaultValue={
                            userInfo?.shippingAddress?.address ?? ""
                        }
                        required name="address" id="address" className="input-box" />
                </div>
                <div>
                    <label htmlFor="city" className="text-gray-600">
                        {dictionary?.city} <span className="text-primary">*</span>
                    </label>
                    <input type="text"
                        defaultValue={
                            userInfo?.shippingAddress?.city ?? ""
                        }
                        required name="city" id="city" className="input-box" />
                </div>
                <div>
                    <label htmlFor="phone" className="text-gray-600">
                        {dictionary?.phone} <span className="text-primary">*</span>
                    </label>
                    <input type="text"
                        defaultValue={
                            userInfo?.shippingAddress?.phone ?? userInfo?.phone ?? ""
                        }
                        required name="phone" id="phone" className="input-box" />
                </div>
                <div>
                    <label htmlFor="email" className="text-gray-600">
                        {dictionary?.emailAddress} <span className="text-primary">*</span>
                    </label>
                    <input

                        type="email" name="email" id="email" className="input-box" defaultValue={userInfo?.email} />
                </div>

            </div>
        </div>

    );
};

export default CheckOutForm;

// <div>
//                  <label htmlFor="company" className="text-gray-600">
//                    {dictionary?.company}   <span className="text-primary">*</span>
//             </label>
//           <input type="text"
//             name="company" id="company" className="input-box" />
//   </div >
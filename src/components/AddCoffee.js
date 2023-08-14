import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.name.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, test, category, details, photo};

        console.log(newCoffee);

        // send to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
        
    }

    return (
        <div className='bg-[#F4F3F0] P-24'>
            <div className='container mx-auto px-8 pt-6'>
                <h2 className='text-3xl font-extrabold'>Add a Coffee </h2>
                <form onSubmit={handleAddCoffee}>
                    {/* form row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='test' placeholder="Test" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className='pb-16'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' placeholder="Photo url" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                    </div>
                    <input type="submit" value="Add Coffee" className='btn btn-block bg-gray-700 text-white hover:bg-gray-500' />
                </form>
            </div>
            
        </div>
    );
};

export default AddCoffee;
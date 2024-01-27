import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import "./Profile.css"

const Profile = () => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        setTimeout(() => {
            if (data.name && data.gender && data.email && data.number) {
                // Successful submission
                toast.success('Submitted successfully!', {
                    position: 'top-center',
                });
            } else {
                // Failed submission
                toast.error('Failed to submit form. Please fill in all fields.', {
                    position: 'top-center',
                });
            }

            // Reset the form
            reset();
        }, 1000);
    };

    return (
        <div className='profile'>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Profile</h1>
                </div>
                <div>
                    <label>Name</label>
                    <input
                        placeholder="Enter your name"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Za-z ]+$/,
                        })}
                    />

                    <span className="error">
                        {errors.name?.type === "required" && "Name is required"}
                        {errors.name?.type === "pattern" && "Name should not contain numbers"}
                    </span>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <div>
                            <input
                                type="radio"
                                {...register("gender", { required: true })}
                                value="male"
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register("gender", { required: true })}
                                value="female"
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register("gender", { required: true })}
                                value="other"
                            />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <span className="error">{errors.gender && "Gender is required"}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="Enter your email"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                    />
                    <span className="error">
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" &&
                            "Entered email is in the wrong format"}
                    </span>
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input
                        placeholder="Enter your mobile no."
                        type="text"
                        {...register("number", {
                            required: true,
                            pattern: /^(0|[1-9][0-9]*)$/,
                            minLength: 10,
                            maxLength: 10,
                        })}
                    />
                    <span className="error">
                        {errors.number?.type === "required" && "Mobile no. is required"}
                        {errors.number?.type === "minLength" &&
                            "Entered number is less than 10 digits"}
                        {errors.number?.type === "maxLength" &&
                            "Entered number is more than 10 digits"}
                    </span>
                </div>
                <div>
                    <input className="button" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Profile;
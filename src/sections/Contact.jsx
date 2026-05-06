import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const contactSchema = z.object ({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(5, "Message is required"),

  });

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    } = useForm({
      resolver: zodResolver(contactSchema),
    });
    function onSubmit(data) {
      console.log(data);
    }
  return (
    <section id="contact" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-center">CONTACT</h3>
        <div className="flex justify-center mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white shadow-lg p-6 space-y-4 rounded-xl">
            <div className="flex flex-col gap-3">
              <label className="text-xl md:text-2xl">Name</label>
              <input {...register("name")} className="w-full border outline-none rounded-md p-2 text-sm md:text-lg focus:ring-2 focus:ring-yellow-500" type="text" name="name" placeholder="type your name" />
              {
              errors.name && (
                 <p>
                  {errors.name.message}
                 </p>
              )
            }
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-xl md:text-2xl">Email</label>
              <input {...register("email")} className=" w-full border outline-none rounded-md p-2 text-sm md:text-lg focus:ring-2 focus:ring-yellow-500" type="email" name="email" placeholder="type your email" />
               {
              errors.email && (
                 <p>
                  {errors.email.message}
                 </p>
              )
            }
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl md:text-2xl">Message</label>
              <textarea {...register("message")} className="w-full border outline-none rounded-md p-2 text-sm md:text-lg focus:ring-2 focus:ring-yellow-500"
                type="message"
                name="message"
                placeholder="type your message"
                rows={5}
              ></textarea>
               {
              errors.message && (
                 <p>
                  {errors.message.message}
                 </p>
              )
            }
            </div>
            <button type="Submit" className="px-3 py-2 bg-yellow-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

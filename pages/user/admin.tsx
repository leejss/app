import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { postUser } from "../../apis/user";
import { User } from "../../types/User";

type InputType = {
  name: string;
  level: number;
};

const AdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const mutation = useMutation((data: User) => {
    return postUser(data);
  });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="level">Level</label>
          <input type="text" {...register("level")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AdminPage;

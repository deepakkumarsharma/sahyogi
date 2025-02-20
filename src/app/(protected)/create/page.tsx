"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateFormInput } from "@/models/project";
import Image from "next/image";
import { useForm } from "react-hook-form";

const CreatePage = () => {
  const { register, handleSubmit } = useForm<CreateFormInput>();

  const onSubmit = (data: CreateFormInput) => {
    window.alert(JSON.stringify(data, null, 2));

    return true;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12">
      <Image
        width={340}
        height={340}
        alt="github-svg"
        src="/undraw_github.svg"
      />
      <div>
        <div>
          <h1 className="font-semibold text-2xl">
            Link your Github Repository
          </h1>
          <p className="text-lightBlack">
            Enter the URL of your repository to link it to{" "}
            <span className="font-bold text-secondary">Sahyogi</span>
          </p>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <Input
                type="text"
                placeholder="Project name"
                {...register("projectName", { required: true })}
              />
              <Input
                type="url"
                placeholder="Github URL"
                {...register("reportUrl", { required: true })}
              />
              <Input
                type="text"
                placeholder="Github token"
                {...register("githubToken", { required: true })}
              />
            </div>
            <Button className="w-full text-white font-bold mt-2" type="submit">
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

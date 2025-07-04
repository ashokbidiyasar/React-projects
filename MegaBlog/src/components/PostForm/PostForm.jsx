import React, { useCallback,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../";
import Database_service from "../../appwrite/auth_services/configuration";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues,reset } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  useEffect(() => {
    if (post) {
      reset({
        title: post.title || "",
        slug: post.$id || "",
        content: post.content || "",
        status: post.status || "active",
      });
    }
  }, [post, reset]);
  

  const navigate = useNavigate();
  const UserData = useSelector((state) => state.auth.UserData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await Database_service.UploadFile(data.image[0]) : null;

      if (file && post.featuredImage) {
        await Database_service.DeleteFile(post.featuredImage);
      }
      

      const dbPost = await Database_service.UpdatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await Database_service.UploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await Database_service.createPost({ ...data, userId: UserData.$id });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

 useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input label="Title :" placeholder="Title" className="mb-4" {...register("title", { required: true })} />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={Database_service.GetFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4 p-1"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full cursor-pointer hover:bg-blue-900">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

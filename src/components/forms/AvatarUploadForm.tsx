import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { avatarUploadSchema, AvatarUploadSchemaType } from "../../types/avatarUploadSchema";
import { uploadAvatar } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FiCamera } from "react-icons/fi";
import { AvatarWrap } from "./Form.styled";


const AvatarUploadForm = () => {
const dispatch = useAppDispatch();
    const {user} = useAuth()
    const [selectedImg, setSelectedImg] =  useState<string >(user?.image || "/avatar.png");

    const {
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
    } = useForm<AvatarUploadSchemaType>({
      resolver: zodResolver(avatarUploadSchema),
    });

    const onSubmit = async (data: AvatarUploadSchemaType) => {
      dispatch(uploadAvatar({ image: data.image }))
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // Use optional chaining to handle null or undefined
      if (!file) return;

      const validation = avatarUploadSchema.safeParse({ image: file });
      if (!validation.success) {
        // toast.error(validation.error.errors[0].message);
        return;
    }
    setSelectedImg(URL.createObjectURL(file));
    setValue("image", file, { shouldValidate: true });
      // ✅ Manually trigger form submission after file selection
      
      
      handleSubmit(onSubmit)();
  };

  return (

    <AvatarWrap  className="flex flex-col items-center gap-4">
        <img
          src={selectedImg}
          alt="Profile image"
          className="size-32 rounded-full object-cover border-4 "
        />
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="relative upload">
        <label
          htmlFor="avatar-upload"
           >
        <FiCamera className="w-5 h-5 text-base-200 upload" />
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={handleImageUpload}
            disabled={isSubmitting}
          />
        </label>
        <button type="submit" className="hidden"></button>
      </form>
      {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}

      <p className="text-sm text-zinc-400">
        {/* {isSubmitting ? "Uploading..." : "Click the camera icon to update your photo"} */}
      </p>
    </AvatarWrap>
  )
}

export default AvatarUploadForm
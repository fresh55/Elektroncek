import React, { useCallback } from "react";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Divide } from "lucide-react";

const uploadPreset = "je08w5qq";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        fetch("https://api.cloudinary.com/v1_1/elektroncek/image/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            const { secure_url } = data;
            onChange(secure_url);
          })
          .catch((error) => {
            console.log("Error uploading avatar:", error);
          });
      }
    },
    [onChange]
  );

  return (
    <div
      className="
    group 
    mt-3
    relative
    rounded-full
    transition
    border-dashed 
    border-2
    border-neutral
    flex
    flex-col
    justify-center
    items-center
    text-center
    text-neutral-600
    hover:opacity-90 
    shadow-xl
    w-36
    h-36
   
    "
    >
      <label
        htmlFor="picture"
        className="
        
        cursor-pointer
        relative
    rounded-full
    w-full
    h-full
        
       
        
        "
      
      >
        <div className="overflow-hidden
        
        relative
    rounded-full
        w-full
        h-full">
        {value && (
          <Image
            fill={true}
            style={{ objectFit: "cover" }}
            src={value}
            alt="House"
          />
        )}
        </div>
        <div className="absolute -bottom-2 -right-2 text-white p-2 bg-primary rounded-full group-hover:text-primary group-hover:bg-white">
          <TbPhotoPlus className=" " size={30} />
        </div>
      </label>

      <Input
        type="file"
        id="picture"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};

export default ImageUpload;

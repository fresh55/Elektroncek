"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState,useCallback } from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ImagePlus, Trash } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
const uploadPreset = "je08w5qq";


interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
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

  if (!isMounted) {
    return null;
  }

  return ( 
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="sm">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              alt="Image"
              src={url}
            />
          </div>
        ))}
      </div>
    
      <div className="grid w-full max-w-sm items-center gap-1.5">
      
      <Input className="cursor-pointer" id="picture" type="file" onChange={handleUpload} />
    </div>
    </div>
  );
}
 
export default ImageUpload;
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import { useRef, useState } from "react";
import { uploadImage } from "../request";
import { toast } from "sonner";
import { PlusIcon, UpdateIcon } from "@radix-ui/react-icons";
import { allowImageSize } from "../lib/my-utils";
import DefaultImg from "../../public/vite.svg";
import { useEffect } from "react";

export default function UploadImg() {
  const urlInput = useRef(null);
  const [value, setValue] = useState();
  function handleUploadImage(img, type = "local") {
    if (type === "url") {
      if (img !== value) {
        toast.loading("rasm yuklanmoqda...");
        setValue(img);
      } else {
        toast.info("bu rasmni yuklagansiz");
      }
    } else {
      if (img.size >= allowImageSize) {
        toast.error("rasm hajmi 5mb kichkina bo'lishi kerak");
      } else {
        toast.loading("rasm yuklanmoqda...");
        uploadImage(img)
          .then((res) => {
            setValue(res);
          })
          .catch(({ message }) => {
            toast.error(message);
          });
      }
    }
  }

  useEffect(() => {
    setValue(DefaultImg);
  }, []);
  return (
    <div className="w-full">
      <Label>Rasm yuklash</Label>
      <Tabs defaultValue="default" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="local">
            Local
          </TabsTrigger>
          <TabsTrigger className="w-full" value="url">
            URL
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setValue(DefaultImg)}
            className="w-full"
            value="default"
          >
            Deflaut
          </TabsTrigger>
        </TabsList>
        <TabsContent value="local">
          <Label>
            <span
              className={`${buttonVariants({ variant: "default" })} w-full`}
            >
              {!value ? "rasm yulash" : <UpdateIcon />}
            </span>
            <Input
              accept="image/*"
              onChange={({ target: { files } }) => handleUploadImage(files[0])}
              className="sr-only"
              type="file"
              placeholder="rasm yuklash"
            />
          </Label>
        </TabsContent>
        <TabsContent value="url">
          <Label htmlFor="url">Havola:</Label>
          <div className="flex gap-2">
            <Input
              ref={urlInput}
              type="url"
              defaultValue={value && value !== "/public/vite.svg" ? value : ""}
              id="url"
              placeholder=" havolani kiriting..."
            />
            <Button
              onClick={() => handleUploadImage(urlInput?.current.value, "url")}
              type="button"
            >
              {value ? <UpdateIcon /> : <PlusIcon />}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="default">
          <Button onClick={() => setValue(DefaultImg)} className="w-full" variant="secondary">
            Default rasm qo'yish <PlusIcon className="ml-2" />
          </Button>
        </TabsContent>
      </Tabs>
      {value && (
        <img
          onLoad={() => {
            toast.dismiss();
            toast.success("rasm muvaffaqiyatli yuklandi");
          }}
          onError={() => setValue(DefaultImg)}
          height="250"
          className="mt-5 h-[250px] w-full rounded-lg shadow-md"
          src={value}
          alt="yuklangan rasm"
        />
      )}
    </div>
  );
}

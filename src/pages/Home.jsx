import { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAppStore } from "../lib/suzand";
import { getFlowers, refreshToken } from "../request";
import { Button } from "../components/ui/button";
// shadcn
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



import { PlusIcon, UpdateIcon } from "@radix-ui/react-icons";
import { getFormData } from "../lib/my-utils";
import { Label } from "../components/ui/label";
import NewAddItemModal from "../components/NewAddItemModal";

function Home() {
  const [loading, setLoading] = useState(true);
  const flowers = useAppStore((state) => state.flowers);
  const admin = useAppStore((state) => state.admin);
  const setFlowers = useAppStore((state) => state.setFlowers);
  const setAdmin = useAppStore((state) => state.setAdmin);
  const setAddItemModal = useAppStore((state) => state.setAddItemModal);



  useEffect(() => {
    setLoading(true);
    getFlowers(admin?.access_token)
      .then(({ data }) => {
        setFlowers(data);
      })
      .catch(({ message }) => {
        if (message == 403) {
          console.log(1);
          refreshToken(admin?.refresh_token)
            .then(({ access_token }) => {
              console.log(access_token);
              setAdmin({ ...admin, access_token });
            })
            .catch(() => {
              toast.info("tizimga qayta kiring");
              setAdmin(null);
            });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [admin]);
  return (
    <>
      <div className="base-container flex h-full flex-col">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="h2 mb-2 border-none">Boshqaruv paneli</h2>
          <Button onClick={setAddItemModal}>
            Qo'shish <PlusIcon className="ml-2 text-xl" />
          </Button>
        </div>
        <Table>
          <TableCaption>
            {loading ? "Yuklanmoqda.." : "Gullar haqida ma'lumot"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">id</TableHead>
              <TableHead>gul nomi</TableHead>
              <TableHead>turkumi</TableHead>
              <TableHead className="text-right">rangi</TableHead>
              <TableHead className="text-right">narxi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
            {flowers &&
              flowers.map(({ name, id, color, price, category }) => {
                return (
                  <TableRow key={id}>
                    <TableCell className="font-medium">{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell className="flex justify-end">
                      <span
                        style={{ background: color }}
                        className={`block h-5 w-5 rounded-full border`}
                      ></span>
                    </TableCell>
                    <TableCell className="text-right">{price}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        {/* {loading && (
        <div className="flex items-center gap-2 w-full justify-center pt-5">
          Yuklanmoqda..
          <UpdateIcon className="animate-spin" />
        </div>
      )} */}
      </div>
      <NewAddItemModal/>
    </>
  );
}

export default Home;

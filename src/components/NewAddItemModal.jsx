import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useAppStore } from "../lib/suzand";
import SelectCategory from "./SelectCategory";
import SelectColor from "./SelectColor";
import { SelectCountry } from "./SelectCountry";
import { Textarea } from "./ui/textarea";
import UploadImg from "./UploadImg";

function NewAddItemModal() {
  const addItemModal = useAppStore((state) => state.addItemModal);
  const setAddItemModal = useAppStore((state) => state.setAddItemModal);

  function handleSubmit(e) {
    e.preventDefault();
    const result = getFormData(e.target);
  }
  return (
    <Dialog open={addItemModal} onOpenChange={setAddItemModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Malumot qoshish</DialogTitle>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Gul nomi * </Label>
              <Input id="name" placeholder="Gul nomini kiriting" name="name" />
            </div>
            <div>
              <Label htmlFor="price">narxi * </Label>
              <Input id="price" placeholder="Narxini kiriting" name="price" />
            </div>
            <div>
              <SelectCategory />
              <SelectColor />
            </div>
            <div>
              <SelectCountry />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="summary">Gul haqida*</Label>
              <Textarea
                placeholder="Gul haqida ma'lumot kiriting"
                id="summary"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="smell">Hidi*</Label>
              <Input type="text" id="smell" placeholder="hidini kiriting" />
            </div>
                <UploadImg/>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default NewAddItemModal;

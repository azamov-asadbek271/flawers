import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../components/ui/label";
import { collectItem } from "../lib/my-utils";
import { useAppStore } from "../lib/suzand";

function SelectCategory() {
  const flowers = useAppStore((state) => state.flowers);
  return (
    flowers && (
      <div>
        <Label htmlFor="category"> Turkimni tanlang</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Turkimni tanlang" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto">
            {collectItem(flowers, "category").map((i) => {
              return (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    )
  );
}

export default SelectCategory;

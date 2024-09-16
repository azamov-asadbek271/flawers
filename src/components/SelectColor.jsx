import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "../components/ui/label";
import { collectItem } from "../lib/my-utils";
import { useAppStore } from "../lib/suzand";

function SelectColor() {
    const [value ,setValue] = useState("rangni tanlang")
  const flowers = useAppStore((state) => state.flowers);
  return (
    flowers && (
      <div>
        <Label htmlFor="category"> Rang</Label>
        <Select value={value} onValueChange={(value) => setValue(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="lowercase">
              <div className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: value }}
                  className="inline-block h-4 w-4 rounded-full border"
                ></span>
                <span className="lowercase tracking-wider">
                  {value.toLowerCase()}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[200px]  overflow-y-auto">
            {collectItem(flowers, "color").map((i) => {
              return (
                <SelectItem key={i} value={i}>
                  <div className="flex items-center gap-2">
                    <span
                      style={{ backgroundColor: i }}
                      className="inline-block h-4 w-4 rounded-full border"
                    ></span>
                    <span className="lowercase tracking-wider">
                      {i.toLowerCase()}
                    </span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    )
  );
}

export default SelectColor;

import React, { useCallback, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCities } from "@/lib/other";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectMestoProps {
  onChange: (value: string) => void;
  value: string;
}

const SelectMesto: React.FC<SelectMestoProps> = ({ onChange, value }) => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCities();
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue); // Call the onChange callback with the selected value
      setOpen(false); // Close the popover
    },
    [onChange]
  );

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? value : "Izberi mesto"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] max-h-40 overflow-y-auto p-0 shadow-lg">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {cities.map((mesto,index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleSelect(mesto)} // Call handleSelect with the selected value
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === mesto ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {mesto}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectMesto;
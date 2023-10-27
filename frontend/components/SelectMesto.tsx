import React, { useCallback, useState, useEffect } from "react";
import { School } from "lucide-react";
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
  id?: string;
}

const SelectMesto: React.FC<SelectMestoProps> = ({ onChange, value, id }) => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchCities = useCallback(async () => {
    try {
      const data = await getCities();
      setCities(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (open && cities.length === 0) {
      // Only fetch if dropdown is opened and cities are not already fetched
      fetchCities();
    }
  }, [open, fetchCities]);

  const handleSelect = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue); // Call the onChange callback with the selected value
      setOpen(false); // Close the popover
    },
    [onChange]
  );

  return (
    <div id={id}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
            onClick={() => {
              if (!open) {
                fetchCities(); // Fetch cities when button is clicked
              }
              setOpen(!open); // Toggle the open state
            }}
          >
            {value ? (
              <div className="flex text-gray-600 items-center justify-center">
                <School className="w-4 h-4 mr-2" />

                {value}
              </div>
            ) : (
              <div className="flex text-gray-600 items-center justify-center">
                <School className="w-4 h-4 mr-2" />
                Izberi mesto
              </div>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-50 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          avoidCollisions={false}
          side="bottom"
          className="w-72 p-0 overflow-y-auto max-h-[300px] shadow-lg"
        >
          <Command>
            <CommandInput placeholder="Najdi" />
            <CommandEmpty>Ni najdenega mesta</CommandEmpty>
            <CommandGroup>
              {cities.map((mesto, index) => (
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

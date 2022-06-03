import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBrLocale from "date-fns/locale/pt-BR";
import { Container } from "./Filter.style";

export function FilterMes() {
  const [month, setMonth] = useState<Date | null>(new Date());

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBrLocale}>
        <DatePicker
          views={["year", "month"]}
          label='Mês'
          value={month}
          minDate={new Date("2020-03-01")}
          maxDate={new Date("2029-06-01")}
          onChange={(newMonth) => {
            setMonth(newMonth);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  );
}

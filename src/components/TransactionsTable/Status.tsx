import { Box } from "@mui/system";
import { MdCheckCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

export const Status = ({ value }: { value: string }) =>
  value === "1" ? (
    <Box color='success.main' display='flex' justifyContent='center'>
      <MdCheckCircleOutline size={21} />
      &nbsp;Pago
    </Box>
  ) : (
    <Box color='error.main' display='flex' justifyContent='center'>
      <MdRemoveCircleOutline size={21} />
      &nbsp;Pendente
    </Box>
  );

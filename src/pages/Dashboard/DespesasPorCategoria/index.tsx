import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  MdFastfood,
  MdOutlineHomeWork,
  MdSchool,
  MdWifiCalling3,
} from "react-icons/md";
import {
  RiCarWashingFill,
  RiEmotionHappyFill,
  RiHeartPulseFill,
} from "react-icons/ri";
import { Card } from "../../../components/Card";

export const DespesasPorCategoria = () => {
  const categorias = [
    {
      icon: <RiEmotionHappyFill size={21} />,
      valor: "RS 123,00",
      tamanho: "30px",
    },
    { icon: <MdFastfood size={21} />, valor: "RS 423,00", tamanho: "0px" },
    {
      icon: <RiHeartPulseFill size={21} />,
      valor: "RS 223,00",
      tamanho: "40px",
    },
    { icon: <MdSchool size={21} />, valor: "RS 69,00", tamanho: "80px" },
    {
      icon: <MdOutlineHomeWork size={21} />,
      valor: "RS 300,00",
      tamanho: "50px",
    },
    {
      icon: <RiCarWashingFill size={21} />,
      valor: "RS 300,00",
      tamanho: "50px",
    },
    { icon: <MdWifiCalling3 size={21} />, valor: "RS 100,00", tamanho: "45px" },
  ];
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        height: "100%",
      }}
    >
      <Typography variant='subtitle3' color='primary' gutterBottom>
        Despesas por categoria
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {categorias.map((categoria) => (
          <Box
            sx={{
              display: "grid",
              gap: "30px",
              alignItems: "center",
              gridTemplateColumns: "21px max-content 100px",
            }}
          >
            {categoria.icon}
            <Box
              sx={{
                width: categoria.tamanho,
                paddingInline: "200px",
                height: "4px",
                backgroundColor: "#6296B3",
              }}
            />
            <Typography variant='body1'>{categoria.valor}</Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

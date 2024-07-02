import React, { useState } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Hisse, AllCurrency, GoldPrice, Cripto } from "../api";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const Getir = () => {
  const [term, setTerm] = useState([]);

  const handleClick = async () => {
    let result: any = [];
    switch (value) {
      case "Hisse Senedi": {
        result = await Hisse();
        result.map((item: any) => {
          item.id = item.code;
        });

        setTerm(result);

        break;
      }
      case "Doviz": {
        result = await AllCurrency();
        result.map((item: any) => {
          item.id = item.code;
        });

        setTerm(result);
        break;
      }
      case "Bitcoin": {
        result = await Cripto();
        result.map((item: any) => {
          item.id = item.code;
        });

        setTerm(result);
        break;
      }
      case "Altın":
        {
          result = await GoldPrice();
          result.map((item: any) => {
            item.id = item.name;
          });

          setTerm(result);
          break;
        }
        break;
      default:
        return;
    }
  };

  const secnk = ["Hisse Senedi", "Doviz", "Bitcoin", "Altın"];
  const [value, setValue] = React.useState<string | null>(secnk[0]);

  let columns: GridColDef<(typeof term)[number]>[] = [];
  if (value === "Hisse Senedi") {
    columns = [
      {
        field: "text",
        headerName: "İsim",
        width: 150,
        editable: false,
      },

      {
        field: "code",
        headerName: "Hisse Kodu",
        width: 150,
        editable: false,
      },

      {
        field: "rate",
        headerName: "Değişim Oranı",
        width: 150,
        editable: false,
      },
      {
        field: "lastprice",
        headerName: "Son Fiyat",
        width: 150,
        editable: false,
      },
      {
        field: "hacimstr",
        headerName: "Hacim",
        width: 150,
        editable: false,
      },
    ];
  } else if (value === "Doviz") {
    columns = [
      {
        field: "name",
        headerName: "Doviz Cinsi",
        width: 150,
        editable: false,
      },
      {
        field: "buying",
        headerName: "Alış",
        width: 150,
        editable: false,
      },
      {
        field: "selling",
        headerName: "Satış",
        width: 150,
        editable: false,
      },
      {
        field: "rate",
        headerName: "Değişim Oranı",
        width: 150,
        editable: false,
      },
    ];
  } else if (value === "Bitcoin") {
    columns = [
      {
        field: "name",
        headerName: "İsim",
        width: 150,
        editable: false,
      },
      {
        field: "code",
        headerName: "Kod",
        width: 150,
        editable: false,
      },
      {
        field: "pricestr",
        headerName: "Fiyat",
        width: 150,
        editable: false,
      },
      {
        field: "currency",
        headerName: "Para Birimi",
        width: 150,
        editable: false,
      },
      {
        field: "changeDaystr",
        headerName: "Günlük Değişim",
        width: 150,
        editable: false,
      },
      {
        field: "volumestr",
        headerName: "Hacim",
        width: 150,
        editable: false,
      },
    ];
  } else if (value === "Altın") {
    columns = [
      {
        field: "name",
        headerName: "Türü",
        width: 150,
        editable: false,
      },
      {
        field: "buyingstr",
        headerName: "Alış",
        width: 150,
        editable: false,
      },
      {
        field: "sellingstr",
        headerName: "Satış",
        width: 150,
        editable: false,
      },
      {
        field: "rate",
        headerName: "Günlük Değişim",
        width: 150,
        editable: false,
      },
    ];
  } else {
    columns = [];
  }

  return (
    <>
      <Stack spacing={5}>
        <Stack direction="row" spacing={10}>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
              setTerm([]);
            }}
            disablePortal
            id="combo-box-demo"
            options={secnk}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />

          <Button variant="contained" size="medium" onClick={handleClick}>
            Getir
          </Button>
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          sx={{ height: 600, width: "100%" }}
        >
          <DataGrid rows={term} columns={columns}></DataGrid>
        </Box>
      </Stack>
    </>
  );
};

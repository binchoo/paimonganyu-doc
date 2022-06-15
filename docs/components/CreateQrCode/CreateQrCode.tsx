import { getPublicKey } from "@site/src/api";
import React, { useEffect, useMemo, useState } from "react";
import { JSEncrypt } from "jsencrypt";
import { Box, Button, Card, Modal, TextField } from "@material-ui/core";
import { QRCodeSVG } from "qrcode.react";

export default function CreateQrCode(): JSX.Element {
  const [ltuid, setLtuid] = useState<string>("");
  const [ltoken, setLtoken] = useState<string>("");
  const [cookietoken, setCookietoken] = useState<string>("");
  const [data, setData] = useState<string>("");

  const [publicKey, setPublicKey] = useState<string | null>(null);
  useEffect(() => {
    getPublicKey().then((key: string) => {
      setPublicKey(key);
    });
  }, []);
  const digestRSA = useMemo(
    () => (publicKey ? digestRSAFactory(publicKey) : () => ""),
    [publicKey]
  );
  return (
    <Card variant="outlined" style={{ padding: "20px " }}>
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{ marginBottom: "30px" }}
      >
        <p>
          <TextField
            id="standard-basic"
            label="ltuid"
            variant="standard"
            style={{ width: "100%" }}
            onChange={onChangeHandlerFactory(setLtuid)}
          />
        </p>
        <p>
          <TextField
            id="standard-basic"
            label="ltoken"
            variant="standard"
            style={{ width: "100%" }}
            onChange={onChangeHandlerFactory(setLtoken)}
          />
        </p>
        <p>
          <TextField
            id="standard-basic"
            label="cookietoken"
            variant="standard"
            style={{ width: "100%" }}
            onChange={onChangeHandlerFactory(setCookietoken)}
          />
        </p>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              setData(
                digestRSA({
                  ltuid,
                  ltoken,
                  cookietoken,
                })
              );
            }}
          >
            생성하기!
          </Button>
        </div>
      </form>
      <Modal
        open={!!data}
        onClose={() => setData("")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <QRCodeSVG value={data} size={200} />
        </Box>
      </Modal>
    </Card>
  );
}

const onChangeHandlerFactory =
  (setValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

const digestRSAFactory = (publicKey: string) => {
  const jSEncrypt = new JSEncrypt();
  jSEncrypt.setPublicKey(publicKey);
  return ({ ltuid, ltoken, cookietoken }: Record<string, string>): string => {
    return jSEncrypt.encrypt(`${ltuid}:${ltoken}:${cookietoken}`) || "";
  };
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFF",
  border: "1px solid #000",
  boxShadow: 50,
  p: 4,
};

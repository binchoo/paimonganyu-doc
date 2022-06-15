import { getPublicKey } from "@site/src/api";
import React, { useEffect, useMemo, useState } from "react";
import { JSEncrypt } from "jsencrypt";
import { Button, TextField } from "@material-ui/core";
import { Base64 } from "@site/src/utils/base64";

export default function CreateQrCode(): JSX.Element {
  const [ltuid, setLtuid] = useState<string>("");
  const [ltoken, setLtoken] = useState<string>("");
  const [cookietoken, setCookietoken] = useState<string>("");
  const [data, setData] = useState<any>("");

  const [publicKey, setPublicKey] = useState<string | null>(null);
  useEffect(() => {
    getPublicKey().then((key: string) => {
      setPublicKey(Base64.decode(key));
    });
  }, []);
  const digestRSA = useMemo(
    () => (publicKey ? digestRSAFactory(publicKey) : () => ""),
    [publicKey]
  );
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <p>
          <TextField
            id="standard-basic"
            label="ltuid"
            variant="standard"
            onChange={onChangeHandlerFactory(setLtuid)}
          />
        </p>
        <p>
          <TextField
            id="standard-basic"
            label="ltoken"
            variant="standard"
            onChange={onChangeHandlerFactory(setLtoken)}
          />
        </p>
        <p>
          <TextField
            id="standard-basic"
            label="cookietoken"
            variant="standard"
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
      <pre>{JSON.stringify(data)}</pre>
      <pre>{publicKey && Base64.encode(publicKey)}</pre>
      <pre>{publicKey}</pre>
    </div>
  );
}

const onChangeHandlerFactory =
  (setValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

const digestRSAFactory = (publicKey: string) => {
  const jSEncrypt = new JSEncrypt();
  jSEncrypt.setPublicKey(publicKey);
  return ({ ltuid, ltoken, cookietoken }: Record<string, string>) => {
    return jSEncrypt.encrypt(`${ltuid}:${ltoken}:${cookietoken}`);
  };
};

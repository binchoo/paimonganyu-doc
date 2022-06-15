import { getPublicKey } from "@site/src/api";
import React, { useEffect, useState } from "react";
import crypto from "crypto-js";

export default function CreateQrCode(): JSX.Element {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [ltuid, setLtuid] = useState<string>("");
  const [ltoken, setLtoken] = useState<string>("");
  const [cookietoken, setCookietoken] = useState<string>("");
  const [data, setData] = useState<Record<string, string>>({});

  useEffect(() => {
    getPublicKey().then((key: string) => {
      setPublicKey(key);
    });
  }, []);

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <p>
          <label>ltuid</label>
          <input
            type="text"
            name="ltuid"
            onChange={onChangeHandlerFactory(setLtuid)}
          />
        </p>
        <p>
          <label>ltoken</label>
          <input
            type="text"
            name="ltoken"
            onChange={onChangeHandlerFactory(setLtoken)}
          />
        </p>
        <p>
          <label>cookietoken</label>
          <input
            type="text"
            name="cookietoken"
            onChange={onChangeHandlerFactory(setCookietoken)}
          />
        </p>
        <div>
          <button
            onClick={() => {
              setData({
                ltuid,
                ltoken,
                cookietoken,
              });
            }}
          >
            생성하기!
          </button>
        </div>
      </form>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

const onChangeHandlerFactory =
  (setValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

// const digestRSA = { publicKey, data };

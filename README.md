# i18n-reactjs-typescript

append the URL with ?lng=hi to change the language

1. added i18 file           --->  https://github.com/amananku26/i18n-reactjs-typescript/blob/main/src/i18n.tsx
2. added locale translation  ---> https://github.com/amananku26/i18n-reactjs-typescript/tree/main/src/locales
3. import "./i18n" in.      ---> https://github.com/amananku26/i18n-reactjs-typescript/blob/main/src/index.tsx 

  |
  |
  |
  <
import "./styles.css";
**import { useTranslation } from "react-i18next";**

export default function App() {
  **const { t } = useTranslation();**
  return (
    <div className="App">
      **{t("text1")}**
    </div>
  );
}

use this way to get the translation

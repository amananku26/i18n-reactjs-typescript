import "./styles.css";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      {t("text1")}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import useCodingLanguage from "../../../../hooks/useCodingLanguage";
import useCodingLevel from "../../../../hooks/useCodingLevel";
import "./settingWindow.css";

const SettingWindow = () => {
  
  const LanguageOptions = useCodingLanguage();
  const levelOptions = useCodingLevel();

  return (
    <div className="settings-window-container">
      <div className="w-75 d-flex flex-column h-100 justify-content-around">
        <Select options={LanguageOptions} name="Wybierz język" />
        <Select options={levelOptions} name="Wybierz poziom" />
        <Button name="Rozpocznij" />
        <Button name="Dodaj nowe pytanie" />
      </div>
    </div>
  );
};

export default SettingWindow;

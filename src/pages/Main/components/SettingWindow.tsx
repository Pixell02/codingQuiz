import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import useCodingLanguage from "../../../../hooks/useCodingLanguage";
import useCodingLevel from "../../../../hooks/useCodingLevel";
import useSelectedValueContext from "../../../../hooks/useSelectedValueContext";
import "./settingWindow.css";

const SettingWindow = () => {
  
  const LanguageOptions = useCodingLanguage();
  const levelOptions = useCodingLevel();
  const navigate = useNavigate();
  const { selectedValues } = useSelectedValueContext();
  const handleStartPress = () => {
    navigate("/quiz");
  }
  const handleAddPress = () => {
    navigate("/add")
  }

  return (
    <div className="settings-window-container">
      <div className="w-75 d-flex flex-column h-100 justify-content-around">
        <Select options={LanguageOptions} name="Wybierz język" className="language" />
        <Select options={levelOptions} name="Wybierz poziom" className="level" />
        <Button
          name="Rozpocznij"
          onClick={handleStartPress}
          blocked={selectedValues.language === "" || selectedValues.level === ""}
        />
        <Button
          name="Dodaj nowe pytanie"
          onClick={handleAddPress}
          blocked={selectedValues.language === "" || selectedValues.level === ""}
        />
      </div>
    </div>
  );
};

export default SettingWindow;

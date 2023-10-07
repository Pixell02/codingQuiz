import JS from "../assets/javascript.jpg";

interface optionProps {
    label: string;
    value: string;
    image: string;
}

const useCodingLanguage = () => {

    const LanguageOption:optionProps[] = [
        {label: "JavaScript", value: "JavaScript", image: JS}
    ]


  return LanguageOption;
}

export default useCodingLanguage

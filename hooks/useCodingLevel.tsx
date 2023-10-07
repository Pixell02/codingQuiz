
interface optionProps {
    label: string;
    value: string;
}

const useCodingLevel = () => {

    const levelOption: optionProps[] = [
        {label: "junior", value: "junior"},
        {label: "mid", value: "mid"},
        {label: "senior", value: "senior"}
    ]



  return levelOption 
}

export default useCodingLevel

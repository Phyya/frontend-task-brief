import "./Checkbox.css"
interface CustomCheckboxProps {
    title: any;
    onChange?: () => void;
    defaultChecked?: boolean
}



const CustomCheckbox = ({ title, defaultChecked }: CustomCheckboxProps) => {
    return <div>

        <label className="container whitespace-nowrap">{title}
            <input type="checkbox" defaultChecked={defaultChecked} />
            <span className="checkmark"></span>
        </label>

    </div>
}


export default CustomCheckbox
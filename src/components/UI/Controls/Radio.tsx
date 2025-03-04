import "./Checkbox.css"
interface CustomCheckboxProps {
  title: any;
  onChange?: () => void;
  defaultChecked?: boolean
  name: string

}



const CustomRadio = ({ title, defaultChecked, name }: CustomCheckboxProps) => {
  return <div>

    <label className="radio-container whitespace-nowrap">{title}
      <input type="radio" defaultChecked={defaultChecked} name={name} />
      <span className="radio"></span>
    </label>

  </div>
}


export default CustomRadio
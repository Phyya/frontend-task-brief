import "./Checkbox.css"


interface SwitchProps {
    title: any;
    onChange?: () => void;
    defaultChecked?: boolean;
}

const Switch = ({ title, defaultChecked, onChange }: SwitchProps) => {
    return (
        <div>
            <label className="switch-container whitespace-nowrap">
                {title}
                <input
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />
                <span className="switch-slider"></span>
            </label>
        </div>
    );
};

export default Switch;

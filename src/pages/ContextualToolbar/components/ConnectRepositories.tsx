import Button from "@/components/UI/Button/Button";
import CustomCheckbox from "@/components/UI/Controls/Checkbox";
import { CONNECT_REPOSITORIES_OPTIONS } from "@/utils/data/deployment-options";

const ConnectRepositories = () => {


    return (

        <div className="rounded-lg bg-secondary border border-tertiary px-3 shadow-sm">
            <div >
                <h3 className="block font-bold text-gray pt-3">
                    Connect repositories to{" "}
                    <span className="bg-purple-100 text-primary text-sm px-2 py-1 rounded font-bold mx-[0.5px]">
                        acme
                    </span>
                </h3>



                <div className="flex flex-col gap-4 mt-6 rounded-lg">
                    {CONNECT_REPOSITORIES_OPTIONS.map((event, index) => (
                        <CustomCheckbox
                            key={index}
                            title={<p className="text-[0.9rem] font-medium -mt-2 -ml-[10px]">{event}</p>}
                        />
                    ))}
                </div>

            </div>
            <div className="flex justify-end space-x-4 my-4 mt-6">
                <Button className="!text-black bg-transparent shadow-none">Cancel</Button>
                <Button className="!bg-primary border-2 border-purple-500 !text-white">Connect repositories</Button>
            </div>
        </div>

    );
};

export default ConnectRepositories;

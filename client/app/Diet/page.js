"use client";
import { Tabs } from "../../components/ui/customtabs";

const DietPage = ({tabs}) => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-auto'>
            <div className='h-[60%] w-[60%] flex flex-col justify-center items-center'>
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}
export default DietPage
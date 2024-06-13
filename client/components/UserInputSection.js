import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "./ui/select";
import { Slider } from "./ui/slider";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdCloudUpload } from "react-icons/io";

import axios from "axios";
import Mealtag from "./Mealtag";

function UserInputSection() {
    const [wght, setWght] = useState(75);
    const [hght, setHght] = useState(180);

    const [tags, setTags] = useState([]);
    const [value, setValue] = useState("");
    const [meal, setMeal] = useState("");

    const [fatloss, setFatloss] = useState(false);
    const [maintain, setMaintain] = useState(false);
    const [gain, setGain] = useState(false);

    const sendData = async() => {
        try {
            const response = await axios.post("http://localhost:8000/data", {
                wght: wght,
                hght: hght,
                tags: tags,
                meal: meal,
                fatloss: fatloss,
                maintain: maintain,
                gain: gain
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error.response ? error.response.data : error.message);
        }
    };

    const handleWghtChange = (value) => {
        setWght(value);
    };

    const handleHghtChange = (value) => {
        setHght(value);
    };

    const handleAddTag = () => {
        setValue(value);
        setTags([...tags, value]);
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    const handleInput = (e) => {
        switch (e) {
            case 0:
                setFatloss(true);
                setMaintain(false);
                setGain(false);
                break;
            case 1:
                setFatloss(false);
                setMaintain(true);
                setGain(false);
                break;
            case 2:
                setFatloss(false);
                setMaintain(false);
                setGain(true);
                break;
            default:
                setFatloss(false);
                setMaintain(false);
                setGain(false);
                break;
        }
    };
    return (
        <div className='h-full w-full flex flex-col justify-between items-center bg-transparent border-[1px] rounded-lg border-zinc-700 p-2'>
            {/* Goal */}
            <div className="flex justify-center items-center w-full bg-[#27272A] px-4 py-1 rounded-lg mt-2">
                <button onClick={() => handleInput(0)} className={`p-2 rounded-lg w-20 flex justify-center items-center ${fatloss ? "bg-black" : "bg-transparent"}`}>
                    <p className="text-white text-sm">Fatloss</p>
                </button>
                <button onClick={() => handleInput(1)} className={`p-2 rounded-lg w-20 flex justify-center items-center ${maintain ? "bg-black" : "bg-transparent"}`}>
                    <p className="text-white text-sm">Maintain</p>
                </button>
                <button onClick={() => handleInput(2)} className={`p-2 rounded-lg w-20 flex justify-center items-center ${gain ? "bg-black" : "bg-transparent"}`}>
                    <p className="text-white text-sm">Gain</p>
                </button>
            </div>

            <div className='flex w-full justify-center items-center mt-6'>
                <div className='flex flex-col w-1/2 justify-center items-center px-1'>
                    <div className='flex w-full justify-between mb-1'>
                        <label className='text-white text-sm font-medium cursor-default'>
                            Weight 
                            <span className='text-[12px] ml-1'>(in kg)</span>
                        </label>
                        <p className="text-white">{wght}</p>
                    </div>
                    <Slider 
                        defaultValue={[wght]} 
                        max={150} 
                        min={30}
                        onValueChange={handleWghtChange}
                        step={1}
                    />
                </div>
                <div className='flex flex-col w-1/2 justify-center items-center px-1 ml-6'>
                    <div className='flex w-full justify-between mb-1'>
                    <label className='text-white text-sm font-medium cursor-default'>
                            Height 
                            <span className='text-[12px] ml-1'>(in cm)</span>
                        </label>
                        <p className="text-white">{hght}</p>
                    </div>
                    <Slider 
                        defaultValue={[hght]} 
                        max={220} 
                        min={120}
                        onValueChange={handleHghtChange}
                        step={1}
                    />
                </div>
            </div>

            <div className="flex flex-col h-full w-full justify-evenly items-center mt-9">
                <div className='flex h-full flex-col w-full justify-center items-start'>
                    <div className="h-1/5 flex flex-wrap w-full border rounded-md p-2">
                        {tags.map((item, id) => (
                            <Mealtag  key={id} item={item} tag={tags} func={handleDeleteTag}/>
                        ))}
                    </div>
                    <h1 className="text-white text-sm font-medium cursor-default mt-4 mb-1">Cuisines you would like to add</h1>
                    <div className="flex flex-col w-full justify-center items-end">
                     
                        <Select value={value} onValueChange={setValue}>
                            <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="Indian">Indian</SelectItem>
                            <SelectItem value="Mexian">Mexian</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                            <SelectItem value="Chinese">Chinese</SelectItem>
                            <SelectItem value="Dutch">Dutch</SelectItem>
                            </SelectContent>
                        </Select>
                        <button 
                            onClick={handleAddTag}
                            className="flex justify-center items-center border mt-2 border-zinc-700 hover:border-white duration-200 p-1 px-5 rounded-md w-1/6">
                            <IoIosAdd color="white" />
                            <p className="text-white text-[12px]">Add</p>
                        </button>
                    </div>
                    <div className='flex flex-col w-full justify-center items-start'>
                        <h1 className="text-white text-sm font-medium cursor-default mb-1">Meal Preferences</h1>
                        <Select value={meal} onValueChange={setMeal}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="veg">Vegetarian</SelectItem>
                                <SelectItem value="egg">Eggetarian</SelectItem>
                                <SelectItem value="nonveg">Non vegetarian</SelectItem>
                                <SelectItem value="vegan">Vegan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex h-1/4 w-1/2 bg-transparent justify-center items-center rounded-lg border-white border-dashed border-2">
                    <label htmlFor="file" className="flex flex-col h-full w-full  rounded-lg justify-center items-center cursor-pointer">
                        <IoMdCloudUpload color="white" size={22}/>
                            <p className="text-white text-sm">Click to upload</p>
                    </label>
                    <input type="file" id="file" className="hidden"/>
                </div>

                    
            </div>

            <div className="w-full mt-4">
                <button 
                    onClick={() => sendData()}
                    className="w-full rounded-md p-2 bg-transparent border border-zinc-700 hover:border-white duration-200">
                    <p className="text-white">Generate</p>
                </button>
            </div>
        </div>
    );
}

export default UserInputSection;

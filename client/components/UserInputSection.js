import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import { Slider } from "./ui/slider"
import { useState } from "react"

function UserInputSection() {
    const [wght, setWght] = useState(75);
    const [hght, setHght] = useState(180);

    const [fatloss, setFatloss] = useState(false);
    const [maintain, setMaintain] = useState(false);
    const [gain, setGain] = useState(false);

    const handleInput = (e) => {
        console.log(e);
        switch(e){
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
        console.log(fatloss, maintain, gain);
    }

    const handleWghtChange = (value) => {
        console.log(value);
        setWght(value);
    };
    const handleHghtChange = (value) => {
        console.log(value);
        setHght(value);
    };
    return (
        <div className='h-3/4 w-full flex flex-col justify-between items-center bg-transparent border-[1px] rounded-lg border-zinc-700 p-2'>

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


            <div className='flex flex-col w-full justify-center items-center'>
                <div className='flex flex-col w-full justify-center items-start px-1'>
                    <div className='flex w-full justify-between mb-1'>
                        <label className='text-white text-sm font-medium cursor-default'>Weight</label>
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
                <div className='flex flex-col w-full justify-center items-start px-1 mt-3'>
                    <div className='flex w-full justify-between mb-1'>
                        <label className='text-white text-sm font-medium cursor-default'>Height</label>
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

           =
            </div>

            <div className="flex flex-col w-full justify-evenly items-center">
                <div className='flex flex-col w-full justify-center items-start'>
                    <h1 className="text-white text-sm font-medium cursor-default mb-1">Framework</h1>
                    <Select>
                        <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex flex-col w-full justify-center items-start mt-3'>
                    <h1 className="text-white text-sm font-medium cursor-default mb-1">Meal Preference</h1>
                    <Select>
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

            <div className="w-full mt-4">
                <button className="w-full rounded-md p-2 bg-transparent border border-zinc-700 hover:border-white duration-200">
                    <p className="text-white">Generate</p>
                </button>
            </div>

        </div>
    )
}

export default UserInputSection

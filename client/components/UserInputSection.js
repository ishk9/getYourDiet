import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import { Slider } from "./ui/slider"


function UserInputSection() {
    return (
        <div className='h-3/4 w-full flex flex-col justify-center items-center bg-transparent border-[1px] rounded-lg border-zinc-700'>

            {/* Goal */}
            <div>

            </div>


            <div className='flex flex-col w-full justify-center items-center p-2'>
                <div className='flex flex-col w-full justify-center items-start'>
                    <label className='text-white text-sm font-medium cursor-default'>Weight</label>
                    {/* <input placeholder="80kg" className='rounded-lg mt-1 p-2 w-full bg-transparent border-[1px] text-white border-zinc-700 hover:border-white'/> */}
                    <Slider defaultValue={[33]} max={100} step={1} />

                </div>
                <div className='flex flex-col w-full justify-center items-start mt-4'>
                    <label className='text-white text-sm font-medium cursor-default'>Height</label>
                    {/* <input placeholder="180cm" className='rounded-lg mt-1 w-full p-2 bg-transparent border-[1px] text-white border-zinc-700 hover:border-white'/> */}
                    <Slider defaultValue={[33]} max={100} step={1} />

                </div>
            </div>

            <div className="flex flex-col w-full justify-evenly items-center mt-6">
                <div className='flex flex-col w-full justify-center items-start p-2'>
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
                <div className='flex flex-col w-full p-2 justify-center items-start mt-3'>
                    <h1 className="text-white text-sm font-medium cursor-default mb-1">Meal Preference</h1>
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
            </div>

            <div className="p-2 w-full">
                <button className="w-full rounded-md p-2 bg-transparent border border-zinc-700 hover:border-white">
                    <p className="text-white">Generate</p>
                </button>
            </div>

        </div>
    )
}

export default UserInputSection

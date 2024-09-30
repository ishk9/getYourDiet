"use client";

const Footer = () => {
    return (
        <div className='h-auto w-screen flex justify-center items-center'>
            <div className='w-[90%] px-4 flex flex-col justify-center items-center'>
                <p className='text-sm text-white font-medium'>* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Information on this site is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease or prescribing any medication. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.</p>
                <hr className=' bg-white rounded-md my-6 w-full'/>
                <p className='text-sm text-white  mb-6'>Copyright © 2024 GETYOURDIET INC</p>
            </div>

        </div>
    )
}

export default Footer

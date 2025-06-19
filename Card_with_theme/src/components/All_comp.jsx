import React from 'react'
import Card from './Card';
import ThemeBtn from './ThemeBtn';

const All_comp = ({name}) => {
  return (
    <>
    <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>
    
                <div className="w-full max-w-sm mx-auto">
                  <Card name={name}/>
                </div>
              </div>
            </div>
    </>
  )
}

export default All_comp
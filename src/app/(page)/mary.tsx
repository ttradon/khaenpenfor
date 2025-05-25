"use client"
import { Play } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import confetti from "canvas-confetti"
import { useMutation } from "@tanstack/react-query"

const MaryPage = () => {
    const [ user,setUser ] = useState("")
    const [ crush,setCrush ] = useState("")
    let [ w,setW ] = useState(100)
    let [ h,setH ] = useState(50) 
    let [ fs,setFs ] = useState(24)
    const [ go,setGo ] = useState(false)
    const [ yes,setYes ] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const audioPlay = () => {
        if(user && crush){
            setGo(true)
            if(audioRef.current) {
                audioRef.current.volume = 0.02
                audioRef.current.play()
            }
        }
    }

    const reduce = () => {
        setW(w-20)
        setH(h-10)
        setFs(fs-4)
        console.log("-2")
    }

    const handleConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 100
        })
        setYes(true)
    }

    const now = new Date()

    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()

  return (
    <div className="">
        <audio ref={audioRef} src={"/pakinson.mp3"}></audio>
        { go ? (
            yes ? (
                <div className="w-screen h-screen flex flex-col items-center bg-pink-100">
                    <div className="flex justify-center items-center space-x-5 mt-50">
                        <p className="text-xl md:text-3xl font-bold text-rose-500">{user}</p>
                        <p className="text-xl md:text-3xl">❤️</p>
                        <p className="text-xl md:text-3xl font-bold text-rose-500">{crush}</p>
                    </div>
                    <Image className="size-60 md:size-100 animate-dog" src={"/fall.png"} width={1000} height={1000} alt="."/>
                    <p className="text-md md:text-2xl font-[700]">เป็นแฟนกัน ณ วันที่ {date} เวลา {time}</p>
                </div>
            ) : (
                <div className="w-screen h-screen flex flex-col items-center bg-amber-100/50">
                    <p className="mt-40 text-xl md:text-3xl font-bold text-rose-500">{user}</p>
                    <Image className="size-80 md:size-100 mr-10 animate-dog" src={"/dog.png"} width={1000} height={1000} alt="."/>
                    <div className="flex mb-10 font-bold text-xl md:text-2xl">
                        <p className="">เป็น</p>
                        <p className="text-pink-700">แฟน</p>
                        <p className="">กับ {crush} มั้ย?</p>
                    </div>
                    <div className="flex justify-center items-center space-x-5">
                        <button onClick={handleConfetti} className="cursor-pointer bg-green-500 text-white font-bold rounded-md hover:bg-green-500/90 animate-bounce" style={{ width: `${200-w}px`, height: `${100-h}px`, fontSize: `${48-fs}px`}}>Yes</button>
                        <button onClick={reduce} className="cursor-pointer bg-red-500 text-white font-bold rounded-md hover:bg-red-500/90 animate-bounce" style={{ width: `${w}px`, height: `${h}px`, fontSize: `${fs}px`}}>No</button>
                    </div>
                </div>
            )
            ) : (
            <div className="w-screen h-screen flex flex-col items-center justify-center space-y-10 bg-pink-400">
                <div onClick={audioPlay} className="bg-pink-600 p-7 rounded-full cursor-pointer hover:bg-pink-700 duration-200 border-7 border-white hover:scale-105 ">
                    <Play className="text-white size-10 md:size-30" />    
                </div>
                <p className="text-xl md:text-3xl font-bold text-white">Click to start!</p>
                <div className="flex flex-col justify-center items-end space-y-5">
                    <div className="flex justify-center items-center space-x-5">
                        <p className="text-white font-bold text-md md:text-2xl">YOU : </p>
                        <input onChange={(e) => setUser(e.target.value)} required className="border-2 rounded-md font-bold text-white shadow-md px-5 py-2 text-md md:text-xl" type="text"/>
                    </div>
                    <div className="flex justify-center items-center space-x-5">
                        <p className="text-white font-bold text-md md:text-2xl">CRUSH : </p>
                        <input onChange={(e) => setCrush(e.target.value)} required className="border-2 rounded-md font-bold text-white shadow-md px-5 py-2 text-md md:text-xl" type="text"/>
                    </div>
                </div>
            </div>
        )}
        
    </div>
  )
}
export default MaryPage
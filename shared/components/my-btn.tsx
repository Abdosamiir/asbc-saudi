"use client"
import { Button } from "./ui/button"

const MyBtn = () => {
  return (
    <Button className="mt-2" onClick={() => console.log("Button clicked!")}>
      Button
    </Button>
  )
}

export default MyBtn

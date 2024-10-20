import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"





function Header() {
  return (
    <nav className=" py-4 flex justify-between items-center px-16">
        <Link to={"/"}>
         <img src="/logo.png" alt="Company Logo" className="h-20" />       
        </Link>

        <Button variant={"outline"}>Login</Button>

        {/* <SignedOut >
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      
    </nav>
  )
}

export default Header

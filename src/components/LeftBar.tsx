import Link from "next/link";
import Image from "next/image";


const menuList = [
    {
        id:1,
        name:"HomePage",
        link:"/",
        icon:"home.svg",
    },
    {
        id:2,
        name:"Explore",
        link:"/",
        icon:"explore.svg",
    },
    {
        id:3,
        name:"Notification",
        link:"/",
        icon:"notification.svg",
    },
    {
        id:4,
        name:"Messages",
        link:"/",
        icon:"messages.svg",
    },
    {
        id:5,
        name:"Bookmarks",
        link:"/",
        icon:"bookmarks.svg",
    },
    {
        id:6,
        name:"Profile",
        link:"/",
        icon:"profile.svg",
    },

]

const LeftBar = () => {
    return (  
        <div className="h-screen sticky flex flex-col justify-between pt-2 pb-8">
            {/* LOGO MENU BUTTON */}
            <div className="">
                {/* LOGO */}
                <Link href="/">
                    <Image src ="icons/logo_nrkm.svg" alt="logo_nrkm" width={44} height={44}/>
                </Link>

                {/* MENU */}
                <div className="flex flex-col">
                    {menuList.map(item =>(
                         <Link href={item.link} className=" " key={item.id}>
                          <Image 
                            src={'icons/${item.icon}'} 
                            alt="{icons.name}" 
                            width={24} 
                            height={24}
                          />
                         </Link>
                       
                       
                    ))}
                </div>
            </div>
            {/* USER */}
            <div className="">USER</div>
        </div>
    );
}
 
export default LeftBar;
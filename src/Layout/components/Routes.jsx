import { CiHome } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiFolderOff } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
export const routes=[
    {
        path:'/',
        icon:<CiHome />,
        ariaLabel: 'Home',
    },
    {
        path:'/messages',
        icon:<MdOutlineMarkEmailUnread />,
        ariaLabel: 'Message',
    },
    {
        path:'/notes',
        icon:<IoDocumentTextOutline />,
        ariaLabel: 'Notes',
    },
    {
        path:'/folders',
        icon:<CiFolderOff />,
        ariaLabel: 'Folders',
    }
]
export const bottomRoutes=[
    {
        path:'/settings',
        icon:<CiSettings />,
        ariaLabel: 'Settings',
    },
    {
        path:'profile',
        icon:<CiUser />,
        ariaLabel: 'Profile',
    }

]
import Image from "next/image";
import Link from "next/link";
import { title } from "process"

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home", 
                href: "/",
            },
            {
                icon: "/teacher.png",
                label: "Teachers", 
                href: "/",
            },
            {
                icon: "/student.png",
                label: "Students", 
                href: "/",
            },
            {
                icon: "/class.png",
                label: "Classes", 
                href: "/",
            },
            {
                icon: "/lesson.png",
                label: "Lessons", 
                href: "/",
            },
            {
                icon: "/exam.png",
                label: "Exams", 
                href: "/",
            },
            {
                icon: "/assignment.png",
                label: "Assignments", 
                href: "/",
            },
            {
                icon: "/attendance.png",
                label: "Attendance", 
                href: "/",
            },
            {
                icon: "/calendar.png",
                label: "Events", 
                href: "/",
            },
            {
                icon: "/message.png",
                label: "Messages", 
                href: "/",
            },
            {
                icon: "/announcement.png",
                label: "Announcements", 
                href: "/",
            },

        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/"
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/"
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/"
            },
        ],
    },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
        {menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.title}>
                <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                {i.items.map(item=>(
                    <Link 
                    href={item.href} 
                    key={item.label} 
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 py-2">
                        <Image src={item.icon} alt="" width={20} height={20}/>
                        <span className="hidden lg:block">{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  );
};

export default Menu